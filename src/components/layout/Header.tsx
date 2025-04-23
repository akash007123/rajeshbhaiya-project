
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Briefcase, Wrench, Building, Shield, Phone, Cable, Box, Factory } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

// Map of service options to link, icon, and description
const serviceOptions = [
  {
    label: "Electrical Work",
    to: "/services/electrical",
    icon: <Wrench className="h-6 w-6 text-business-500 mb-2"/>,
    description: "Installations, maintenance and repairs"
  },
  {
    label: "Telecom Services",
    to: "/services/telecom",
    icon: <Phone className="h-6 w-6 text-business-500 mb-2"/>,
    description: "Networking, telephony and setup"
  },
  {
    label: "Security & Camera",
    to: "/services/security",
    icon: <Shield className="h-6 w-6 text-business-500 mb-2"/>,
    description: "CCTV, alarms, access & security"
  },
  {
    label: "Furniture Design",
    to: "/services/furniture",
    icon: <Box className="h-6 w-6 text-business-500 mb-2"/>,
    description: "Custom-built furniture solutions"
  },
  {
    label: "Civil Architecture",
    to: "/services/civil",
    icon: <Building className="h-6 w-6 text-business-500 mb-2"/>,
    description: "Planning, design & construction"
  },
  {
    label: "Industrial Projects",
    to: "/services/industrial",
    icon: <Factory className="h-6 w-6 text-business-500 mb-2"/>,
    description: "Large-scale industrial projects"
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesPopoverOpen, setServicesPopoverOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Features", path: "/features" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesPopoverOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-white dark:bg-business-950 shadow-md py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="font-bold text-xl sm:text-2xl text-business-800 dark:text-white">
            <span className="text-business-500">MULTI</span>BUSINESS
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            // Replace Services link with popover dropdown for desktop view
            if (link.name === "Services") {
              return (
                <Popover key={link.name} open={servicesPopoverOpen} onOpenChange={setServicesPopoverOpen}>
                  <PopoverTrigger asChild>
                    <button
                      className={`relative font-medium flex items-center transition-colors hover:text-business-500 focus:outline-none px-2 py-0.5 group
                        ${location.pathname.startsWith("/services")
                          ? "text-business-500"
                          : "text-business-950 dark:text-white"
                        }`}
                      aria-haspopup="menu"
                      aria-expanded={servicesPopoverOpen}
                      tabIndex={0}
                      type="button"
                      onMouseEnter={() => setServicesPopoverOpen(true)}
                      onMouseLeave={() => setTimeout(() => setServicesPopoverOpen(false), 180)}
                      onFocus={() => setServicesPopoverOpen(true)}
                    >
                      Services
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="bottom"
                    align="start"
                    className="mt-2 min-w-[420px] max-w-lg rounded-xl shadow-2xl bg-white dark:bg-business-900 z-50 border border-gray-200 dark:border-gray-700 p-4 select-none"
                    onMouseEnter={() => setServicesPopoverOpen(true)}
                    onMouseLeave={() => setTimeout(() => setServicesPopoverOpen(false), 180)}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-business-500 mb-3 px-1">Our Services</div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {serviceOptions.map((item) => (
                        <Link
                          to={item.to}
                          className="flex items-start gap-3 rounded-md px-3 py-3 hover:bg-business-50 dark:hover:bg-business-800 transition group cursor-pointer"
                          key={item.to}
                          onClick={() => setServicesPopoverOpen(false)}
                        >
                          <div>{item.icon}</div>
                          <div>
                            <div className="font-semibold text-business-900 dark:text-white text-[1.05rem] group-hover:text-business-600">{item.label}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-300">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }
            // Default nav
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-colors hover:text-business-500 ${location.pathname === link.path
                  ? "text-business-500"
                  : "text-business-950 dark:text-white"
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-business-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-business-800 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 top-[60px] bg-white dark:bg-business-950 z-40 md:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-medium ${location.pathname === link.path
                        ? "text-business-500"
                        : "text-business-800 dark:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
