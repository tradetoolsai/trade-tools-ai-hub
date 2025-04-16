
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="TradeTools Logo" 
              className="w-16 h-16 mb-6 mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Smarter tools for the trades.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            AI that works as hard as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
