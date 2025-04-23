
import { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetails, { ServiceDetailsProps } from "@/components/services/ServiceDetails";

const FurnitureServicePage = () => {
  const otherServices: ServiceDetailsProps["otherServices"] = useMemo(() => [
    { name: "Electrical Work", path: "/services/electrical" },
    { name: "Telecom Services", path: "/services/telecom" },
    { name: "Security & Camera", path: "/services/security" },
    { name: "Civil Architecture", path: "/services/civil" },
    { name: "Industrial Projects", path: "/services/industrial" },
  ], []);

  return (
    <Layout>
      <ServiceDetails
        title="Furniture Design"
        description="Bespoke furniture design, manufacturing, and installation for office, commercial spaces, and residential projects—high-quality, ergonomic, and elegant."
        icon={<span className="inline-block bg-business-500 rounded-full p-2"><span className="icon-furniture" /></span>}
        image="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1920&auto=format&fit=crop"
        benefits={[
          "Custom-tailored solutions for your interiors",
          "Premium materials and robust construction",
          "Space-saving and multi-functional options",
          "Professional installation included",
          "Wide range of finishes, textures, & colors",
          "On-time delivery and project management",
        ]}
        features={[
          {
            title: "Custom Office Furniture",
            description: "Desks, meeting tables, ergonomic chairs, and storage designed to fit your space perfectly.",
          },
          {
            title: "Built-in Commercial Solutions",
            description: "Reception desks, display units, and counter installations for all kinds of businesses.",
          },
          {
            title: "Residential Interiors",
            description: "Wardrobes, beds, modular kitchens, and more—designed and built with attention to every detail.",
          },
          {
            title: "3D Visualization & Prototyping",
            description: "Get immersive previews and prototypes before we build, ensuring satisfaction.",
          },
        ]}
        otherServices={otherServices}
      />
    </Layout>
  );
};

export default FurnitureServicePage;
