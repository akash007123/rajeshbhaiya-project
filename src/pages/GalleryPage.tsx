
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "electrical",
      title: "Industrial Power Distribution",
      description: "32KVL electrical installation for a manufacturing facility",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "electrical",
      title: "Commercial Building Wiring",
      description: "Complete electrical setup for a 10-story office building",
      image: "https://images.unsplash.com/photo-1620293023555-272e1a0c2a99?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "telecom",
      title: "Network Infrastructure",
      description: "Enterprise-grade networking solution for a tech company",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "telecom",
      title: "Data Center Setup",
      description: "Comprehensive server and network installation",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "security",
      title: "Corporate Security System",
      description: "Integrated CCTV and access control for headquarters",
      image: "https://images.unsplash.com/photo-1553774651-271b4d81fc43?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "security",
      title: "Retail Surveillance",
      description: "Advanced security cameras for a shopping complex",
      image: "https://images.unsplash.com/photo-1583254251146-e5af5210b677?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      category: "furniture",
      title: "Executive Office Design",
      description: "Custom furniture solutions for an executive suite",
      image: "https://images.unsplash.com/photo-1601627012886-48e353454ee2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      category: "furniture",
      title: "Conference Room Setup",
      description: "Modern conference facilities with custom furniture",
      image: "https://images.unsplash.com/photo-1428605821565-c16e7ea04d18?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 9,
      category: "civil",
      title: "Commercial Building Design",
      description: "Architectural design for a multi-use commercial complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 10,
      category: "civil",
      title: "Office Renovation",
      description: "Complete redesign and renovation of corporate spaces",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 11,
      category: "industrial",
      title: "Manufacturing Facility",
      description: "Design and implementation of a production plant",
      image: "https://images.unsplash.com/photo-1514996959530-3c7df7ac2145?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 12,
      category: "industrial",
      title: "Warehouse Infrastructure",
      description: "Integrated systems for logistics and distribution center",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "electrical", name: "Electrical" },
    { id: "telecom", name: "Telecom" },
    { id: "security", name: "Security" },
    { id: "furniture", name: "Furniture" },
    { id: "civil", name: "Civil" },
    { id: "industrial", name: "Industrial" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop"
            alt="Project Gallery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6">Our Project Gallery</h1>
            <p className="subheading text-gray-200">
              Browse our portfolio of successful projects across multiple business sectors and industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Showcase of Our Work"
            subtitle="Explore our diverse portfolio of projects and solutions"
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? "bg-business-500 text-white"
                    : "bg-gray-100 dark:bg-business-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-business-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white bg-business-800 hover:bg-business-700 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full bg-white dark:bg-business-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-business-800 dark:text-white">{selectedImage.title}</h3>
                <p className="text-business-500 mb-4">Category: {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}</p>
                <p className="text-gray-700 dark:text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Stats */}
      <section className="section-padding bg-business-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-100">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-100">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-100">Team Members</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-100">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
