import React from "react";

export default function CTASection() {
  return (
    <div className="px-4 py-16 lg:px-24 md:px-8 rounded-md">
      <section className="bg-[#0A2640] text-white p-8 lg:p-16 relative overflow-hidden rounded-lg">
        {/* Background Shape Overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-[#1B4568] rounded-l-full z-0"></div>

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-[44px] font-medium leading-snug max-w-2xl">
            An enterprise template to ramp up your company website
          </h2>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full text-[#0A2640] bg-white text-sm w-full sm:w-72 focus:outline-none"
            />
            <button className="bg-[#65E4A3] text-[#0A2640] px-8 py-3 rounded-full font-semibold hover:bg-[#4fd28f] transition w-full sm:w-auto">
              Start now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
