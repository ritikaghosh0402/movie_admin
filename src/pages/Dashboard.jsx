// src/pages/Dashboard.jsx
import React, { useState } from "react";
import GenreForm from "../components/GenreForm";
import UploadMovieForm from "../components/UploadMovieForm";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold">Add Genres</h1>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full shadow-md"
          >
            <span className="mr-2">👤</span> Admin User
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1c23] border border-yellow-500 rounded shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-left w-full hover:bg-yellow-500 hover:text-black"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        <GenreForm />
        {/* GenreForm already contains the genre list */}
      </div>

      <UploadMovieForm />
    </div>
  );
};

export default Dashboard;
