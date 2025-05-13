import React from "react";
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

const Promotion = () => {
  return (
    <section className="bg-white text-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-4xl py-5 ${cinzel.className}`}>GET IT SOLD</h2>
        </div>

        {/* Block 1 */}
        <div className={`flex flex-col lg:flex-row items-center gap-10 mb-16 ${sourceSansPro.className}`}>
          <div className="w-full lg:w-1/2">
            <img
              src="/get-it-sold1.webp"
              alt="Top Sales"
              loading="lazy"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl mb-4">
              Top Residential Sales Last 5 Years
            </h4>
            <p className="text-lg text-gray-500">
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/get-it-sold-2.webp"
              alt="Get it SOLD"
              loading="lazy"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl mb-4">
              Don't Just List it...
            </h4>
            <p className="text-lg text-gray-500">
              Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="/get-it-sold-3.webp"
              alt="Guide to Buyers"
              loading="lazy"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl mb-4">Guide to Buyers</h4>
            <p className="text-lg text-gray-500">
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, & more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
