
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Robert Chen",
      role: "Operations Director",
      company: "TechCorp International",
      testimonial: "Multi-Business has transformed our operations with their comprehensive electrical and telecom services. Their expertise across multiple fields saved us time and resources by providing integrated solutions rather than dealing with multiple vendors.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Facility Manager",
      company: "Healthcare Systems Inc.",
      testimonial: "The security and camera installation services provided by Multi-Business exceeded our expectations. Their attention to detail and understanding of our specific needs as a healthcare facility were impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Thompson",
      role: "CEO",
      company: "Retail Ventures LLC",
      testimonial: "We hired Multi-Business for our store renovation project, utilizing their electrical, security, and furniture design services. The cohesive approach meant everything worked together seamlessly, and their project management was excellent.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Construction Partners",
      testimonial: "As someone who coordinates with various contractors regularly, I was impressed by Multi-Business's professionalism and technical expertise. Their civil architecture team worked closely with our engineers to deliver outstanding results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Wilson",
      role: "IT Director",
      company: "Financial Services Group",
      testimonial: "The telecom infrastructure installed by Multi-Business has been rock-solid for over three years. Their maintenance support is responsive and thorough, and they've helped us scale our systems as we've grown.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Jennifer Lee",
      role: "Office Manager",
      company: "Legal Associates",
      testimonial: "The custom furniture solutions designed for our law firm perfectly balanced elegance and functionality. The team took time to understand our workflow and created spaces that enhance our productivity.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Thomas Baker",
      role: "Plant Manager",
      company: "Manufacturing Innovations",
      testimonial: "Multi-Business handled our industrial electrical upgrade with minimal disruption to our production schedule. Their team worked efficiently during off-hours and coordinated perfectly with our staff.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Amanda Garcia",
      role: "Hospitality Director",
      company: "Luxury Hotels Chain",
      testimonial: "From security systems to interior design, Multi-Business helped us create a safe, beautiful environment for our guests. Their ability to handle multiple aspects of our renovation simplified the entire process.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop"
            alt="Client Testimonials"
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
            <h1 className="heading-xl mb-6">Client Testimonials</h1>
            <p className="subheading text-gray-200">
              Read what our clients have to say about their experiences working with our multi-business services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by businesses across various industries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="section-padding bg-business-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-6">Our Client Satisfaction</h2>
              <p className="text-lg text-gray-100 mb-10">
                We pride ourselves on maintaining high standards of service excellence, reflected in our client satisfaction metrics.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="p-4">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <p className="text-gray-200">Client Satisfaction</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold mb-2">4.9/5</div>
                  <p className="text-gray-200">Average Rating</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold mb-2">92%</div>
                  <p className="text-gray-200">Repeat Clients</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-gray-200">Referral Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-business-900 p-8 md:p-12 rounded-lg shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600&auto=format&fit=crop"
                    alt="Corporate Office Building"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                    "We contracted Multi-Business for a complete headquarters renovation, requiring electrical upgrades, telecom infrastructure, security systems, and custom office furniture. Their integrated approach saved us an estimated 20% compared to using separate contractors, and the project was delivered on time and within budget. The quality of work across all areas was exceptional."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
                      alt="CEO"
                      className="w-16 h-16 rounded-full object-cover border-4 border-business-100 mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-business-800 dark:text-white">James Anderson</h4>
                      <p className="text-business-500">CEO, Global Innovations Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
