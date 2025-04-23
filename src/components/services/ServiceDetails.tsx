
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export interface ServiceDetailsProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  benefits: string[];
  features: { title: string; description: string }[];
  otherServices?: { name: string; path: string }[];
}

const ServiceDetails = ({
  title,
  description,
  icon,
  image,
  benefits,
  features,
  otherServices,
}: ServiceDetailsProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/80 to-business-800/70" />
          <img
            src={image}
            alt={title}
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
            <div className="bg-business-50 dark:bg-business-800 text-business-500 p-3 rounded-full inline-block mb-4">
              {icon}
            </div>
            <h1 className="heading-xl mb-6">{title}</h1>
            <p className="subheading text-gray-200">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title={`Benefits of Our ${title}`}
                alignment="left"
              />
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="bg-business-500 text-white p-1 rounded-full mr-3 mt-1 shrink-0">
                      <Check size={16} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get a Free Quote <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={`https://source.unsplash.com/random/800x600/?${title.toLowerCase().replace(/\s+/g, "-")}`}
                alt={`${title} Service`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title={`Key Features of Our ${title}`}
            subtitle="What makes our service stand out from the competition"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-business-900 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-business-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      {otherServices && otherServices.length > 0 && (
        <section className="section-padding bg-white dark:bg-business-900">
          <div className="container-custom">
            <SectionHeading
              title="Explore Our Other Services"
              subtitle="Comprehensive solutions for all your business needs"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {otherServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={service.path}
                    className="inline-block px-6 py-3 bg-business-50 dark:bg-business-800 text-business-600 dark:text-business-300 rounded-md hover:bg-business-100 dark:hover:bg-business-700 transition-colors"
                  >
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-business-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="subheading mx-auto mb-8 text-gray-200">
              Contact us today for a consultation and let us help you with your {title.toLowerCase()} needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Contact Us <ArrowRight size={20} />
              </Link>
              <a href="tel:+123456789" className="btn-secondary">
                Call For Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
