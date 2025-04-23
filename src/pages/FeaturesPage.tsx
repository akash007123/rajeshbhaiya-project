
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, DollarSign, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const FeaturesPage = () => {
  const keyFeatures = [
    {
      title: "Certified Quality",
      description: "We maintain ISO certification and adhere to industry-specific standards across all our service areas.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to address any urgent needs or concerns.",
      icon: <Clock size={28} />,
    },
    {
      title: "Experienced Team",
      description: "Our professionals average 15+ years of experience in their respective fields, ensuring expert service.",
      icon: <Award size={28} />,
    },
    {
      title: "Competitive Pricing",
      description: "We offer transparent, value-driven pricing without compromising on quality or service delivery.",
      icon: <DollarSign size={28} />,
    },
    {
      title: "Dedicated Project Managers",
      description: "Each client is assigned a dedicated project manager who oversees all aspects of project implementation.",
      icon: <Users size={28} />,
    },
    {
      title: "One-Stop Solution",
      description: "Our multi-disciplinary expertise means you can address various business needs through a single provider.",
      icon: <ShieldCheck size={28} />,
    },
  ];

  const additionalFeatures = [
    {
      title: "Custom Solutions",
      description: "Tailored approach to each project based on specific client requirements and industry standards."
    },
    {
      title: "Sustainable Practices",
      description: "Eco-friendly methods and materials used whenever possible to minimize environmental impact."
    },
    {
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout every phase of your project."
    },
    {
      title: "Cutting-Edge Technology",
      description: "Utilization of the latest tools and technologies for efficient and effective service delivery."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and testing procedures ensuring the highest standards of work."
    },
    {
      title: "Responsive Service",
      description: "Quick response times and agile project management for time-sensitive requirements."
    },
    {
      title: "Continuous Training",
      description: "Our team undergoes regular training to stay updated with industry developments and best practices."
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed documentation of all projects, installations, and configurations for future reference."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop"
            alt="Business Features"
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
            <h1 className="heading-xl mb-6">Why Choose Us</h1>
            <p className="subheading text-gray-200">
              Discover the key features and benefits that make our multi-business services stand out from the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Our Key Business Features"
            subtitle="The cornerstones of our service excellence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Approach */}
      <section className="section-padding bg-business-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-6">Comprehensive Business Approach</h2>
              <p className="text-gray-100 mb-6">
                As a multi-disciplinary service provider, we take a holistic approach to meeting our clients' needs. We understand that businesses require integrated solutions that address multiple aspects of their operations.
              </p>
              <p className="text-gray-100 mb-6">
                Our comprehensive approach allows us to see the big picture while attending to the smallest details. By combining expertise across different fields, we can identify opportunities for synergy and optimization that single-service providers might miss.
              </p>
              <p className="text-gray-100">
                This integrated methodology not only ensures cohesive implementation but also provides cost efficiencies and streamlined project management through a single point of contact for all your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
                alt="Comprehensive Approach"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title="Additional Features"
            subtitle="More reasons why clients choose our services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-business-900 p-5 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2 text-business-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Story */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Client Success Story"
            subtitle="How our features translated into real-world results"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-business-800 p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop"
                  alt="Office Building"
                  className="rounded-lg shadow-sm w-full h-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-business-800 dark:text-white">Global Tech Headquarters</h3>
                <p className="text-business-500">Complete Office Solution</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold mb-4 text-business-800 dark:text-white">The Challenge</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A rapidly growing tech company needed to outfit their new 50,000 sq ft headquarters with complete electrical, networking, security, and office furniture solutions within a tight 3-month timeframe before their lease began.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-business-800 dark:text-white">Our Solution</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Leveraging our multi-disciplinary expertise, we implemented a comprehensive plan that coordinated all services through a single project management team. We installed enterprise-grade electrical and networking infrastructure, state-of-the-art security systems, and custom-designed office furniture that aligned with their brand aesthetic.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-business-800 dark:text-white">The Results</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  The project was completed two weeks ahead of schedule and 8% under budget. The client benefited from seamless integration between all systems, consistent design language throughout the space, and significant cost savings compared to hiring multiple vendors.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-white dark:bg-business-700 px-4 py-2 rounded-md shadow-sm text-center flex-1">
                    <div className="text-2xl font-bold text-business-500">15%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Cost Savings</p>
                  </div>
                  <div className="bg-white dark:bg-business-700 px-4 py-2 rounded-md shadow-sm text-center flex-1">
                    <div className="text-2xl font-bold text-business-500">2 Weeks</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Early Completion</p>
                  </div>
                  <div className="bg-white dark:bg-business-700 px-4 py-2 rounded-md shadow-sm text-center flex-1">
                    <div className="text-2xl font-bold text-business-500">100%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="heading-lg mb-6">Experience These Features Firsthand</h2>
            <p className="subheading mx-auto mb-8 text-gray-200">
              Contact us today to discuss how our diverse range of services and exceptional features can benefit your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Schedule a Consultation <ArrowRight size={20} />
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

export default FeaturesPage;
