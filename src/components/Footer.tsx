import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start px-4 py-16 lg:px-24 md:px-8 bg-white">
      {/* Left Section */}
      <div className="max-w-xs flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/boldo.png"
            alt="Boldo Logo"
            width={25}
            height={33}
          />
          <h1 className="text-2xl lg:text-[32px] font-bold text-[#0A2640]">
            Boldo
          </h1>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>

        <p className="text-xs text-gray-400">All rights reserved.</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap gap-12 lg:gap-32">
        {/* Landings */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-[#0A2640]">Landings</h4>
          <ul className="space-y-3 text-gray-500 text-sm flex flex-col gap-5">
            <li>
              <Link href="/" className="hover:text-[#0A2640] transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#0A2640] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#0A2640] transition"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-[#0A2640]">Company</h4>
          <ul className="space-y-3 text-gray-500 text-sm flex flex-col gap-5">
            <li>
              <Link href="/" className="hover:text-[#0A2640] transition">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="/careers" className="hover:text-[#0A2640] transition">
                Careers
              </Link>
              <span className="bg-[#65E4A3] text-[#0A2640] text-xs font-semibold px-2 py-0.5 rounded-full">
                Hiring!
              </span>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#0A2640] transition"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-[#0A2640]">Resources</h4>
          <ul className="space-y-3 text-gray-500 text-sm flex flex-col gap-5">
            <li>
              <Link href="/blog" className="hover:text-[#0A2640] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#0A2640] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#0A2640] transition"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
