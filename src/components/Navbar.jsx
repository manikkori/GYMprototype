import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { FaWhatsapp as WaIcon } from "react-icons/fa";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { gymData } from "../data/gymData";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Plans", path: "/plans" },
  { name: "Schedule", path: "/schedule" },
  { name: "Trainers", path: "/trainers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const whatsappLink = `https://wa.me/${gymData.whatsappNumber}?text=Hi!%20I%20want%20to%20join%20the%20gym.`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        gsap.to(".nav-glass", {
          backgroundColor: "#050505",
          borderBottom: "1px solid #2A2A2A",
          duration: 0.3,
        });
      } else {
        gsap.to(".nav-glass", {
          backgroundColor: "transparent",
          borderBottom: "1px solid transparent",
          duration: 0.3,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="nav-glass fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <Dumbbell className="text-primary h-7 w-7 group-hover:rotate-12 transition-transform" />
              <span className="font-bebas text-2xl tracking-widest text-light mt-1">
                POWER<span className="text-primary">FIT</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-semibold font-inter transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-light px-5 py-2.5 font-bebas text-lg tracking-wider hover:bg-primary/80 transition-colors flex items-center gap-2"
              >
                <WaIcon size={16} /> JOIN NOW
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-light hover:text-primary transition-colors"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface z-40 shadow-2xl border-l border-border lg:hidden pt-24 px-6 flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-bebas tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-light"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-primary text-light px-6 py-3 font-bebas text-xl tracking-wide hover:bg-primary/80 transition-colors flex items-center justify-center gap-2"
              >
                <WaIcon size={18} /> JOIN ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
