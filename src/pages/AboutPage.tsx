
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const AboutPage = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering the highest quality work that exceeds client expectations.",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
    },
    {
      title: "Innovation",
      description: "We embrace innovation in all our services, utilizing the latest technologies and methodologies for optimal solutions.",
    },
    {
      title: "Customer Focus",
      description: "We prioritize client needs and satisfaction, tailoring our approach to deliver personalized solutions.",
    },
    {
      title: "Teamwork",
      description: "We foster collaboration among our diverse team of experts, combining their skills to achieve exceptional results.",
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable practices, minimizing environmental impact in all our projects and operations.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-900/80" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop"
            alt="Business Team"
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
            <h1 className="heading-xl mb-6">About Our Company</h1>
            <p className="subheading text-gray-200">
              A trusted multi-service provider with over 15 years of industry experience, delivering exceptional solutions to businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-6 text-business-800 dark:text-white">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2008, Multi-Business Enterprise started as a small electrical contracting firm and has since evolved into a comprehensive multi-service provider. Our journey began with a simple mission: to deliver exceptional quality and innovative solutions across multiple industries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As we grew, we expanded our expertise to include telecom services, security systems, furniture design, civil architecture, and industrial projects. This diversification has enabled us to offer holistic solutions to our clients, catering to all their business needs under one roof.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we are proud to have served over 500 clients across various sectors, from small businesses to large corporations. Our commitment to excellence, integrity, and customer satisfaction remains the cornerstone of our success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Business Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block w-48 h-48 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop"
                  alt="Company Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-business-900 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-business-50 dark:bg-business-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-business-500 text-2xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-business-800 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To deliver innovative, high-quality solutions across multiple industries, empowering businesses to grow and succeed. We are committed to excellence, integrity, and customer satisfaction in every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-business-900 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-business-50 dark:bg-business-800 rounded-full flex items-center justify-center mb-6">
                <span className="text-business-500 text-2xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-business-800 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading multi-service provider globally, recognized for our comprehensive solutions, technical expertise, and unwavering commitment to quality. We aim to set industry standards while fostering sustainable growth and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="Principles that guide our work and relationships"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-business-800/30 p-6 rounded-lg"
              >
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-business-500 mt-1 mr-3 shrink-0" size={20} />
                  <h3 className="text-xl font-semibold text-business-800 dark:text-white">{value.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 ml-8">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind our multi-faceted business"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-business-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-business-800 dark:text-white">John Smith</h3>
                <p className="text-business-500 mb-3">CEO & Founder</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With over 20 years of industry experience, John leads our company with vision and expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-business-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-business-800 dark:text-white">Sarah Johnson</h3>
                <p className="text-business-500 mb-3">Chief Technical Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sarah oversees all technical operations, bringing innovation to our electrical and telecom services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-business-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
                  alt="COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-business-800 dark:text-white">Michael Chen</h3>
                <p className="text-business-500 mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Michael ensures seamless project execution across all our service divisions and sectors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-business-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6">Want to Work With Us?</h2>
            <p className="subheading mx-auto mb-8 text-white">
              Join our team of experts or partner with us for your next project. We're always looking for new talent and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Contact Us <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
