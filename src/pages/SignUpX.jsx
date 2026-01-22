// const SignUpX = () => {

//   return (
//     <div
//       id="signupPage"
//       className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4"
//     >
//       <div className="flex max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Left Side - Sign Up Form */}
//         <div className="w-full md:w-1/1.5 p-16 flex items-center justify-center">
//           <div className="w-full max-w-lg">
//             <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
//               Sign Up
//             </h2>

//             <form className="space-y-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="User name"
//                   className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <svg
//                   className="absolute right-5 top-4 w-6 h-6 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                   />
//                 </svg>
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <svg
//                   className="absolute right-5 top-4 w-6 h-6 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </div>

//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <svg
//                   className="absolute right-5 top-4 w-6 h-6 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                   />
//                 </svg>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 text-lg text-white font-semibold rounded-xl bg-blue-600 hover:shadow-lg transition-all duration-300"
//               >
//                 Sign up
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <a href="/loginx" className="text-blue-600 hover:text-blue-800 transition-colors">
//                 Already have an account
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Illustration */}
        // <div className="hidden md:flex md:w-1/2 illustration p-12 items-center justify-center relative">
        //   <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"></div>

        //   <div className="relative z-10 text-center">
        //     <div className="flex justify-center space-x-4 mb-8">
        //       {[1, 2, 3, 4].map((_, i) => (
        //         <div
        //           key={i}
        //           className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        //         >
        //           <svg
        //             className="w-6 h-6 text-gray-700"
        //             fill="currentColor"
        //             viewBox="0 0 20 20"
        //           >
        //             <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        //           </svg>
        //         </div>
        //       ))}
        //     </div>

        //     <div className="relative mx-auto w-64 h-40">
        //       <div className="bg-gray-800 rounded-t-lg p-2 h-32">
        //         <div className="bg-white rounded h-full relative overflow-hidden">
        //           <div className="absolute top-2 left-2 w-2 h-2 bg-red-400 rounded-full"></div>
        //           <div className="absolute top-2 left-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
        //           <div className="absolute top-2 left-10 w-2 h-2 bg-green-400 rounded-full"></div>

        //           <div className="mt-8 px-4">
        //             <div className="h-1 bg-gray-200 rounded mb-2"></div>
        //             <div className="h-1 bg-gray-200 rounded mb-2"></div>
        //             <div className="h-1 bg-blue-400 rounded w-3/4"></div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="bg-gray-700 h-2 rounded-b-lg"></div>
        //       <div className="bg-gray-600 h-4 w-20 mx-auto rounded-b-lg"></div>
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpX;
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignUpX = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get role from previous page, default to 'student'
  const role = location.state?.role || "student";

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: role,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://e-learning-api-production-a6d4.up.railway.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Failed to register");
      alert("Registration successful!");
      navigate("/loginx"); // go to login page
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div
      id="signupPage"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4"
    >
      <div className="flex max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Sign Up Form */}
        <div className="w-full md:w-1/1.5 p-16 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Sign Up ({role})
            </h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="User name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

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
                className="w-full py-4 text-lg text-white font-semibold rounded-xl bg-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Sign up
              </button>
            </form>

            <div className="mt-8 text-center">
              <a
                href="/loginx"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Already have an account
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
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
      </div>
    </div>
  );
};

export default SignUpX;
