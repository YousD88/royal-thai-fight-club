const Location = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            NOUS TROUVER
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.323667992433!2d5.679242258773085!3d48.35125185214597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ecb34024b13085%3A0x812c85e6ee30bc96!2sRoyal%20Tha%C3%AF%20Boxing!5e0!3m2!1sfr!2sfr!4v1757595009143!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="animate-fade-in">
              <h3 className="font-heading text-2xl text-secondary mb-2">ADRESSE</h3>
              <p className="text-foreground">
                Royal Thai<br />
                Neufchâteau, France
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-heading text-2xl text-secondary mb-2">TÉLÉPHONE</h3>
              <p className="text-foreground">+33 X XX XX XX XX</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-2xl text-secondary mb-2">EMAIL</h3>
              <p className="text-foreground">contact@royalthaiboxing.fr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
