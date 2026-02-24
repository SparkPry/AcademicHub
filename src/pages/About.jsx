import { Link } from "react-router-dom";
import EnergyIcons from "../components/EnergyIcons";
// import AssistantButton from "../components/AssistantButton";
export default function AboutUs() {
  return (
    <div className="relative min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-12 sm:mb-16 md:mb-20 text-center mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500 mb-4 sm:mb-6">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2">
            Welcome to{" "}
            <span className="font-bold text-cyan-500">Academic Hub</span>, where
            learners gain practical, career‑ready skills through accessible and
            flexible education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-2">
            <Link
              to="/courses"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 text-sm sm:text-base whitespace-nowrap"
            >
              Browse Courses
            </Link>
            <Link
              to="/auth-role"
              className="border border-gray-300 dark:border-slate-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          aria-labelledby="mission-vision-heading"
          className="mb-12 sm:mb-16 md:mb-20 grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
        >
          <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2
              id="mission-heading"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-500 mb-3 sm:mb-4"
            >
              Mission
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Transform learning with technology and expert instruction,
              focusing on real‑world skills for the future.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2
              id="vision-heading"
              className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-4"
            >
              Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Break barriers to make education borderless, accessible, and a
              right for everyone worldwide.
            </p>
          </div>
        </section>

        {/* Future-Proof */}
        <section
          aria-labelledby="future-proof-heading"
          className="mb-16 sm:mb-20 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg p-8 sm:p-10 shadow-lg"
        >
          <h2
            id="future-proof-heading"
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            Future-Proof Your Skills
          </h2>
          <p className="text-lg leading-relaxed">
            Stay ahead with technical expertise, business execution, and
            lifelong learning support.
          </p>
        </section>

        {/* Core Values */}
        <section aria-labelledby="core-values-heading">
          <h2
            id="core-values-heading"
            className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-8 sm:mb-10 text-center"
          >
            Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm dark:shadow-slate-900/50 hover:shadow-md dark:hover:shadow-slate-900/70 transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cyan-500 mb-3">
                Simple Access
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Learning available anywhere with an internet connection.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm dark:shadow-slate-900/50 hover:shadow-md dark:hover:shadow-slate-900/70 transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cyan-500 mb-3">
                Flexible Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Study at your own pace, on your own schedule.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm dark:shadow-slate-900/50 hover:shadow-md dark:hover:shadow-slate-900/70 transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cyan-500 mb-3">
                Career-Ready Skills
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Courses built to teach practical, real‑world knowledge.
              </p>
            </div>
          </div>
        </section>
      </div>

      <EnergyIcons />
      {/* <AssistantButton /> */}
    </div>
  );
}
