
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "Electrical Contractor",
    content: "TradeTools has completely transformed how we handle new leads. The AI assistance saves us hours every week.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Plumbing Business Owner",
    content: "The automated follow-ups and scheduling features have helped us grow our business while maintaining personal touch.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by trade professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="mb-4 text-lg">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
