import { Button } from "@/components/ui/button";
import { ArrowRight, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {
  return <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Tech Graphics */}
      <div className="absolute inset-0 opacity-10">
        <CircuitBoard className="w-full h-full text-primary" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img alt="TradeTools Logo" className="w-16 h-16 mb-6 mx-auto hover:scale-105 transition-transform object-cover" src="/lovable-uploads/9b1187a9-7431-4f21-b712-d9f23edada59.png" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient">
              Smarter tools for the trades.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            AI that works as hard as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#pricing">
                View Pricing
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}