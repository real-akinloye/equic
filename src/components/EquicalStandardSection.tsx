import { useState } from "react";
import { Coins, Brain, Unlock } from "lucide-react";

const tabs = [
  {
    id: "currency",
    label: "Multi-Currency",
    icon: Coins,
    heading: "Native Multi-Currency Support",
    description:
      "Built to handle the reality of global fundraising. No more manual excel conversions or rounding errors.",
    features: [
      "Native support for BRL, MXN, INR, NGN, KES, SGD, USD, EUR & 15+",
      "Real-time exchange rate conversion for display",
      "Unified reporting across currencies",
    ],
  },
  {
    id: "ai",
    label: "AI Intelligence",
    icon: Brain,
    heading: "Conversational Equity Intelligence",
    description:
      "Don't just look at charts. Ask questions and get answers about your company's future.",
    features: [
      '"What\'s my dilution if I raise $2M at $15M pre?"',
      '"Is my option pool compliant in Brazil?"',
      '"When does Maria\'s equity vest?"',
    ],
  },
  {
    id: "liquidity",
    label: "Liquidity",
    icon: Unlock,
    heading: "Equity Liquidity for Employees",
    description:
      "Employees shouldn't have to wait 10 years for an IPO to see value from their hard work.",
    features: [
      "Tokenize vested equity on-chain",
      "Company buybacks when cash is available",
      "Instant settlement via USDC/Stablecoins",
    ],
  },
];

const EquicalStandardSection = () => {
  const [activeTab, setActiveTab] = useState("currency");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Built FROM Emerging Markets, FOR Emerging Markets
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            The Equical Standard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop adapting to US-only tools. Use a platform that adapts to your
            local reality.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mt-12 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider border transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              {active.heading}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {active.description}
            </p>
            <ul className="space-y-3">
              {active.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="bg-muted/50 border border-border p-8 lg:p-12">
            {activeTab === "currency" && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Live Currency Engine
                </p>
                {[
                  { pair: "NGN → USD", rate: "₦1,580.50", change: "+0.12%" },
                  { pair: "BRL → USD", rate: "R$5.42", change: "-0.08%" },
                  { pair: "INR → USD", rate: "₹83.12", change: "+0.03%" },
                  { pair: "KES → USD", rate: "KSh153.20", change: "+0.21%" },
                ].map((item) => (
                  <div
                    key={item.pair}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="font-semibold text-foreground text-sm">
                      {item.pair}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground text-sm">
                        {item.rate}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          item.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "ai" && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  AI Assistant
                </p>
                <div className="space-y-3">
                  <div className="bg-primary/10 px-4 py-3 border-l-2 border-primary">
                    <p className="text-sm text-foreground">
                      "What happens to my ownership if we raise a Series A at
                      $10M pre-money?"
                    </p>
                  </div>
                  <div className="bg-background px-4 py-3 border border-border">
                    <p className="text-sm text-muted-foreground">
                      Based on your current cap table, a $10M pre-money Series A
                      raising $2.5M would dilute your stake from{" "}
                      <span className="text-foreground font-semibold">
                        45.2% → 36.1%
                      </span>
                      . Your ESOP pool would adjust to 8.4%.
                    </p>
                  </div>
                  <div className="bg-primary/10 px-4 py-3 border-l-2 border-primary">
                    <p className="text-sm text-foreground">
                      "Is my option pool compliant in Nigeria?"
                    </p>
                  </div>
                  <div className="bg-background px-4 py-3 border border-border">
                    <p className="text-sm text-muted-foreground">
                      ✓ Your ESOP structure complies with Nigerian SEC
                      regulations. No additional filings required at this stage.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "liquidity" && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Liquidity Flow
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      step: "01",
                      label: "Vested Equity",
                      detail: "Employee options fully vested",
                    },
                    {
                      step: "02",
                      label: "Tokenization",
                      detail: "Convert to on-chain tokens via Pluto",
                    },
                    {
                      step: "03",
                      label: "Settlement",
                      detail: "Instant USDC payout on Base L2",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-center gap-4 p-4 bg-background border border-border"
                    >
                      <span className="text-2xl font-bold text-primary">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquicalStandardSection;
