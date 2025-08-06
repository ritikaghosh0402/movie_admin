import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const GenreForm = () => {
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState(["Romance", "Mystery", "Fantasy", "Thriller", "Adventure"]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (genre.trim()) {
      setGenres([...genres, genre]);
      toast.success("Genre added!");
      setGenre("");
    }
  };

  const handleUpdate = () => {
    const updated = [...genres];
    updated[editIndex] = genre;
    setGenres(updated);
    setGenre("");
    setIsEdit(false);
    toast.success("Genre updated!");
  };

  const handleEdit = (g, idx) => {
    setGenre(g);
    setIsEdit(true);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    const updated = genres.filter((_, i) => i !== idx);
    setGenres(updated);
    toast.info("Genre deleted");
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center z-10">
      {/* Yellow Glowing Circle */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      {/* Genre Form + Existing Genres Grid */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 z-10">
        {/* Add/Edit Genre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#ffffff0a] backdrop-blur-md border border-yellow-400 rounded-md p-6"
        >
          <h2 className="text-xl font-bold mb-4 text-yellow-400 text-center">📄 {isEdit ? "Edit Genre" : "Add Genre"}</h2>
          <label className="text-yellow-400 font-semibold">Genre Name</label>
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-transparent text-white p-2 mt-1 w-full border border-yellow-400 rounded-md"
            placeholder="🎵 Genre"
          />
          <div className="flex gap-3 mt-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isEdit ? handleUpdate : handleAdd}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold"
            >
              {isEdit ? "💾 Update Genre" : "➕ Add Genre"}
            </motion.button>
            {isEdit && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsEdit(false);
                  setGenre("");
                }}
                className="bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                ❌
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Existing Genres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
          <h2 className="text-xl font-bold mb-4 text-yellow-400">🎵 Existing Genres</h2>
          <div className="space-y-3">
            {genres.map((g, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex justify-between items-center px-4 py-3 bg-transparent text-yellow-300 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_#facc15]"
              >
                <span>{g}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(g, idx)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    🗑️
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Total Genres Section Below */}
      <div className="mt-10 w-full max-w-md z-10">
        <div className="bg-[#ffffff0a] backdrop-blur-md border border-yellow-400 rounded-md p-5 flex items-center justify-between text-white">
          <div>
            <h3 className="font-semibold text-md">Total Genres</h3>
            <p className="text-gray-400 text-sm">Manage content genres</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-2xl font-bold">{genres.length}</span>
            <span className="text-green-400 text-xl">📈</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreForm;
