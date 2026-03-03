import { useEffect, useRef, useState } from "react";
import captableDemo from "@/assets/captable-demo.mp4";

const CapTableSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start zoomed in, then animate to normal after a brief delay
          setTimeout(() => setIsZoomed(false), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

        <div className="overflow-hidden" ref={videoRef}>
          <video
            src={captableDemo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            style={{
              clipPath: 'inset(6% 3% 0 5%)',
              transform: isZoomed ? 'scale(1.4)' : 'scale(1)',
              transition: 'transform 5s ease-out',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CapTableSection;
