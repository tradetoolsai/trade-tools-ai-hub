
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Testimonials from "@/components/landing/Testimonials"
import Pricing from "@/components/landing/Pricing"
import ContactForm from "@/components/landing/ContactForm"
import Navigation from "@/components/landing/Navigation"

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </div>
  )
}
