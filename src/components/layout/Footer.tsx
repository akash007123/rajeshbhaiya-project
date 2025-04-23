
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-business-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-business-500">MULTI</span>BUSINESS
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for electrical, telecom, security, furniture, 
              civil architecture, and industrial projects.
            </p>
            <div className="flex space-x-3 mt-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="bg-business-800 p-2 rounded-full hover:bg-business-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="bg-business-800 p-2 rounded-full hover:bg-business-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="bg-business-800 p-2 rounded-full hover:bg-business-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="bg-business-800 p-2 rounded-full hover:bg-business-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-business-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-business-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/electrical" className="text-gray-300 hover:text-white transition-colors">Electrical Work</Link>
              </li>
              <li>
                <Link to="/services/telecom" className="text-gray-300 hover:text-white transition-colors">Telecom Services</Link>
              </li>
              <li>
                <Link to="/services/security" className="text-gray-300 hover:text-white transition-colors">Security & Camera</Link>
              </li>
              <li>
                <Link to="/services/furniture" className="text-gray-300 hover:text-white transition-colors">Furniture Design</Link>
              </li>
              <li>
                <Link to="/services/civil" className="text-gray-300 hover:text-white transition-colors">Civil Architecture</Link>
              </li>
              <li>
                <Link to="/services/industrial" className="text-gray-300 hover:text-white transition-colors">Industrial Projects</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-business-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-business-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Business Avenue, Suite 456<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-business-500 shrink-0" size={18} />
                <a href="tel:+123456789" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-business-500 shrink-0" size={18} />
                <a href="mailto:info@multibusiness.com" className="text-gray-300 hover:text-white transition-colors break-all">
                  info@multibusiness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-business-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MultiBusiness. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-business-500 hover:bg-business-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
