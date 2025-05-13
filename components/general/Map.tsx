import React from "react";

const Map = () => {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="w-full max-w-screen-xl mx-auto aspect-[25/9] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218431.9875551817!2d-0.4137320751495434!3d51.52822753184567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2sph!4v1746768916466!5m2!1sen!2sph"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
