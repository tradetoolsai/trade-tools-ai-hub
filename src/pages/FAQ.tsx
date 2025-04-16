
import Navigation from "@/components/landing/Navigation";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What is TradeTools?</h3>
            <p className="text-lg text-muted-foreground">
              TradeTools is an AI-powered platform designed specifically for trades professionals, 
              offering smart call handling, technical assistance, and CRM management.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">How does the AI powered call handling work?</h3>
            <p className="text-lg text-muted-foreground">
              Our AI system can answer calls, schedule appointments, and qualify leads automatically, 
              saving you time and ensuring you never miss an opportunity.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">What technical assistance does the AI provide?</h3>
            <p className="text-lg text-muted-foreground">
              Our on-the-go assistant can help with technical specifications, code requirements, 
              troubleshooting guides, and even generate materials lists based on job descriptions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">How does the AI enabled CRM management work?</h3>
            <p className="text-lg text-muted-foreground">
              Our system automatically organizes customer information, tracks interactions, 
              follows up with clients, and provides insights to help grow your business.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Do I need technical expertise to use TradeTools?</h3>
            <p className="text-lg text-muted-foreground">
              Not at all. TradeTools is designed to be user-friendly with an intuitive interface 
              that requires no technical expertise to navigate and utilize effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
