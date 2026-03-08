import { Link2, ShieldCheck, Zap, Landmark } from "lucide-react";
import tokenizationPreview from "@/assets/tokenization-preview.png";

const features = [
  {
    icon: Link2,
    title: "On-Chain Liquidity",
    description:
      "Convert equity into digital tokens for optional liquidity without traditional exit events",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliant",
    description:
      "Built with compliance in mind, ensuring all tokenization follows regulatory requirements",
  },
  {
    icon: Zap,
    title: "Powered by Base (L2)",
    description:
      "Fast, low-cost transactions on Base Layer 2 for efficient token operations",
  },
  {
    icon: Landmark,
    title: "Real Ownership",
    description:
      "Tokens represent real ownership stakes and can be redeemed for actual equity",
  },
];

const TokenizationSection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Powered by Pluto
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Tokenization of Equity
            <br />
            <span className="text-primary">Digital Assets for Liquidity</span>
          </h2>
          <p className="text-lg text-background/60 max-w-3xl mx-auto">
            Convert your equity into on-chain tokens for optional liquidity.
            Powered by Pluto, our on-chain module built on Base (L2). Tokens
            represent real ownership and can be redeemed.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 border border-background/10 bg-background/5 hover:bg-background/10 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {[
            { label: "Equity", sub: "Company Ownership", color: "bg-primary" },
            { label: "Tokens", sub: "On-Chain Digital Assets", color: "bg-primary/80" },
            { label: "Liquidity", sub: "Tradeable on Base L2", color: "bg-primary/60" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div
                className={`${item.color} px-8 py-5 text-center min-w-[180px]`}
              >
                <p className="font-bold text-primary-foreground text-lg">
                  {item.label}
                </p>
                <p className="text-xs text-primary-foreground/70">
                  {item.sub}
                </p>
              </div>
              {i < 2 && (
                <div className="hidden md:block text-background/30 text-2xl px-4">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenizationSection;
