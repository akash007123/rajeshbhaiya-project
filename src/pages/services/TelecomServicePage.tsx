import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetails, { ServiceDetailsProps } from "@/components/services/ServiceDetails";

const TelecomServicePage = () => {
  const otherServices: ServiceDetailsProps["otherServices"] = useMemo(() => [
    { name: "Electrical Work", path: "/services/electrical" },
    { name: "Security & Camera", path: "/services/security" },
    { name: "Furniture Design", path: "/services/furniture" },
    { name: "Civil Architecture", path: "/services/civil" },
    { name: "Industrial Projects", path: "/services/industrial" },
  ], []);

  return (
    <Layout>
      <ServiceDetails
        title="Telecom Services"
        description="Cutting-edge telecommunication solutions for businesses, including structured cabling, wireless networks, VoIP, and enterprise-grade connectivity."
        icon={<span className="inline-block bg-business-500 rounded-full p-2"><span className="icon-telecom" /></span>}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "Enterprise-speed voice and data connectivity",
          "Future-proof structured cabling & fiber solutions",
          "Wireless and wired networks for all environments",
          "VoIP and advanced unified communications",
          "24/7 network performance monitoring and support",
          "Security and compliance with telecom best practices",
        ]}
        features={[
          {
            title: "Structured Cabling",
            description: "Design and installation of robust, scalable cabling systems for seamless voice, video, and data transmission.",
          },
          {
            title: "Fiber Optic Networking",
            description: "Fast, reliable, and interference-resistant fiber optic infrastructure to support all your business applications.",
          },
          {
            title: "Wireless Solutions",
            description: "High-performance Wi-Fi networks for offices, campuses, and industrial facilities with full coverage.",
          },
          {
            title: "Voice Solutions",
            description: "IP PBX, VoIP, and video-conferencing system integration for modern communication.",
          },
          {
            title: "Telecom Audit & Consulting",
            description: "Optimize operating costs and design strategies for maximum network efficiency and reliability.",
          },
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default TelecomServicePage;
