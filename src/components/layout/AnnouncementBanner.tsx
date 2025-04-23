
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AnnouncementBannerProps {
  message?: string;
}

const AnnouncementBanner = ({ 
  message = "Special promotion: Get 10% off on electrical installations this month!" 
}: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-business-500 text-white py-2 relative"
        >
          <div className="container-custom text-center text-sm sm:text-base">
            {message}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
              aria-label="Close announcement"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
