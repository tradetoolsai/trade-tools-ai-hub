
import Navigation from "@/components/landing/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">About TradeTools</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            TradeTools is a revolutionary platform designed specifically for the trades industry, 
            combining cutting-edge AI technology with practical tools that make daily operations 
            smoother and more efficient.
          </p>
          <p className="text-lg mb-6">
            Founded in 2023, our mission is to empower contractors, technicians, and trade 
            professionals with technology that understands their unique challenges and workflows.
          </p>
          <p className="text-lg mb-6">
            Our team consists of industry veterans and technology experts who work together 
            to create solutions that truly make a difference in how trade businesses operate.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            We envision a future where every trade professional has access to AI-powered tools 
            that can help them work smarter, not harder. By automating routine tasks and 
            providing intelligent assistance, we help trades businesses focus on what they do best.
          </p>
        </div>
      </div>
    </div>
  );
}
