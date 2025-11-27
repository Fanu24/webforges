import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyUsSection from '@/components/WhyUsSection'
import PortfolioSection from '@/components/PortfolioSection'
import CitySection from '@/components/CitySection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <CitySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

