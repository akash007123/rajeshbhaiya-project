
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  children?: ReactNode;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  children,
  light = false,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
    >
      <h2 className={`heading-lg mb-4 ${light ? "text-white" : "text-business-800 dark:text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-gray-200" : "text-gray-600 dark:text-gray-300"}`}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
