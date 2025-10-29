import Image from "next/image";

export default function Partners() {
  return (
    <section className="flex flex-wrap justify-center gap-8 md:gap-12 lg:justify-between py-12 px-4 lg:px-24 md:px-8 bg-white">
      {["Boldo", "Presto", "Boldo", "Presto", "Boldo", "Presto"].map(
        (brand, index) => (
          <div key={index} className="flex items-center gap-2 text-[#0A2640]">
            <Image
              src={`/assets/${brand.toLowerCase()}.png`}
              alt={`${brand} logo`}
              width={23.15972328186035}
              height={33.15789794921875}
            />
            <span className="font-semibold text-base md:text-lg">{brand}</span>
          </div>
        )
      )}
    </section>
  );
}
