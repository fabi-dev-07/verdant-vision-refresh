import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import StatsSection from "@/components/StatsSection"
import Industry4Section from "@/components/Industry4Section"
import FeaturesShowcase from "@/components/FeaturesShowcase"
import IndustriesSection from "@/components/IndustriesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Industry4Section />
      <FeaturesShowcase />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Index