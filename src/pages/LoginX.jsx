

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginX = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://e-learning-api-production-a6d4.up.railway.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ Store what backend ACTUALLY returns
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    alert("Login successful!");

    // ✅ Role-based redirect
    if (data.role === "student") {
      navigate("/");
    } else if (data.role === "instructor") {
      navigate("/instructor");
    } else if (data.role === "admin") {
      navigate("/admin");
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

  return (
    <div
      id="loginPage"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4"
    >
      <div className="flex max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side Illustration */}
        <div className="hidden md:flex md:w-1/2 illustration p-12 items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"></div>

          <div className="relative z-10 text-center">
            <div className="flex justify-center space-x-4 mb-8">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="relative mx-auto w-64 h-40">
              <div className="bg-gray-800 rounded-t-lg p-2 h-32">
                <div className="bg-white rounded h-full relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="absolute top-2 left-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-2 left-10 w-2 h-2 bg-green-400 rounded-full"></div>

                  <div className="mt-8 px-4">
                    <div className="h-1 bg-gray-200 rounded mb-2"></div>
                    <div className="h-1 bg-gray-200 rounded mb-2"></div>
                    <div className="h-1 bg-blue-400 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 h-2 rounded-b-lg"></div>
              <div className="bg-gray-600 h-4 w-20 mx-auto rounded-b-lg"></div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/1.5 p-16 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Login
            </h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg text-white font-semibold rounded-xl bg-blue-600 hover:shadow-lg transition-all"
              >
                Login
              </button>
            </form>

            <div className="mt-8 flex justify-between text-base">
              <a
                href="/signupx"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Create an account
              </a>
              <button className="text-blue-600 hover:text-blue-800">
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginX;
