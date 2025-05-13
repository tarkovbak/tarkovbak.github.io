import React from "react";
import { Source_Sans_3 } from "next/font/google";
import { Cinzel } from "next/font/google";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";
import {
  Label
} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Button
} from "@/components/ui/button";

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

const SearchListing = () => {
  const fields = [
    { label: "Location", id: "location", type: "select", options: ["Any"] },
    { label: "Type", id: "type", type: "select", options: ["Any"] },
    { label: "Sort by", id: "sort-by", type: "select", options: ["Select option"] },
    { label: "Bedrooms", id: "bedrooms", type: "select", options: ["Any Number"] },
    { label: "Baths", id: "baths", type: "select", options: ["Any Number"] },
    { label: "Min Price", id: "min-price", type: "input" },
    { label: "Max Price", id: "max-price", type: "input" },
  ];

  return (
    <section
      className="relative px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/search-listing.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        <div className="text-center mb-8">
          <h2
            className={`text-white text-4xl md:text-5xl text-center lg:text-left lg:mx-40 tracking-wide ${cinzel.className}`}
          >
            Find your dream home
          </h2>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-6xl bg-white/90 backdrop-blur-md shadow-xl p-6 sm:p-8">
            <CardContent>
              <form className={sourceSansPro.className}>
                <h3
                  className={`text-xl font-semibold text-gray-800 mb-6 ${cinzel.className}`}
                >
                  Search Listings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      {field.type === "select" ? (
                        <Select>
                          <SelectTrigger id={field.id} className="w-full">
                            <SelectValue placeholder={field.options?.[0]} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((opt) => (
                              <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input id={field.id} placeholder={field.label} className="w-full" />
                      )}
                    </div>
                  ))}

                  {/* Submit Button */}
                  <div className="flex items-end">
                    <Button type="submit" className="w-full cursor-pointer rounded-full">
                      Search now
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SearchListing;
