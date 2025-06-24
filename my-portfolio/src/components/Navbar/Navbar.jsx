// src/components/Navbar.jsx
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
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
  { icon: <FaXTwitter />, href: "https://x.com/24Dhruvvv91499", label: "Twitter" },
];

export default function Navbar() {
  return (
    <nav className="navbar-glass fixed w-full z-50 top-0 left-0 flex items-center justify-between px-10 py-5 font-sans">
      {/* Left: Logo */}
      <div className="text-3xl font-extrabold select-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-widest">
        Portfolio
      </div>
      {/* Center: Menu */}
      <ul className="flex gap-8 font-medium text-gray-200">
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.target || "_self"}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Right: Social Icons */}
      <div className="flex gap-5 text-gray-300 text-xl">
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
    </nav>
  );
}
