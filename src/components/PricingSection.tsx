import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Basic cap table management",
      "Up to 10 stakeholders",
      "Basic calculators",
      "Community support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Lite",
    description: "For early teams & solo founders",
    price: "$80",
    features: [
      "Cap table management",
      "Basic ESOP tracking",
      "Stakeholder management",
      "Founder / Employee views",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    description: "For growing teams & investors",
    price: "$250",
    features: [
      "Everything in Lite +",
      "Multi-company support",
      "Investor portfolio view",
      "Advanced equity modeling",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For funds & large orgs",
    price: "$5,000",
    features: [
      "Everything in Pro +",
      "Custom compliance rules",
      "Advanced audits & reporting",
      "API access",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 border bg-background flex flex-col ${
                plan.featured
                  ? "border-primary shadow-[0_0_0_2px_hsl(var(--primary))]"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.description}
              </p>
              <div className="my-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-2 h-2 bg-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
