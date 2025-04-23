
import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetails, { ServiceDetailsProps } from "@/components/services/ServiceDetails";

const IndustrialServicePage = () => {
  const otherServices: ServiceDetailsProps["otherServices"] = useMemo(() => [
    { name: "Electrical Work", path: "/services/electrical" },
    { name: "Telecom Services", path: "/services/telecom" },
    { name: "Security & Camera", path: "/services/security" },
    { name: "Furniture Design", path: "/services/furniture" },
    { name: "Civil Architecture", path: "/services/civil" },
  ], []);

  return (
    <Layout>
      <ServiceDetails
        title="Industrial Projects"
        description="Comprehensive industrial infrastructure development, including manufacturing plants, logistics hubs, utilities, and automation for maximum productivity."
        icon={<span className="inline-block bg-business-500 rounded-full p-2"><span className="icon-industrial" /></span>}
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "End-to-end project delivery & site management",
          "Integration of utilities, power, & IT systems",
          "Process automation for efficiency & safety",
          "Industry compliance and documentation",
          "Lifetime support & system upgrades",
          "Future-ready, scalable implementations",
        ]}
        features={[
          {
            title: "Greenfield & Brownfield Projects",
            description: "Feasibility, planning, and execution for new and upgraded industrial sites.",
          },
          {
            title: "Utility Infrastructure",
            description: "Power, water, gas, and waste systems for uninterrupted operations.",
          },
          {
            title: "Automation & Controls",
            description: "PLC/SCADA, monitoring, and IoT solutions powering Industry 4.0.",
          },
          {
            title: "Facility Maintenance",
            description: "Proactive operations, audits, and repairs for long-term plant health.",
          },
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default IndustrialServicePage;
