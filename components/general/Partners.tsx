import React from 'react'
import Image from "next/image";
import { Source_Sans_3 } from 'next/font/google';
import { Cinzel } from 'next/font/google';

export const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'], // Cinzel doesn't support italic in Google Fonts
  display: 'swap',
});


const partners = [
  "/logo1.webp",
  "/logo2.webp",
  "/logo3.webp",
  "/logo4.webp",
];

const Partners = () => {
  return (
    <section className="py-5 my-8 bg-white">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className={`text-3xl font-semibold text-gray-600 ${cinzel.className}`}>Our Partners</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={150}
                height={80}
                className="object-contain h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
