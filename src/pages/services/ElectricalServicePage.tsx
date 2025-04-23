
import { Plug } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceDetails from "@/components/services/ServiceDetails";

const ElectricalServicePage = () => {
  const otherServices = [
    { name: "Telecom Services", path: "/services/telecom" },
    { name: "Security & Camera", path: "/services/security" },
    { name: "Furniture Design", path: "/services/furniture" },
    { name: "Civil Architecture", path: "/services/civil" },
    { name: "Industrial Projects", path: "/services/industrial" },
  ];

  return (
    <Layout>
      <ServiceDetails
        title="Electrical Work"
        description="Professional 11KVL & 32KVL installations and electrical solutions for companies and industrial facilities, ensuring safety, efficiency, and reliability."
        icon={<Plug size={28} />}
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "Energy-efficient solutions that reduce operational costs",
          "Enhanced safety with state-of-the-art circuit protection",
          "Increased reliability with redundant power systems",
          "Compliance with industry regulations and standards",
          "24/7 emergency support for critical systems",
          "Custom designed solutions for your specific needs",
          "Advanced troubleshooting and diagnosis capabilities"
        ]}
        features={[
          {
            title: "High Voltage Installations",
            description: "Expert installation of 11KVL & 32KVL systems for industrial and commercial applications with rigorous testing and certification."
          },
          {
            title: "Power Distribution Systems",
            description: "Design and implementation of efficient power distribution networks tailored to your facility's specific requirements."
          },
          {
            title: "Emergency Backup Systems",
            description: "Installation of reliable backup generators and UPS systems to ensure business continuity during power outages."
          },
          {
            title: "Energy Management",
            description: "Smart energy monitoring and management solutions to optimize consumption and reduce utility costs."
          },
          {
            title: "Industrial Control Systems",
            description: "Automation and control systems integration for manufacturing processes and facility management."
          },
          {
            title: "Preventive Maintenance",
            description: "Regular inspections and maintenance programs to prevent failures and extend the lifespan of electrical systems."
          }
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default ElectricalServicePage;
