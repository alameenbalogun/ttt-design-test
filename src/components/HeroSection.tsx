import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-6 lg:px-24 md:px-8 sm:px-6 gap-8 lg:gap-0">
      {/* Left Content */}
      <div className="max-w-lg flex flex-col gap-8 lg:gap-12 text-center lg:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Save time by building&nbsp;
            <span className="font-semibold">fast</span> <br />
            with <span className="font-semibold">Boldo Template</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>

        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="bg-[#0A2640] text-white px-6 py-3 rounded-full font-medium hover:bg-[#082437] transition text-sm md:text-base">
            Buy template
          </button>
          <button className="border border-[#0A2640] text-[#0A2640] px-6 py-3 rounded-full font-medium hover:bg-[#0A2640] hover:text-white transition text-sm md:text-base">
            Explore
          </button>
        </div>
      </div>

      {/* Right Graphics */}
      <div className="flex flex-col lg:flex-row gap-6 items-center w-full lg:w-auto">
        <div className="space-y-4 lg:space-y-6 w-full max-w-md lg:max-w-none">
          <Image
            src="/assets/main-stats.png"
            alt="Main stats"
            className="w-full h-auto rounded-xl shadow-md"
            width={493.8578796386719}
            height={231.8984832763672}
          />
          <div className="flex justify-between gap-4">
            <Image
              src="/assets/bar-chart.png"
              alt="Bar chart"
              className="rounded-xl shadow-md w-1/2"
              width={192.1751251220703}
              height={165.33502197265625}
            />
            <Image
              src="/assets/pie-chart.png"
              alt="Pie chart"
              className="rounded-xl shadow-md w-1/2"
              width={261.9593811035156}
              height={165.33502197265625}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
