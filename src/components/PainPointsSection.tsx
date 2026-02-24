import { Globe, Shield, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Globe,
    title: "Multi-Currency Chaos",
    description:
      "You raised $500K from a mix of local and international investors. Your cap table is in 3 different currencies.",
  },
  {
    icon: Shield,
    title: "Local Compliance",
    description:
      "You're trying to comply with Brazilian CVM, Indian SEBI, or Nigerian SEC regulations, not just Delaware law.",
  },
  {
    icon: DollarSign,
    title: 'The "Standard" Option',
    description:
      "And traditional platforms want $2,500/year for a tool built strictly for US C-Corps.",
  },
];

const locations = [
  { city: "Lagos", currency: "NGN / USD", status: "Active" },
  { city: "São Paulo", currency: "BRL / USD", status: "Active" },
  { city: "Bangalore", currency: "INR / USD", status: "Active" },
  { city: "Nairobi", currency: "KES / USD", status: "Active" },
  { city: "Jakarta", currency: "IDR / USD", status: "Active" },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            You're building in São Paulo, Lagos,
            <br />
            Bangalore, or Mexico City.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Pain Point Cards */}
          <div className="space-y-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 bg-background border border-border rounded-none shadow-sm"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-primary/10 flex items-center justify-center rounded-none">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Location Table */}
          <div className="bg-foreground text-background rounded-none overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-background/10">
                    <th className="text-left text-xs font-semibold uppercase tracking-wider px-6 py-4 text-background/60">
                      Location
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-wider px-6 py-4 text-background/60">
                      Currency
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-wider px-6 py-4 text-background/60">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((loc) => (
                    <tr
                      key={loc.city}
                      className="border-b border-background/5 last:border-0"
                    >
                      <td className="px-6 py-4 font-medium">{loc.city}</td>
                      <td className="px-6 py-4 text-background/70">
                        {loc.currency}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 text-sm">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          {loc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-5 border-t border-background/10">
              <p className="text-sm text-background/50 italic">
                "Why am I paying for Delaware compliance features I can't use?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
