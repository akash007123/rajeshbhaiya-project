
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const CTAPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
            alt="Get Started"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Ready to Transform Your Business?</h1>
            <p className="subheading text-gray-200 mx-auto">
              Get in touch today and discover how our comprehensive multi-business services can elevate your operations, reduce costs, and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Options */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-business-800/30 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-business-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Phone size={28} />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-business-800 dark:text-white">Request a Callback</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Schedule a call with one of our experts at a time that works for you. We'll discuss your needs and provide tailored recommendations.
              </p>
              <a 
                href="tel:+12345678900" 
                className="btn-primary animate-pulse"
              >
                Call Us Now <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-business-500 p-8 rounded-lg text-center text-white"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-business-500">
                <Mail size={28} />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Get a Free Estimate</h2>
              <p className="text-gray-100 mb-6">
                Fill out our detailed project questionnaire and receive a comprehensive estimate for your specific business needs.
              </p>
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-business-500 font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free Estimate <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4 text-business-800 dark:text-white">Why Act Now?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The sooner you get started, the faster you'll experience the benefits of our integrated business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Save Time & Resources",
                description: "Our integrated approach streamlines project management and reduces the complexity of working with multiple vendors."
              },
              {
                title: "Limited-Time Promotions",
                description: "Take advantage of our current promotional offers on multi-service packages for new clients."
              },
              {
                title: "Flexible Scheduling",
                description: "Secure your spot in our project calendar before availability becomes limited in peak seasons."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-business-900 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-business-800 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-business-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-8">Don't Wait - Start Your Transformation Today</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Contact Us Now <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CTAPage;
