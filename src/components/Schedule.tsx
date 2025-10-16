const Schedule = () => {
  const schedules = [
    { day: "Lundi", time: "18h00 - 20h00" },
    { day: "Mercredi", time: "18h00 - 20h00" },
    { day: "Vendredi", time: "18h00 - 20h00" },
    { day: "Samedi", time: "10h00 - 12h00" },
  ];

  return (
    <section className="py-12 bg-card/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-2xl text-muted-foreground mb-6">
            HORAIRES D'OUVERTURE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {schedules.map((schedule) => (
              <div key={schedule.day} className="text-sm">
                <p className="font-semibold text-foreground">{schedule.day}</p>
                <p className="text-muted-foreground">{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
