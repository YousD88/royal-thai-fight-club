import coachImage from "@/assets/coach.jpg";

const Coach = () => {
  return (
    <section id="coach" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            NOTRE COACH
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="order-2 md:order-1 animate-fade-in-right">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Découvrez <span className="text-primary font-bold">notre coach expérimenté</span>, 
              passionné par la boxe et le sport de combat.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Avec plusieurs années de pratique et de pédagogie, il vous accompagne dans votre progression,
              que vous soyez débutant ou confirmé.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Son objectif : transmettre la discipline, le respect et la performance dans une ambiance conviviale.
            </p>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 animate-fade-in-left">
            <div className="relative">
              <img
                src={coachImage}
                alt="Coach Fabrice BERNARDIN"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <h3 className="font-heading text-3xl text-secondary">
                  FABRICE BERNARDIN
                </h3>
                <p className="text-foreground text-lg">Coach Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
