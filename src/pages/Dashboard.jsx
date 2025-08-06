import React, { useState } from "react";
import GenreForm from "../components/GenreForm";
import UploadMovieForm from "../components/UploadMovieForm";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";



const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white px-6 py-10 relative overflow-hidden">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md md:hidden"
      >
        ☰
      </button>

      {/* Sidebar Component */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Admin User Dropdown */}
      <div className="flex justify-end items-center mb-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-inner shadow-yellow-200 transition"
          >
            <FaRegUserCircle className="text-xl" /> Admin User

          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] border border-yellow-400/30 text-white rounded-lg shadow-lg z-50 overflow-hidden">
              <button
  onClick={handleLogout}
  className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-yellow-500 hover:text-black transition-colors duration-200"
>
  <MdOutlineLogout className="text-lg" />
  <span>Logout</span>
</button>
            </div>
          )}
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-2">Add Genres</h1>
        <p className="text-gray-400 text-lg">Organize content by genres and themes</p>
      </div>

      {/* Genre Form + Existing Genres */}
      <GenreForm />

      {/* Upload Movie Section */}
      <div className="mt-20">
        <UploadMovieForm />
      </div>
    </div>
  );
};

export default Dashboard;
