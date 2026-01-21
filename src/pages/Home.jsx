import React, { useState, useEffect } from "react";
import Navbar from "../components/navBar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import EnergyIcons from "../components/EnergyIcons";
import AssistantButton from "../components/AssistantButton";
import Particles from "../components/Particles";
import why from "../assets/imgs/why.jpg";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 overflow-x-hidden">
      {/* Floating Particles */}
      <Particles />
      {/* Hero Section */}
      <Hero scrollY={scrollY} />
      {/* Floating Energy Icons */}
      <EnergyIcons />

      {/* Courses Section */}
      <Courses />

      <div>
        {/* <!-- Why Choose Us --> */}
        <section class="py-20 dark:bg-[#111A2E] dark:text-white transition-colors duration-300">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-5xl md:text-6xl font-bold text-slate-900 mb-8 dark:text-white">
                  Why Choose AngkorEdu?
                </h2>
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Self-paced learning
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Learn at your own speed with lifetime access to course
                        materials.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Expert instructors and mentorship
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Learn from industry professionals with years of
                        experience.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Flexible online learning experience
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Access courses from anywhere, on any device, at any
                        time.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Advanced skill-level training
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Progress from beginner to advanced with structured
                        learning paths.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Internationally recognized
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Earn certificates recognized by employers worldwide.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        Build an impressive portfolio
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        Create real projects that showcase your skills to
                        potential employers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <img
                  src={why}
                  alt=""
                  class="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* AI Assistant Button */}
      <AssistantButton />

      {/* You can keep all your CSS keyframes in global CSS */}
    </div>
  );
}
