import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Entraînement Boxe Thaï" },
    { src: gallery2, alt: "Salle de musculation" },
    { src: gallery3, alt: "Cours collectif" },
  ];

  return (
    <section id="galerie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            GALERIE
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto animate-scale-in">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
