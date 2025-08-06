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
    <div className="min-h-screen bg-[#0f1117] text-white px-6 py-10">
      {/* Top Right Admin Dropdown */}
      <div className="flex justify-end items-center mb-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-lg transition"
          >
            <span className="text-lg">👤</span> Admin User
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] border border-yellow-500 text-white rounded-lg shadow-lg z-50 overflow-hidden">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 hover:bg-yellow-500 hover:text-black transition"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-2">Add Genres</h1>
        <p className="text-gray-400 text-lg">Organize content by genres and themes</p>
      </div>

      {/* Genre Form + Existing Genres */}
      <GenreForm />

      {/* Upload Movie Section */}
      <UploadMovieForm />
    </div>
  );
};

export default Dashboard;
