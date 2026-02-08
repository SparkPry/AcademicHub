
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "../assets/imgs/Academic hub.png";
export default function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Organized by */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Organized by</h3>
          <img src={Logo} alt="academic hub" className="w-[150px] mx-auto md:mx-0" />
          <div className="text-sm mt-4">
            <div className="font-medium">Academic Hub</div>
            <div>Build Skills, Shape Your Future</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/courses"
            >
              Courses
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/about"
            >
              About Us
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/contact"
            >
              Courses
            </Link></li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/courses?category=Programming"
            >
              Programming
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/courses?category=Design"
            >
              Design
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400"
              to="/courses?category=Business"
            >
              Business
            </Link></li>
          </ul>
        </div>

        {/* SkillStack */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Contact me</h3>
          <p className="text-gray-400 text-sm mb-4">
            Empowering learners worldwide with quality education and skills for the future.
          </p>
           <div className="flex justify-center md:justify-start gap-4">
      <a
        href="https://www.facebook.com/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
      >
        <Facebook size={18} />
      </a>
      <a
        href="https://www.twitter.com/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
      >
        <Twitter size={18} /> 
      </a>
      <a
        href="https://www.linkedin.com/company/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
      >
        <Linkedin size={18} />
      </a>
    </div>

        </div>
      </div>
    </footer>
  );
}