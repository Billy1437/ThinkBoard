import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatPage from "./pages/CreatPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn btn-primary">click me</button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatPage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
