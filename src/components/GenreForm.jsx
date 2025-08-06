import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import GenreParticles from "./GenreParticles"; 
import { MdDelete } from "react-icons/md";
import { CiEdit, CiMusicNote1 } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoSaveOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";


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
      {/* Glowing Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/30 via-yellow-400/10 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 relative z-10">
        {/* Left Column: Add Genre + Total Genres */}
        <div className="space-y-6 col-span-1">
          {/* Add Genre Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffffff0a] backdrop-blur-md border border-yellow-400/40 rounded-lg p-6 shadow-yellow-500/10 min-h-[200px]"
          >
            <h2 className="text-xl font-bold mb-4 text-yellow-400 text-center flex items-center justify-center gap-2">
  <IoSaveOutline />
  {isEdit ? "Edit Genre" : "Add Genre"}
</h2>

            <label className="text-yellow-400 font-semibold">Genre Name</label>
            <input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="bg-transparent text-white p-2 mt-1 w-full border border-yellow-400/50 rounded-lg"
              placeholder="🎵 Genre"
            />
            <div className="flex gap-3 mt-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={isEdit ? handleUpdate : handleAdd}
                className="bg-yellow-400 text-black px-6 py-2 rounded-xl shadow-inner shadow-yellow-300 hover:scale-105 transition duration-200"
              >
                {isEdit ? (
  <span className="flex items-center gap-2">
    <IoSaveOutline /> Update Genre
  </span>
) : (
  <span className="flex items-center gap-2">
    <IoSaveOutline /> Add Genre
  </span>
)}

              </motion.button>
              {isEdit && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsEdit(false);
                    setGenre("");
                  }}
                  className="bg-gray-700 text-yellow-400 px-6 py-2 rounded-lg"
                >
                  <RxCross1 />  
                  
                   
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Total Genres Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black/20 text-white border border-yellow-400/30 rounded-lg p-4 shadow-yellow-200/10 backdrop-blur-md min-h-[80px] flex justify-between items-center"
          >
            <div>
              <h4 className="font-bold text-yellow-300 text-lg"> Total Genres</h4>
              <p className="text-sm text-gray-400">Manage content genres</p>
            </div>
            <div className="text-yellow-400 font-bold text-2xl flex items-center gap-2">
              {genres.length} <span><FaArrowTrendUp /></span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Existing Genres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
         <h2 className="text-xl font-bold mb-4 text-yellow-400">
  <CiMusicNote1 className="inline-block mr-2" /> Existing Genres
</h2>

          <div className="space-y-3">
            {genres.map((g, idx) => (
  <GenreParticles key={idx}>
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="relative flex justify-between items-center bg-[#1b1b1b] text-yellow-300 px-4 py-2 rounded-lg transition overflow-hidden group"
    >
      {/* Particle hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full animate-pulse bg-yellow-400/5 rounded-lg blur-sm pointer-events-none"></div>
      </div>
      <span className="z-10">{g}</span>
       <div className="z-10 relative flex justify-end gap-2 mt-2">
        <button
          onClick={() => handleEdit(g, idx)}
          className="p-2 text-yellow-300 border border-yellow-400 hover:bg-yellow-400 hover:text-black rounded-md transition"
        >
          <CiEdit />
        </button>
        <button
          onClick={() => handleDelete(idx)}
          className="p-2 text-white border border-red-500 hover:bg-red-500 rounded-md transition"
        >
           <MdDelete />
        </button>
      </div>
    </motion.div>
  </GenreParticles>
))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenreForm;
