
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "../assets/imgs/Acad.png";
export default function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left text-sm sm:text-base">
        
        {/* Organized by */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">Organized by</h3>
          <img src={Logo} alt="academic hub" className="w-[120px] sm:w-[150px] mx-auto sm:mx-0" />
          <div className="text-xs sm:text-sm mt-3 sm:mt-4">
            <div className="font-medium">Academic Hub</div>
            <div>Build Skills, Shape Your Future</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/courses"
            >
              Courses
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/about"
            >
              About Us
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/contact"
            >
              Contact
            </Link></li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">Categories</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/courses?category=Programming"
            >
              Programming
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/courses?category=Design"
            >
              Design
            </Link></li>
            <li><Link
              className="dark:text-slate-300 hover:text-cyan-400 transition-colors"
              to="/courses?category=Business"
            >
              Business
            </Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">Contact</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            Empowering learners worldwide with quality education and skills for the future.
          </p>
           <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
      <a
        href="https://www.facebook.com/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
      >
        <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
      </a>
      <a
        href="https://www.twitter.com/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
      >
        <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
      </a>
      <a
        href="https://www.linkedin.com/company/learnkh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
      >
        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
      </a>
    </div>

        </div>
      </div>
    </footer>
  );
}