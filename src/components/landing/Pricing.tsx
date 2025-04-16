
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small contractors",
    features: [
      "AI Lead Qualification",
      "Basic Job Tracking",
      "Email Templates",
      "Mobile App Access"
    ]
  },
  {
    name: "Professional",
    price: "$999",
    description: "For growing businesses",
    features: [
      "Everything in Starter",
      "Advanced AI Features",
      "Custom Workflows",
      "Priority Support",
      "Team Collaboration"
    ]
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button className="w-full" variant={plan.name === "Professional" ? "default" : "secondary"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
