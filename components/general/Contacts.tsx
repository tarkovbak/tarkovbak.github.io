"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

const Contacts = () => {
  return (
    <section id="scrollspyContact" className="py-16 px-4">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className={`text-4xl font-semibold text-gray-600 ${cinzel.className}`}>
          We're always on the lookout to work with new clients.
        </h2>
      </div>

      {/* Form and Info */}
      <div className="container max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-center">
        {/* Contact Form */}
        <Card className="bg-accent">
          <CardContent className="p-6 space-y-5">
            <form action="#!" className={`space-y-5 ${sourceSansPro.className}`}>
              <div>
                <Label htmlFor="fullname">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="fullname" name="fullname" required />
              </div>
              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Input id="subject" name="subject" required />
              </div>
              <div>
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" name="message" rows={3} required />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground pt-3">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className={`space-y-8 ${sourceSansPro.className}`}>
          <div>
            <h4 className="text-xl font-semibold mb-1">Office</h4>
            <p className="mb-2">Please visit us to have a discussion.</p>
            <address className="text-muted-foreground">
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </address>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-1">Phone</h4>
              <p className="mb-2">Please speak with us directly.</p>
              <a
                href="tel:+15057922430"
                className="text-muted-foreground hover:underline"
              >
                (206) 919-6886
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Email</h4>
              <p className="mb-2">Please write to us directly.</p>
              <a
                href="mailto:demo@yourdomain.com"
                className="text-muted-foreground hover:underline"
              >
                demo@yourdomain.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Opening Hours</h4>
            <p className="mb-2">Explore our business opening hours.</p>
            <div className="flex gap-10">
              <div>
                <p className="font-semibold text-muted-foreground">Mon - Fri</p>
                <p className="text-muted-foreground">8am - 7pm</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground">Sat - Sun</p>
                <p className="text-muted-foreground">8am - 7pm</p>
              </div>
            </div>
            <p className="pt-3 text-muted-foreground">
              Appointments outside office hours available upon request. Just call!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
