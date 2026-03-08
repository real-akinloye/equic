import { Rocket, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const DealDeskSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Integrated Deal Flow
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Deal Desk for Founders & Investors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline fundraising and investing with integrated deal management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Founder */}
          <div className="bg-background border border-border p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Founder Deal Desk
                </h3>
                <p className="text-sm text-muted-foreground">
                  Manage your fundraising
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Create and manage funding rounds",
                "Set valuation and equity offered",
                "Invite VCs to your deals",
                "Manage negotiations in one place",
                "Close deals seamlessly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Start Fundraising</Button>
          </div>

          {/* VC */}
          <div className="bg-background border border-border p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  VC Deal Desk
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover and invest
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Discover promising founders",
                "Browse curated deal cards",
                "Invest directly through platform",
                "Stripe Connect & ACH payments",
                "Auto-updated cap tables",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">
              Browse Deals
            </Button>
          </div>
        </div>

        {/* Payment note */}
        <div className="mt-8 text-center bg-background border border-border p-6">
          <h4 className="font-bold text-foreground mb-2">
            Seamless Payment Integration
          </h4>
          <p className="text-sm text-muted-foreground">
            Powered by Stripe Connect & ACH for secure, fast transactions. All
            investments automatically update your cap table in real-time.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Real-time cap table updates • Secure payments • Automated compliance
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealDeskSection;
