import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatPage from "./pages/CreatPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#125380_100%)]"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatPage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
