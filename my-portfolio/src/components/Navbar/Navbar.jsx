// src/components/Navbar.jsx
import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // for glass effect

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf", target: "_blank" },
];

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dhruva-teja-d-r/", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/dhruva-star88", label: "GitHub" },
  { icon: <FaTwitter />, href: "https://x.com/24Dhruvvv91499", label: "Twitter" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation (for mobile)
  const handleNavClick = (link) => (e) => {
    if (link.href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar-glass fixed w-full z-50 top-0 left-0 flex items-center justify-between px-6 md:px-10 py-5 font-sans">
      {/* Left: Logo */}
      <div className="text-3xl font-extrabold select-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-widest">
        Portfolio
      </div>
      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-2xl text-gray-200 z-50"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Center: Menu */}
      <ul
        className={`
          flex gap-8 font-medium text-gray-200
          transition-all duration-300
          ${menuOpen ? "right-0" : "-right-full"}
          md:static md:flex-row md:gap-8 md:bg-transparent md:p-0
          fixed top-0 h-full w-2/3 bg-[#181824] p-10 flex-col items-start md:items-center
          md:h-auto md:w-auto z-40
        `}
        style={{
          display: menuOpen ? "flex" : "",
        }}
      >
        {navLinks.map(link => (
          <li key={link.name} className="my-2 md:my-0 w-full md:w-auto">
            <a
              href={link.href}
              target={link.target || "_self"}
              className="hover:text-blue-400 transition-colors duration-300 block w-full"
              onClick={handleNavClick(link)}
            >
              {link.name}
            </a>
          </li>
        ))}
        {/* Socials in mobile menu */}
        <li className="flex gap-5 mt-6 md:hidden">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </li>
      </ul>
      {/* Right: Social Icons (desktop only) */}
      <div className="gap-5 text-gray-300 text-xl hidden md:flex">
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
