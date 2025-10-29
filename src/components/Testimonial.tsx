"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
    name: "Albus Dumbledore",
    title: "Manager @ Howarts",
    image: "/assets/albus.png",
  },
  {
    quote:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    name: "Severus Snape",
    title: "Manager @ Slytherin",
    image: "/assets/snape.png",
  },
  {
    quote:
      "Release facebook responsive web design business model canvas seed money monetization.",
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
    image: "/assets/harry.png",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-[#0A2640] text-white py-12 lg:py-20 px-4 lg:px-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl md:text-3xl font-semibold leading-snug text-center lg:text-left">
            An enterprise template to ramp <br /> up your company website
          </h2>

          {/* Navigation Buttons (currently inactive) */}
          <div className="hidden lg:flex gap-4 items-center justify-center -mb-10">
            <button className="w-8 h-8 items-center justify-center rounded-full bg-white text-[#0A2640] hover:bg-gray-200 transition">
              <ArrowLeft className="items-center" />
            </button>
            <button className="w-8 h-8 items-center justify-center rounded-full bg-white text-[#0A2640] hover:bg-gray-200 transition">
              <ArrowRight className="" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white text-black py-6 px-6 lg:px-8 rounded-xl shadow-md flex w-full max-w-xs md:max-w-sm lg:w-[320px] flex-col justify-between min-h-[200px] lg:min-h-0
                ${
                  i === 0
                    ? "lg:h-[250px]"
                    : i === 1
                    ? "lg:h-[294px]"
                    : "lg:h-[258px]"
                }
              `}
            >
              <p className="text-lg lg:text-[22px] italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold text-[#0A2640]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for mobile */}
        <div className="flex justify-center mt-8 gap-2 lg:hidden">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full bg-white opacity-40"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
