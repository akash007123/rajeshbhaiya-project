
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Responsive images: fallback aspect ratio on mobile/tablet
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1920&auto=format&fit=crop",
    headline: <>Innovative Solutions for <span className="text-business-500">Multi-Industry</span> Excellence</>,
    subheadline: "From electrical installations to architectural design, we deliver comprehensive business solutions that power growth and innovation for companies worldwide.",
    primary: { text: "Explore Our Services", to: "/services" },
    secondary: { text: "Get a Free Quote", to: "/contact" }
  },
  {
    image: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?q=80&w=1920&auto=format&fit=crop",
    headline: <>Empowering <span className="text-accent font-bold">Business Growth</span></>,
    subheadline: "World-class telecom, security, and infrastructure projects delivered on-time and on-budget.",
    primary: { text: "See Gallery", to: "/gallery" },
    secondary: { text: "Contact Us", to: "/contact" }
  },
  {
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1920&auto=format&fit=crop",
    headline: <>Engineering <span className="text-business-500">Your Vision</span></>,
    subheadline: "From furniture manufacturing to civil architecture—your one-stop business solution partner.",
    primary: { text: "About Us", to: "/about" },
    secondary: { text: "Request Consultation", to: "/contact" }
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1744967145175-5fe44b2686f4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: <>Innovative Solutions for <span className="text-business-500">Multi-Industry</span> Excellence</>,
    subheadline: "From electrical installations to architectural design, we deliver comprehensive business solutions that power growth and innovation for companies worldwide.",
    primary: { text: "Explore Our Services", to: "/services" },
    secondary: { text: "Get a Free Quote", to: "/contact" }
  },
  {
    image: "https://images.unsplash.com/photo-1744614053463-491122164435?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: <>Engineering <span className="text-business-500">Your Vision</span></>,
    subheadline: "From furniture manufacturing to civil architecture—your one-stop business solution partner.",
    primary: { text: "About Us", to: "/about" },
    secondary: { text: "Request Consultation", to: "/contact" }
  },
];

const HeroCarousel = () => (
  <div className="relative bg-gray-900 text-white">
    <Carousel>
      <CarouselContent>
        {SLIDES.map((slide, idx) => (
          <CarouselItem key={idx}>
            <div className="relative w-full h-[70vh] min-h-[348px] flex items-center justify-center md:h-[75vh] lg:h-[80vh] transition-all duration-500">
              {/* Responsive Background Image with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                  style={{
                    objectPosition: 'center',
                  }}
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-business-950/85 via-business-900/70 to-business-900/50" />
              </div>
              {/* Content */}
              <div className="container-custom relative z-10 flex flex-col justify-center w-full 
                px-4 py-12 md:py-20 max-w-2xl 
                items-start 
                ">
                <motion.h1
                  className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {slide.headline}
                </motion.h1>
                <motion.p
                  className="text-base xs:text-lg md:text-xl text-gray-200 font-medium mb-8 drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                >
                  {slide.subheadline}
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link to={slide.primary.to} className="btn-primary w-full sm:w-auto text-center justify-center">
                    {slide.primary.text}
                  </Link>
                  <Link to={slide.secondary.to} className="btn-secondary w-full sm:w-auto text-center justify-center">
                    {slide.secondary.text}
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Carousel Controls: always visible in mobile/desktop, improved placement */}
      <CarouselPrevious className="!left-2 !top-auto !-bottom-5 md:!left-10 md:!top-1/2 md:!-bottom-auto" />
      <CarouselNext className="!right-2 !top-auto !-bottom-5 md:!right-10 md:!top-1/2 md:!-bottom-auto" />
    </Carousel>
  </div>
);

export default HeroCarousel;
