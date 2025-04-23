
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been received. We'll get back to you shortly.",
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-business-950/90 to-business-800/80" />
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Us"
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
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="subheading text-gray-200">
              Get in touch with our team to discuss your business needs and how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white dark:bg-business-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Reach out to us through any of these channels"
                alignment="left"
              />

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="bg-business-50 dark:bg-business-800 p-3 rounded-full mr-4">
                    <MapPin className="text-business-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-business-800 dark:text-white">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Business Avenue, Suite 456<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-business-50 dark:bg-business-800 p-3 rounded-full mr-4">
                    <Phone className="text-business-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-business-800 dark:text-white">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Main Office: <a href="tel:+12345678900" className="text-business-500 hover:underline">+1 (234) 567-8900</a><br />
                      Customer Support: <a href="tel:+12345678911" className="text-business-500 hover:underline">+1 (234) 567-8911</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="bg-business-50 dark:bg-business-800 p-3 rounded-full mr-4">
                    <Mail className="text-business-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-business-800 dark:text-white">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      General Inquiries: <a href="mailto:info@multibusiness.com" className="text-business-500 hover:underline">info@multibusiness.com</a><br />
                      Support: <a href="mailto:support@multibusiness.com" className="text-business-500 hover:underline">support@multibusiness.com</a>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 rounded-lg overflow-hidden shadow-md h-[300px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279995222!2d-74.11976253858133!3d40.69766374236319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
                alignment="left"
              />

              <div className="bg-gray-50 dark:bg-business-800/30 p-6 rounded-lg shadow-sm">
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200' : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200'}`}>
                    <p>{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 dark:bg-business-800/50 dark:text-white"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 dark:bg-business-800/50 dark:text-white"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 dark:bg-business-800/50 dark:text-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 dark:bg-business-800/50 dark:text-white"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="electrical">Electrical Work</option>
                          <option value="telecom">Telecom Services</option>
                          <option value="security">Security & Camera</option>
                          <option value="furniture">Furniture Design</option>
                          <option value="civil">Civil Architecture</option>
                          <option value="industrial">Industrial Projects</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 dark:bg-business-800/50 dark:text-white"
                        placeholder="Tell us about your project or inquiry"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      Send Message <Send size={20} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-50 dark:bg-business-950">
        <div className="container-custom">
          <SectionHeading
            title="Business Hours"
            subtitle="When you can reach us directly"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-business-900 rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {[
                  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`p-4 flex justify-between ${
                      index % 2 === 0 ? "bg-gray-50 dark:bg-business-800/30" : ""
                    }`}
                  >
                    <span className="font-medium text-business-800 dark:text-white">{item.day}</span>
                    <span className="text-gray-600 dark:text-gray-300">{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
              <p className="italic">* Emergency support available 24/7 for existing clients</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
