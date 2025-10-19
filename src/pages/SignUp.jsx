import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <form
        onSubmit={handleSignUp}
        className="bg-slate-800 p-10 rounded-2xl shadow-2xl w-[400px]"
      >
        <div className="flex items-center gap-2 mb-6">
          <UserPlus className="text-cyan-400 w-6 h-6" />
          <h2 className="text-2xl font-bold">Create Account</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-slate-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 rounded-lg transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
