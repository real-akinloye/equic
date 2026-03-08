const steps = [
  {
    number: "01",
    title: "Create or Import Company Data",
    description:
      "Set up your company profile or import existing equity data from CSV, Excel, or other platforms. Our UDM system automatically cleans and organizes everything.",
  },
  {
    number: "02",
    title: "Manage Equity, Deals, and ESOP",
    description:
      "Use AI-powered cap tables, calculators, and deal desks to manage equity structure, close funding rounds, and track employee stock options.",
  },
  {
    number: "03",
    title: "Track Ownership + Liquidity on Pluto",
    description:
      "Monitor ownership intelligence in real-time. Optionally tokenize equity on Base (L2) through Pluto for on-chain liquidity and transparency.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Getting Started
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <span className="text-5xl font-bold text-primary/20 absolute top-4 right-6">
                {step.number}
              </span>
              <div className="pt-8">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
