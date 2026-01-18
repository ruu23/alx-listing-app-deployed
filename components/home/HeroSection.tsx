import Image from "next/image";
import Hero from "@/public/assets/Hero.svg";

export default function HeroSection() {
  return (
    <section className="px-6 md:px-10 mt-4">
      <div className="relative w-full h-[220px] md:h-[320px] lg:h-[430px] overflow-hidden rounded-3xl">
        {/* image */}
        <Image
          src={Hero}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        {/* dark overlay */}
        <div className="absolute " />

        {/* centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Find your favorite <br className="hidden md:block" />
            place here!
          </h1>
          <p className="text-white/90 mt-3 text-sm md:text-base">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
