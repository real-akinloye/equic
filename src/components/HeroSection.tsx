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
              managing ownership the right way.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8 py-6 text-base font-semibold">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold" asChild>
                <a
                  href="https://wa.me/2348110345944?text=Hi%20Equical%2C%20I%27d%20like%20to%20book%20a%20demo%20of%20your%20equity%20management%20platform.%20Please%20let%20me%20know%20the%20available%20slots."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Stacked Dashboard Images */}
          <div className="relative">
            <div className="rounded-none border-2 border-foreground/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
              <img
                src={dashboardEsop}
                alt="ESOP Infrastructure dashboard showing pool distribution, vesting overview, and compliance metrics"
                className="w-full h-auto contrast-[1.1] saturate-[1.15]"
              />
            </div>
            <div className="rounded-none border-2 border-foreground/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden mt-4">
              <img
                src={dashboardGrants}
                alt="Grant Ledger showing stakeholder equity allocations, vesting status, and execution dates"
                className="w-full h-auto contrast-[1.1] saturate-[1.15]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
