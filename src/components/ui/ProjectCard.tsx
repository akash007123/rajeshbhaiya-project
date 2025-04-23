
import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  delay?: number;
  onClick?: () => void;
}

const ProjectCard = ({ 
  imageUrl, 
  title, 
  category, 
  delay = 0,
  onClick 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="rounded-lg overflow-hidden shadow-md relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute inset-0 flex flex-col justify-end p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-200">{category}</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <Maximize2 size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
