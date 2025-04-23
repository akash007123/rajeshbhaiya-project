
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  image,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-business-900/50 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-business-100 dark:bg-business-800 flex items-center justify-center text-business-500 font-semibold mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-business-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
