import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    "25+ years of industry expertise",
    "Ethical and sustainable practices",
    "Quality assurance guarantee",
    "Transparent supply chain",
    "Competitive pricing models",
    "Fast-to-market solutions",
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1974"
                alt="Textile factory"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full transform translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 -z-10 animate-on-scroll"></div>

            <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-lg max-w-xs shadow-lg animate-on-scroll">
              <p className="font-medium text-foreground">
                <span className="font-bold gradient-text">200+</span> Global
                brands partnered
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-primary/80 font-semibold animate-on-scroll">
              About FashionLink
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold animate-on-scroll">
              Your Trusted Partner in Global Clothing Sourcing
            </h3>
            <p className="text-lg text-foreground/80 animate-on-scroll">
              Since 1998, we've connected the world's finest clothing
              manufacturers with leading brands, ensuring quality,
              sustainability, and ethical practices throughout the supply chain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
