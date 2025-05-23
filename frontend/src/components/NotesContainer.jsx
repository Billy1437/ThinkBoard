import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
const NotesContainer = ({ col, gap, children, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("failed to delete");
    }
  };
  return (
    <div
      style={{ "--cols": col, "--gap": gap }}
      className="flex flex-wrap gap-[var(--gap)]"
    >
      {children.map((data, i) => {
        return (
          <Link
            to={`note/${data._id}`}
            key={i}
            className="flex-none w-full md:w-[calc((100%_-_((var(--gap)_*_(var(--cols)_-_1))))/var(--cols))] card bg-base-100 hover:shadow-lg
            transition-all duration-200 border-t-4 border-solid border-accent"
          >
            <div data-id={data._id} id="" className="card-body">
              <h3 className="card-title text-base-content">{data.title}</h3>
              <p className="text-base-content/70 line-clamp-3">
                {data.content}
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content">
                  {formatDate(new Date(data.createdAt))}
                </span>
                <div className="flex items-center gap-1">
                  <PenSquareIcon className="size-4" />
                  <button
                    className="btn btn-ghost btn-xs text-error"
                    onClick={(e) => handleDelete(e, data._id)}
                  >
                    <Trash2Icon className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NotesContainer;
