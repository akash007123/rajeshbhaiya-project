
import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetails, { ServiceDetailsProps } from "@/components/services/ServiceDetails";

const CivilServicePage = () => {
  const otherServices: ServiceDetailsProps["otherServices"] = useMemo(() => [
    { name: "Electrical Work", path: "/services/electrical" },
    { name: "Telecom Services", path: "/services/telecom" },
    { name: "Security & Camera", path: "/services/security" },
    { name: "Furniture Design", path: "/services/furniture" },
    { name: "Industrial Projects", path: "/services/industrial" },
  ], []);

  return (
    <Layout>
      <ServiceDetails
        title="Civil Architecture"
        description="Complete architectural design and construction management for industrial, commercial, and residential projects—structural elegance and engineering precision."
        icon={<span className="inline-block bg-business-500 rounded-full p-2"><span className="icon-civil" /></span>}
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "Full-service project planning, design, and permits",
          "State-of-the-art CAD and BIM modeling",
          "Sustainable and green design capabilities",
          "On-site construction and supervision",
          "Cost-effective project delivery",
          "Adherence to all codes and standards",
        ]}
        features={[
          {
            title: "Architectural Design",
            description: "Conceptual, schematic, and detailed design for new builds and renovations.",
          },
          {
            title: "Project Management",
            description: "Comprehensive supervision for timelines, budgets, and quality from concept to handover.",
          },
          {
            title: "Structural Engineering",
            description: "Safe, durable, and code-compliant buildings and infrastructure.",
          },
          {
            title: "Sustainable Building",
            description: "Eco-conscious methods and materials for greener, healthier spaces.",
          },
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default CivilServicePage;
