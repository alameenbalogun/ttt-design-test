import Image from "next/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const customerConnectInfo = [
  {
    text: "we connect our customers with the best?",
    description: "",
  },
  {
    text: "Android research and development rockstar",
    description: "",
  },
];

export default function CustomerConnect() {
  return (
    <div className="py-12 lg:py-20 px-4 lg:px-20 md:px-8 flex flex-col gap-8">
      <Image
        src="/assets/customer-connect.png"
        alt="Customer Connect"
        width={1110}
        height={192}
        className="w-full h-auto"
      />

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <h1 className="text-2xl lg:text-[36px] w-full lg:w-[500px] font-normal text-center lg:text-left">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <div className="w-full lg:w-[450px] flex flex-col gap-6 p-4">
          {customerConnectInfo.map((info, index) => (
            <div
              key={index}
              className="border-b p-2 flex flex-row justify-between items-center"
            >
              <h2 className="text-sm lg:text-[16px] font-normal">
                {info.text}
              </h2>
              <IoIosArrowDropdownCircle className="w-6 h-6 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
