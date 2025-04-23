
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-business-900/50 p-6 rounded-lg shadow-sm text-center group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-business-100 text-business-500 mb-4 group-hover:bg-business-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-business-800 dark:text-white group-hover:text-business-500 dark:group-hover:text-business-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
