import aboutImage from "@/assets/about-club.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-left">
            <img
              src={aboutImage}
              alt="Royal Thai Boxing Club"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-right">
            <h2 className="font-heading text-5xl md:text-6xl text-primary mb-6">
              ROYAL THAI BOXING
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Bienvenue dans un espace tout neuf et facile d'accès, dédié au sport et au bien-être.
              Notre salle propose différentes disciplines pour tous les niveaux.
            </p>
            <div className="space-y-4">
              {[
                "Boxe Thaïlandaise",
                "Kick-Boxing",
                "Boxe Anglaise",
                "Ninja Kids",
                "Training",
                "Musculation",
              ].map((discipline) => (
                <div
                  key={discipline}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-2 h-2 bg-primary rotate-45"></div>
                  <span className="text-lg font-medium">{discipline}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg mt-6">
              Que vous soyez débutant ou confirmé, rejoignez-nous pour progresser dans une ambiance conviviale et sportive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
