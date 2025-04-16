
import { CheckCircle2, MessageSquare, Calendar, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MessageSquare,
    title: "Smart Lead Intake",
    description: "Automatically qualify and route new leads with AI assistance"
  },
  {
    icon: Calendar,
    title: "Job Tracking",
    description: "Keep all your projects organized and on schedule"
  },
  {
    icon: CheckCircle2,
    title: "Task Management",
    description: "Streamline your workflow with intelligent task prioritization"
  },
  {
    icon: FileText,
    title: "Customer Communication",
    description: "Professional templates and automated follow-ups"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful tools for modern trades
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage and grow your business, powered by AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
