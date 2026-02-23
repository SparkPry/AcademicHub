import React, { useState } from "react";
import EnergyIcons from "../components/EnergyIcons";
// import AssistantButton from "../components/AssistantButton";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // TODO: Replace with actual API call to your backend
      console.log("Submitting contact form:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit message. Please try again.");
    }
  };

  return (
        <div className="relative min-h-screen dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Contact Intro */}
      <div className="text-center mb-8 sm:mb-10 mt-8 sm:mt-12 md:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-500 dark:text-cyan-400">
          Get in touch
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Have questions or need assistance? Reach out to us via the options
          below. We're happy to help!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center transition duration-300 hover:shadow-lg hover:scale-105">
          <i className="fa-solid fa-headphones text-3xl mb-2 text-cyan-500"></i>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Help & Support
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Need help with purchases, login issues, or software problems? We've
            got you covered.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">
            Help Centre
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center transition duration-300 hover:shadow-lg hover:scale-105">
          <i className="fa-solid fa-desktop text-3xl mb-2 text-cyan-500"></i>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Info about our products
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Want to know how our services can benefit your organization? Contact
            us today.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">
            Sales Inquiry
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center transition duration-300 hover:shadow-lg hover:scale-105">
          <i className="fa-solid fa-users text-3xl mb-2 text-cyan-500"></i>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Work with us
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Submit your proposal and our team will connect with you to find the
            best fit.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">
            Submit your RFP
          </button>
        </div>
      </div>

      {/* Map and Contact Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.28930489799342!2d104.9017571!3d11.5784406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1skm!2skh!4v1754824359966!5m2!1skm!2skh"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-cyan-500 dark:text-cyan-400">
            Contact Details
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <i className="fa-solid fa-envelope"></i> sansopheak686@gmail.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <i className="fa-solid fa-phone"></i> 0978901984
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <i className="fa-solid fa-clock"></i> Mon–Fri 09:00–17:30
          </p>
          {/* <p className="text-gray-700 dark:text-gray-300">
            <i className="fa-solid fa-location-dot"></i> Leeds - UK Head Office<br />
            The Coach Works, 21 The Calls, Leeds, LS2 7EH
          </p> */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Together we're going to take our vision of learning that drives
            change even further.
          </p>
        </div>
      </div>

      {/* Message Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-500 dark:text-cyan-400">
          Messages
        </h2>
        {submitted && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded w-fit transition"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>

      <EnergyIcons />
      {/* <AssistantButton /> */}
    </div>
  );
}

export default ContactPage;
