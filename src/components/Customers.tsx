import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { TfiShine } from "react-icons/tfi";
import { BsPen } from "react-icons/bs";

export default function Customers() {
  return (
    <section className="flex flex-col gap-16 md:gap-48 px-4 lg:px-24 md:px-8 py-16 bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Left Image & Card */}
        <div className="relative">
          <Image
            src="/assets/man-talking.png"
            alt="Man talking on phone"
            className="w-full max-w-xs md:max-w-md lg:w-[400px] h-auto object-cover rounded-2xl"
            width={400}
            height={400}
          />
          <div className="absolute -bottom-8 lg:-bottom-14 right-2 lg:right-6 bg-white p-4 lg:p-6 rounded-xl shadow-md w-32 md:w-40 lg:w-[200px] text-center">
            <Image
              src="/assets/bar-chart-1.png"
              alt="Bar chart"
              width={251}
              height={227.20985412597656}
              className="w-full h-auto"
            />
            <p className="text-sm md:text-lg font-bold text-start text-[#0A2640]">
              30%
            </p>
            <p className="text-xs md:text-sm text-[#0A2640] text-start">
              More income in June
            </p>
          </div>
        </div>

        {/* Right Text */}
        <div className="max-w-md w-full text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-snug">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "We connect our customers with the best.",
              "Advisor success customer launch party.",
              "Business-to-consumer long tail.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <IoIosCheckmarkCircle className="text-[#0A2640] w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-left">{text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#0A2640] text-white px-6 py-3 rounded-full font-medium hover:bg-[#082437] transition">
            Start now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-0">
        {/* Right Image & Card */}
        <div className="relative h-auto lg:h-[500px]">
          <Image
            src="/assets/woman-talking.png"
            alt="Woman smiling on phone"
            className="w-full max-w-xs md:max-w-md lg:w-[340px] h-auto lg:h-[450px] object-cover rounded-2xl"
            width={340}
            height={450}
          />
          <div className="absolute -bottom-4 lg:-bottom-2 left-4 lg:left-[40px] h-auto lg:h-[270px] justify-between flex flex-col items-center bg-white p-4 lg:p-6 rounded-xl shadow-md w-40 md:w-48 lg:w-[220px]">
            <Image
              src="/assets/pie-chart-1.png"
              alt="Pie chart"
              width={130}
              height={130}
              className="w-20 h-20 lg:w-32 lg:h-32"
            />
            <ul className="text-xs md:text-sm text-gray-700 space-y-1 lg:space-y-2 flex flex-col gap-1 mt-2 lg:mt-0">
              <li>
                <span className="text-[#0A2640] font-semibold">35%</span> –
                Agile Development
              </li>
              <li>
                <span className="text-[#0A2640] font-semibold">30%</span> –
                Investor bandwidth
              </li>
              <li>
                <span className="text-[#0A2640] font-semibold">35%</span> – A/B
                testing
              </li>
            </ul>
          </div>
        </div>

        {/* Left Text */}
        <div className="max-w-md w-full flex flex-col gap-8 lg:gap-12 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] leading-snug">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="space-y-3 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-[#0A2640] text-white px-5 py-3 rounded-md shadow-md">
              <span>
                <BsPen />
              </span>
              <p>We connect our customers with the best.</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-md shadow-md">
              <span>
                <FiEye />
              </span>
              <p>Advisor success customer launch party.</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-md shadow-md">
              <span>
                <TfiShine />
              </span>
              <p>Business-to-consumer long tail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
