import { Globe, ShieldCheck, BarChart3 } from "lucide-react";
import captableDemo from "@/assets/captable-demo.mp4";

const features = [
  {
    icon: Globe,
    title: "Multi-Currency Cap Table",
    description:
      "Track ownership across NGN, BRL, INR, KES, and USD — all in one unified cap table. No more spreadsheet gymnastics.",
  },
  {
    icon: ShieldCheck,
    title: "Regional Compliance, Always Checked",
    description:
      "CVM, SEBI, SEC Nigeria, or CAC — our built-in Business Intelligence continuously validates your cap table against local regulations.",
  },
  {
    icon: BarChart3,
    title: "Real-Time BI Insights",
    description:
      "Dilution modeling, scenario analysis, and compliance alerts — all powered by our integrated BI engine.",
  },
];

const CapTableSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Cap Table Management
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            One cap table. Every currency.
            <br />
            Every regulation. Always compliant.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Equical handles multi-currency ownership and regional compliance checks in real time.
          </p>
        </div>

        <div className="overflow-hidden">
          <video
            src={captableDemo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            style={{ clipPath: 'inset(0 3% 0 15%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CapTableSection;
