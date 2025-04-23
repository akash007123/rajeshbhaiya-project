
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plug, TowerControl, Camera, Sofa, Building, Factory } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      title: "Electrical Work",
      description: "11KVL & 32KVL installations for companies and industrial projects with top-tier equipment",
      icon: <Plug size={24} />,
      path: "/services/electrical"
    },
    {
      title: "Telecom Services",
      description: "Advanced telecommunication solutions for businesses with enterprise-grade networking and connectivity",
      icon: <TowerControl size={24} />,
      path: "/services/telecom"
    },
    {
      title: "Security & Camera",
      description: "State-of-the-art security systems and camera installations for complete premises protection",
      icon: <Camera size={24} />,
      path: "/services/security"
    },
    {
      title: "Furniture Design",
      description: "Custom furniture design and manufacturing for both commercial and residential spaces",
      icon: <Sofa size={24} />,
      path: "/services/furniture"
    },
    {
      title: "Civil Architecture",
      description: "Full-service architectural solutions for buildings, complexes, and structural designs",
      icon: <Building size={24} />,
      path: "/services/civil"
    },
    {
      title: "Industrial Projects",
      description: "Complete industrial infrastructure development from planning to implementation",
      icon: <Factory size={24} />,
      path: "/services/industrial"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1920&auto=format&fit=crop"
            alt="Business Services"
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
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="subheading text-gray-200">
              Comprehensive business solutions tailored to meet your specific needs across multiple industries and sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Comprehensive Business Solutions"
            subtitle="Discover our wide range of professional services tailored to meet all your business needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                path={service.path}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-6 text-business-800 dark:text-white">Our Approach</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We take a comprehensive, client-centered approach to every project. Our process begins with a thorough consultation to understand your specific requirements and challenges. From there, our team of specialists develops tailored solutions that address your unique needs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Quality is at the heart of everything we do. We utilize the latest technologies and industry best practices to ensure exceptional results. Our project management methodology ensures timely delivery, transparent communication, and meticulous attention to detail.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                After project completion, we provide ongoing support and maintenance to ensure the long-term success of our solutions. Our relationship with clients extends beyond project delivery, as we remain committed to your continued growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Our Approach"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Our expertise spans across various sectors and industries"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Manufacturing",
              "Healthcare",
              "Education",
              "Retail",
              "Hospitality",
              "Corporate Offices",
              "Government",
              "Technology"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-business-800 p-6 rounded-lg text-center"
              >
                <h3 className="font-semibold text-business-800 dark:text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="section-padding bg-business-500 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-xl md:text-2xl font-light italic mb-6">
                Multi-Business has transformed our operations with their comprehensive electrical and telecom services. Their expertise across multiple fields saved us time and resources by providing integrated solutions rather than dealing with multiple vendors.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold mr-4">
                  RC
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Robert Chen</h4>
                  <p className="text-sm">Operations Director, TechCorp International</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                question: "What areas do you service?",
                answer: "We provide our services nationwide, with a focus on major metropolitan areas. For larger projects, we are equipped to operate internationally through our network of partners."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on the scope and complexity. Small to medium projects typically take 2-4 weeks, while larger projects can extend from 1-6 months. We provide detailed timelines during the consultation phase."
              },
              {
                question: "Do you offer maintenance plans after project completion?",
                answer: "Yes, we offer comprehensive maintenance plans for all our services to ensure the longevity and optimal performance of our installations and implementations."
              },
              {
                question: "Can you handle multiple services for a single project?",
                answer: "Absolutely! Our integrated approach allows us to coordinate multiple services seamlessly for complex projects, providing you with a single point of contact and streamlined implementation."
              },
              {
                question: "What certifications does your company hold?",
                answer: "Our company holds ISO 9001, ISO 14001, and industry-specific certifications for electrical, telecom, and architectural work, ensuring the highest standards of quality and compliance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="py-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-business-800 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-business-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
            <p className="subheading mx-auto mb-8 text-gray-200">
              Contact us today for a detailed consultation and discover how our services can elevate your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Get a Free Consultation
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
