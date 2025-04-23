import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ElectricalServicePage from "./pages/services/ElectricalServicePage";
import TelecomServicePage from "./pages/services/TelecomServicePage";
import SecurityServicePage from "./pages/services/SecurityServicePage";
import FurnitureServicePage from "./pages/services/FurnitureServicePage";
import CivilServicePage from "./pages/services/CivilServicePage";
import IndustrialServicePage from "./pages/services/IndustrialServicePage";
import FeaturesPage from "./pages/FeaturesPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import CTAPage from "./pages/CTAPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/electrical" element={<ElectricalServicePage />} />
          <Route path="/services/telecom" element={<TelecomServicePage />} />
          <Route path="/services/security" element={<SecurityServicePage />} />
          <Route path="/services/furniture" element={<FurnitureServicePage />} />
          <Route path="/services/civil" element={<CivilServicePage />} />
          <Route path="/services/industrial" element={<IndustrialServicePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/cta" element={<CTAPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
