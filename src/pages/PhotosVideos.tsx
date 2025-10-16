import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import im2 from "@/assets/im2.jpg";
import im3 from "@/assets/im3.jpg";
import im4 from "@/assets/im4.jpg";
import im5 from "@/assets/im5.jpg";
import image1 from "@/assets/image-1.jpg";

const PhotosVideos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialBar />

      <main className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Vidéos */}
          <section className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                VIDÉOS
              </h1>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="animate-fade-in">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                  <video controls className="w-full">
                    <source src="/v2.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                  <video controls className="w-full">
                    <source src="/video2.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/* Section Photos */}
          <section>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
                PHOTOS
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="animate-scale-in cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(photo.src)}
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <img
            src={selectedImage}
            alt="Agrandissement"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PhotosVideos;
