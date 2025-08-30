import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import Industry4Section from "@/components/Industry4Section"
import IndustriesSection from "@/components/IndustriesSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Industry4Section />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Index