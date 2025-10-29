"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const routeNames = ["Product", "Services", "About"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-6 lg:px-24 md:px-8 sm:px-6">
      <div className="flex items-center flex-row gap-2">
        <Image src="/assets/boldo.png" alt="Logo" width={25} height={33} />
        <h1 className="text-2xl md:text-[43.25px] font-bold text-[#0A2640]">
          Boldo
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center flex-row gap-4">
        {routeNames.map((route) => {
          return (
            <Link
              key={route}
              href={`/${route.toLowerCase()}`}
              className="mx-4 text-[16px] leading-7 font-semibold text-[#0A2640]"
            >
              {route}
            </Link>
          );
        })}
        <button className="border border-[#0A2640] h-10 text-[16px] w-32 rounded-full text-[#0A2640] font-bold">
          Log in
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#0A2640]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4">
            {routeNames.map((route) => (
              <Link
                key={route}
                href={`/${route.toLowerCase()}`}
                className="py-3 text-[16px] font-semibold text-[#0A2640] border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {route}
              </Link>
            ))}
            <button className="mt-4 border border-[#0A2640] h-10 text-[16px] rounded-full text-[#0A2640] font-bold">
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
