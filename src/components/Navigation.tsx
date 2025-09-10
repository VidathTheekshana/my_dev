import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  // State to check if page is scrolled (for styling the navbar)
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      // Add glass-effect when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);

      // Detect which section is active
      const sections = document.querySelectorAll("section[id]");
      let current = "#home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is currently in view
        if (rect.top <= 80 && rect.bottom >= 80) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#portfolio", label: "PROJECTS" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact", label: "CONTACT" },
  ];

  // Smooth scroll to section on click
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Framer Motion container animation (stagger effect for items)
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  // Framer Motion item animation
  const item = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">VT</div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((itemNav) => (
              <motion.button
                key={itemNav.href}
                onClick={() => scrollToSection(itemNav.href)}
                className={`nav-btn ${activeSection === itemNav.href ? "active" : ""}`}
                variants={item}
              >
                {itemNav.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 glass-effect rounded-lg flex flex-col gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((itemNav) => (
              <button
                key={itemNav.href}
                onClick={() => scrollToSection(itemNav.href)}
                className={`nav-btn-mobile ${
                  activeSection === itemNav.href ? "active" : ""
                }`}
              >
                {itemNav.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
