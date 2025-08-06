import React, { useState } from "react";

const UploadMovieForm = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="bg-[#0f111a] p-6 rounded-lg mt-10 border border-yellow-600 shadow text-white max-w-6xl mx-auto">
      {/* Centered heading */}
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">🎬 Upload Movie</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="text-yellow-400 font-semibold">Title</label>
        <input
          type="text"
          placeholder="Enter movie title"
          className="w-full p-3 mt-1 bg-[#1a1c23] border border-yellow-500 rounded outline-none"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="text-yellow-400 font-semibold">Description</label>
        <textarea
          rows="4"
          placeholder="Enter movie description"
          className="w-full p-3 mt-1 bg-[#1a1c23] border border-yellow-500 rounded outline-none"
        />
      </div>

      {/* Upload Fields Row (Headings) */}
      <div className="grid grid-cols-3 gap-6 mb-2">
        <h3 className="text-yellow-400 font-semibold text-sm">Poster Image</h3>
        <h3 className="text-yellow-400 font-semibold text-sm">Backdrop Image</h3>
        <h3 className="text-yellow-400 font-semibold text-sm">Video File</h3>
      </div>

      {/* Upload Fields Row (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Poster */}
        <label className="border-2 border-dashed border-yellow-400 bg-[#1a1c23] rounded-lg p-4 text-center cursor-pointer hover:border-yellow-500">
          <input type="file" hidden />
          <div className="text-yellow-400 text-xl mb-2">🖼️</div>
          <div className="text-sm text-yellow-400 font-semibold">Choose poster image</div>
          <div className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 10MB</div>
          <div className="text-xs text-yellow-500 mt-1 underline">Click to browse or drag & drop</div>
        </label>

        {/* Backdrop */}
        <label className="border-2 border-dashed border-yellow-400 bg-[#1a1c23] rounded-lg p-4 text-center cursor-pointer hover:border-yellow-500">
          <input type="file" hidden />
          <div className="text-yellow-400 text-xl mb-2">🖼️</div>
          <div className="text-sm text-yellow-400 font-semibold">Choose backdrop image</div>
          <div className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 10MB</div>
          <div className="text-xs text-yellow-500 mt-1 underline">Click to browse or drag & drop</div>
        </label>

        {/* Video */}
        <label className="border-2 border-dashed border-yellow-400 bg-[#1a1c23] rounded-lg p-4 text-center cursor-pointer hover:border-yellow-500">
          <input type="file" hidden />
          <div className="text-yellow-400 text-xl mb-2">🎥</div>
          <div className="text-sm text-yellow-400 font-semibold">Choose video file</div>
          <div className="text-xs text-gray-400 mt-1">MP4, AVI, MOV, WEBM up to 500MB</div>
          <div className="text-xs text-yellow-500 mt-1 underline">Click to browse or drag & drop</div>
        </label>
      </div>

      {/* Duration + Release Year */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-yellow-400 font-semibold">Duration (minutes)</label>
          <input
            type="number"
            placeholder="e.g., 120"
            className="w-full p-3 mt-1 bg-[#1a1c23] border border-yellow-500 rounded"
          />
        </div>
        <div>
          <label className="text-yellow-400 font-semibold">Release Year</label>
          <input
            type="number"
            placeholder="e.g., 2024"
            className="w-full p-3 mt-1 bg-[#1a1c23] border border-yellow-500 rounded"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label className="text-yellow-400 font-semibold">Average Rating (1-10)</label>
        <input
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full mt-2"
        />
        <div className="text-yellow-400 text-right font-semibold mt-1">⭐ {rating}</div>
      </div>

      {/* Dropdown Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-yellow-400 font-semibold">Watch Age Rating</label>
          <select className="w-full p-2 mt-1 bg-[#1a1c23] border border-yellow-500 rounded">
            <option>Select Age Rating</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400 font-semibold">Genre Category</label>
          <select className="w-full p-2 mt-1 bg-[#1a1c23] border border-yellow-500 rounded">
            <option>Select Genre</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400 font-semibold">Content Type</label>
          <select className="w-full p-2 mt-1 bg-[#1a1c23] border border-yellow-500 rounded">
            <option>Select Content Type</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400 font-semibold">Release Type</label>
          <select className="w-full p-2 mt-1 bg-[#1a1c23] border border-yellow-500 rounded">
            <option>Select Release Type</option>
          </select>
        </div>
      </div>

      {/* Upload Button */}
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition duration-200">
        ⬆️ Upload Movie
      </button>
    </div>
  );
};

export default UploadMovieForm;
