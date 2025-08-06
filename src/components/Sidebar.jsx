// components/Sidebar.js
import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay to close sidebar on click outside */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 top-0 left-0 h-full bg-[#0f1117] w-60 p-6 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-6">
          <li>
            <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          </li>
          <li>
            <Link to="/upload" onClick={() => setOpen(false)}>Upload Content</Link>
          </li>
          <li>
            <Link to="/genres" onClick={() => setOpen(false)}>Manage Genres</Link>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
              className="text-red-400 hover:text-red-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
