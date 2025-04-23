
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, path, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-business-900 rounded-lg shadow-md overflow-hidden card-hover"
    >
      <div className="p-6">
        <div className="bg-business-50 dark:bg-business-800 text-business-500 p-3 rounded-lg inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-business-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link 
          to={path} 
          className="inline-flex items-center text-business-500 hover:text-business-600 font-medium"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
