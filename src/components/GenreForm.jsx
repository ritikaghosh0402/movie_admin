// components/GenreForm.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
    <div className="w-full">
      {/* Edit Form Card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1a1c23] border border-yellow-500 shadow-yellow-500/30 shadow-2xl rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-bold mb-4 text-yellow-400">📄 {isEdit ? "Edit Genre" : "Add Genre"}</h2>
        <label className="text-yellow-400 font-semibold">Genre Name</label>
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-[#22242c] text-white p-2 mt-1 w-full border border-yellow-500 rounded"
          placeholder="🎵 Genre"
        />
        <div className="flex gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isEdit ? handleUpdate : handleAdd}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
          >
            {isEdit ? "Update Genre" : "Add Genre"}
          </motion.button>
          {isEdit && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsEdit(false);
                setGenre("");
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              ❌
            </motion.button>
          )}
        </div>
        <div className="mt-6 text-white">
          Total Genres:{" "}
          <span className="text-yellow-400 text-xl font-bold">{genres.length}</span>
        </div>
      </motion.div>

      {/* Existing Genres List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#1a1c23] border border-yellow-500 shadow-yellow-500/30 shadow-2xl rounded-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4 text-yellow-400">🎵 Existing Genres</h2>
        <div className="space-y-3">
          {genres.map((g, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex justify-between items-center bg-[#22242c] text-yellow-300 p-3 rounded transition-all duration-300 group hover:shadow-lg"
            >
              <span>{g}</span>
              <div className="hidden group-hover:flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEdit(g, idx)}
                  className="bg-yellow-400 px-2 rounded hover:bg-yellow-500"
                >
                  ✏️
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(idx)}
                  className="bg-red-500 px-2 rounded hover:bg-red-600"
                >
                  🗑️
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GenreForm;
