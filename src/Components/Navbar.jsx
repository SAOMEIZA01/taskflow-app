import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ["home", "features", "pricing", "testimonials", "footer"];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-800">
      <div className="max-w-6xl mx-auto flex justify-betwen items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-white px-10 cursor-pointer md:block hidden">
          Taskflow
        </h1>

        {/* Desktop links */}

        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-100 font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-blue-500 transition-colors capitalize"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-100 p-2"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      
      {/* Mobile menu & backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-blue-600 to-indigo-400 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Menu
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-6 text-white">
            <a
              href="#home"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Testimonials
            </a>
            <a
              href="#footer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Footer
            </a>
          </nav>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
