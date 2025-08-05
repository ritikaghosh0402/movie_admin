import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Dummy auth
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("auth", "true");
      window.location.href = "/dashboard";
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-900">
      <div className="bg-black/60 p-8 rounded-lg w-[350px] shadow-xl text-white">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
        <input
          className="w-full p-2 mb-4 rounded bg-gray-800 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-4 rounded bg-gray-800 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 hover:bg-yellow-600 p-2 rounded text-black font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
