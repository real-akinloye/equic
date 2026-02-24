import { Button } from "@/components/ui/button";
import dashboardEsop from "@/assets/dashboard-esop.png";
import dashboardGrants from "@/assets/dashboard-grants.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Equity Intelligence Platform
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                Equity Management For Modern Teams
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              The only equity platform for Startups, Venture Capitals and Employees.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8 py-6 text-base font-semibold">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold">
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right side - Stacked Dashboard Images */}
          <div className="relative">
            <div className="rounded-none border border-border shadow-2xl overflow-hidden">
              <img
                src={dashboardEsop}
                alt="ESOP Infrastructure dashboard showing pool distribution, vesting overview, and compliance metrics"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-none border border-border shadow-2xl overflow-hidden mt-4">
              <img
                src={dashboardGrants}
                alt="Grant Ledger showing stakeholder equity allocations, vesting status, and execution dates"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
