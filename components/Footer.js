import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-accent)] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-3 w-full sm:w-1/2">
          <div className="flex items-center gap-2">
            <FaPhone className="text-lg" />
            <span>(757) 376-0101</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>info@carecleaning.com</span>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-1/2">
          <div className="flex gap-4 justify-center">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
            </a>
          </div>
          <p className="text-sm text-center sm:text-right">
            &copy; {new Date().getFullYear()} Gentle Cleaning Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
