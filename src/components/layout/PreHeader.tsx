
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const PreHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div 
      className={`bg-business-800 text-white py-2 transition-transform duration-300 ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="mailto:info@multibusiness.com" className="flex items-center text-sm hover:text-accent1-light transition-colors">
            <Mail size={14} className="mr-1" />
            <span className="hidden sm:inline">rajeshverma@gmail.com</span>
          </a>
          <a href="tel:+123456789" className="flex items-center text-sm hover:text-accent1-light transition-colors">
            <Phone size={14} className="mr-1" />
            <span className="hidden sm:inline">+91-9685533878</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" aria-label="Facebook" className="hover:text-accent1-light transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent1-light transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-accent1-light transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent1-light transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
