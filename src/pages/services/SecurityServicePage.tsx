import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetails, { ServiceDetailsProps } from "@/components/services/ServiceDetails";

const SecurityServicePage = () => {
  const otherServices: ServiceDetailsProps["otherServices"] = useMemo(() => [
    { name: "Electrical Work", path: "/services/electrical" },
    { name: "Telecom Services", path: "/services/telecom" },
    { name: "Furniture Design", path: "/services/furniture" },
    { name: "Civil Architecture", path: "/services/civil" },
    { name: "Industrial Projects", path: "/services/industrial" },
  ], []);

  return (
    <Layout>
      <ServiceDetails
        title="Security & Camera"
        description="Modern security solutions including CCTV, alarm systems, and smart surveillance — ensuring your premises remain safe and monitored 24/7."
        icon={<span className="inline-block bg-business-500 rounded-full p-2"><span className="icon-security" /></span>}
        image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "Real-time surveillance with smart analytics",
          "Remote monitoring and mobile access",
          "Customizable alarm and access control systems",
          "24/7 monitoring and support options",
          "Compliance with industry security standards",
        ]}
        features={[
          {
            title: "CCTV & Video Surveillance",
            description: "Installation of advanced, high-definition IP cameras with remote viewing and AI-powered analytics.",
          },
          {
            title: "Alarm & Intrusion Systems",
            description: "Smart alarms, sensors, and instant alerts to protect your property inside and out.",
          },
          {
            title: "Access Control",
            description: "Modern card, keyless, or biometric entry and time attendance logging for staff and visitors.",
          },
          {
            title: "Maintenance & Monitoring",
            description: "Scheduled health checks and on-demand troubleshooting via our expert support center.",
          },
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default SecurityServicePage;
