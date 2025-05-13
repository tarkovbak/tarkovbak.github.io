"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Source_Sans_3 } from "next/font/google";
import { Cinzel } from "next/font/google";

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
});

const images = [
  "/banner1.webp",
  "/get-it-sold1.webp",
  "/get-it-sold-2.webp",
  "/get-it-sold-3.webp",
  "/get-to-know.webp",
  "/search-listing.webp",
];

const PhotoCarousel = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className={`text-3xl font-semibold text-center mb-10 text-gray-600 ${cinzel.className}`}>Gallery</h2>

      <div className="relative w-full max-w-5xl mx-auto">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="overflow-hidden rounded-lg shadow-md group relative aspect-video">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute bottom-0 left-0 w-full bg-black/40 text-white p-2 text-sm ${sourceSansPro.className}`}>
                    Gallery Image {index + 1}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoCarousel;
