import Blog from "../components/Blog";
import CTASection from "../components/CTASession";
import CustomerConnect from "../components/CustomerConnect";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Partners from "../components/Partners";
import Services from "../components/Services";
import TestimonialSection from "../components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Partners />
      <Services />
      <Customers />
      <TestimonialSection />
      <CustomerConnect />
      <Blog />
      <CTASection />
      <Footer />
    </div>
  );
}
