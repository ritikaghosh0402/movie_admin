// components/UploadMovieForm.jsx
import React, { useState } from "react";

const UploadMovieForm = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="bg-[#1a1c23] p-6 rounded-lg mt-10 border border-yellow-600 shadow text-white">
      <h2 className="text-xl font-bold mb-4">🎬 Upload Movie</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-yellow-400">Title</label>
          <input className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded" placeholder="Enter movie title" />
        </div>
        <div>
          <label className="text-yellow-400">Release Year</label>
          <input className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded" placeholder="e.g., 2024" />
        </div>
        <div className="md:col-span-2">
          <label className="text-yellow-400">Description</label>
          <textarea className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded" placeholder="Enter movie description" />
        </div>

        {/* Upload Inputs */}
        <div>
          <label className="text-yellow-400">Poster Image</label>
          <input type="file" className="w-full" />
        </div>
        <div>
          <label className="text-yellow-400">Backdrop Image</label>
          <input type="file" className="w-full" />
        </div>
        <div>
          <label className="text-yellow-400">Video File</label>
          <input type="file" className="w-full" />
        </div>
        <div>
          <label className="text-yellow-400">Duration (minutes)</label>
          <input className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded" placeholder="e.g., 120" />
        </div>

        {/* Rating slider */}
        <div className="md:col-span-2">
          <label className="text-yellow-400">Average Rating (1-10)</label>
          <input
            type="range"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full"
          />
          <div className="text-right text-yellow-400">⭐ {rating}</div>
        </div>

        {/* Select dropdowns */}
        <div>
          <label className="text-yellow-400">Watch Age Rating</label>
          <select className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded">
            <option>Select Age Rating</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400">Genre Category</label>
          <select className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded">
            <option>Select Genre</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400">Content Type</label>
          <select className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded">
            <option>Select Content Type</option>
          </select>
        </div>
        <div>
          <label className="text-yellow-400">Release Type</label>
          <select className="w-full p-2 bg-[#22242c] border border-yellow-500 rounded">
            <option>Select Release Type</option>
          </select>
        </div>
      </div>

      <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded">
        ⬆️ Upload Movie
      </button>
    </div>
  );
};

export default UploadMovieForm;
