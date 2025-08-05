import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <div className={`fixed z-50 top-0 left-0 h-full bg-black/90 w-60 p-4 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/upload">Upload Content</Link></li>
        <li><Link to="/genres">Manage Genres</Link></li>
        <li><button onClick={() => {
          localStorage.removeItem("auth");
          window.location.href = "/";
        }}>Logout</button></li>
      </ul>
    </div>
  );
}
