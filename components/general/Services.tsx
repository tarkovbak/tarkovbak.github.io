import React from "react";
import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { Cinzel } from "next/font/google";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

const services = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: "/our-services1.webp",
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get it for you at the price that's right. TICs? Fixer-uppers? Luxury? We can help with all of it.",
    image: "/our-services1.webp",
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, legal matters, or income, trust us to find you what you need fast. We make sure you feel confident and educated every step of the way.",
    image: "/our-services1.webp",
  },
];

const Services = () => {
  return (
    <section className="py-10 xl:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl font-semibold text-gray-600 ${cinzel.className}`}>
            We are proud of our expert services.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-4 border-none shadow-none">
              <CardHeader className="p-0 mb-4">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent>
                <h4 className={`text-xl font-semibold mb-2 ${sourceSansPro.className}`}>
                  {service.title}
                </h4>
                <p className={`text-gray-600 ${sourceSansPro.className}`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
