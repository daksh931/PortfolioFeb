import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Layers, Mail, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: <Home /> },
    { path: "/about", label: "About Us", icon: <Info /> },
    { path: "/services", label: "Our Services", icon: <Briefcase /> },
    { path: "/work", label: "Our Work", icon: <Layers /> },
    { path: "/contact", label: "Contact Us", icon: <Mail /> },
  ];

  // Theme toggle logic
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" &&
      localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className="sticky top-0 z-20 bg-white/20 shadow-lg">
      <div className="border-b-[1px] border-slate-300 bg-white/5 backdrop-blur-lg">
        <div className="w-full px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl  ">
             <span className="text-red-700 font-bold">DELT</span>  solutions 
            </Link>
          </div>
          {/* <div className="flex items-center">
            <Link to="/">
              <img
                src="/delt2.png"
                alt="DELT Solutions"
                className="h-11 w-auto"
              />
            </Link>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-lg flex items-center space-x-2 text-gray-900 group p-2 relative"
              >
                <span className="mr-2">{link.icon}</span>
                <span className="relative">
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-700 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-between items-center p-2"
            >
              <div
                className={`w-8 h-[3px] bg-gray-800 rounded transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-[3px] bg-gray-800 rounded transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-[3px] bg-gray-800 rounded transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-16 right-0 w-3/4 h-screen bg-white/90 shadow-md sm:hidden transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 text-lg"
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
