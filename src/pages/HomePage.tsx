import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Award, DollarSign, Wrench, Plug, TowerControl, Camera, Sofa, Building, Factory } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useInView } from "react-intersection-observer";
import HeroCarousel from "@/components/ui/HeroCarousel";

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title="Our Comprehensive Services"
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

          <div className="flex justify-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-business-500 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We pride ourselves on delivering excellence in everything we do"
            light={true}
          />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <ShieldCheck className="text-white mr-3" size={28} />
                <h3 className="font-semibold text-xl">Certified Quality</h3>
              </div>
              <p className="text-gray-100">
                ISO-certified processes ensuring the highest standards in all our work
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Clock className="text-white mr-3" size={28} />
                <h3 className="font-semibold text-xl">24/7 Support</h3>
              </div>
              <p className="text-gray-100">
                Round-the-clock customer service and maintenance support
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Award className="text-white mr-3" size={28} />
                <h3 className="font-semibold text-xl">Experienced Team</h3>
              </div>
              <p className="text-gray-100">
                Over 15 years of experience with highly trained professionals
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <DollarSign className="text-white mr-3" size={28} />
                <h3 className="font-semibold text-xl">Competitive Pricing</h3>
              </div>
              <p className="text-gray-100">
                Best value for money with transparent pricing structure
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/features" className="btn-secondary">
              Learn More About Our Values
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="Our Recent Projects"
            subtitle="Take a look at some of our recent successful projects across various industries"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1000&auto=format&fit=crop"
                  alt="Electrical Installation Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">Industrial Electrical System</h3>
                  <p className="text-gray-200 text-sm">Comprehensive 32KVL Installation</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?q=80&w=1000&auto=format&fit=crop"
                  alt="Telecom Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">Corporate Network Setup</h3>
                  <p className="text-gray-200 text-sm">Advanced Telecom Implementation</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1000&auto=format&fit=crop"
                  alt="Office Interior Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">Modern Office Design</h3>
                  <p className="text-gray-200 text-sm">Custom Furniture & Interior Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight size={20} />
            </Link>
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
            <p className="subheading mx-auto mb-8">
              Contact us today for a free consultation and take the first step towards innovative solutions for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+123456789" className="btn-secondary">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
