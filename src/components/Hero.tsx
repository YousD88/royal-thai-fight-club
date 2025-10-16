import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-boxing.jpg";

const Hero = () => {
  const phrases = [
    "BOXE THAILANDAISE",
    "MUSCULATION",
    "KICK-BOXING",
    "TRAINING",
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Boxe Thaïlandaise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-heading text-7xl md:text-9xl text-primary mb-4 drop-shadow-2xl">
            ROYAL THAI
          </h1>
        </div>

        {/* Rotating Text */}
        <div className="h-20 flex items-center justify-center">
          {phrases.map((phrase, index) => (
            <p
              key={phrase}
              className={`absolute font-heading text-3xl md:text-5xl text-foreground transition-all duration-500 ${
                index === currentPhrase
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              {phrase}
            </p>
          ))}
        </div>

        <p className="mt-8 text-xl md:text-2xl text-muted-foreground font-heading">
          NEUFCHÂTEAU
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
