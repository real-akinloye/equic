import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Stop Asking If US Tools
          <br />
          Work in Your Country
        </h2>
        <p className="text-lg text-background/60 max-w-2xl mx-auto mb-8">
          Equical was built FOR your country, FROM day one.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-base font-semibold">
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold border-background/20 text-background hover:bg-background/10"
            asChild
          >
            <a
              href="https://wa.me/2348110345944?text=Hi%20Equical%2C%20I%27d%20like%20to%20book%20a%20demo%20of%20your%20equity%20management%20platform.%20Please%20let%20me%20know%20the%20available%20slots."
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
