import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    img: "/assets/service1.png",
    title: "Cool Feature Service",
    description: "Description for service one.",
  },
  {
    img: "/assets/service2.png",
    title: "Even Cooler Feature",
    description: "",
  },
  {
    img: "/assets/service3.png",
    title: "Cool Feature Title",
    description: "Description for service three.",
  },
];

export default function Services() {
  return (
    <div className="bg-[#0A2640] px-4 py-14 lg:px-24 md:px-8 sm:px-6 flex flex-col gap-8">
      <div>
        <p className="text-[#F1F1F1] text-[20px] text-center">Our Services</p>
        <h1 className="text-2xl md:text-4xl lg:text-[48px] leading-tight md:leading-[72px] text-white text-center">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-3 max-w-xs">
            <Image
              src={service.img}
              alt={service.title}
              className="w-full h-auto object-cover"
              width={300}
              height={354}
            />
            <h2 className="text-white text-[16px] text-center md:text-left">
              {service.title}
            </h2>
            <Link
              className="text-white border-b w-fit flex flex-row gap-2 items-center pb-2 font-bold mx-auto md:mx-0"
              href="/"
            >
              Explore Page
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
