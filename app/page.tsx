import Contacts from "@/components/general/Contacts";
import Hero from "@/components/general/Hero";
import Map from "@/components/general/Map";
import Partners from "@/components/general/Partners";
import PhotoCarousel from "@/components/general/PhotoCarousel";
import Promotion from "@/components/general/Promotion";
import SearchListing from "@/components/general/SearchListing";
import Services from "@/components/general/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <SearchListing />
      <Services />
      <Partners />
      <PhotoCarousel />
      <Contacts />
      <Map />
    </>
  );
}
