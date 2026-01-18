import Image from "next/image";
import rooms from "@/public/assets/living-room 1.svg";
import mansion from "@/public/assets/mansion 1.svg";
import countryside from "@/public/assets/farm 1.svg";
import villa from "@/public/assets/villa 1.svg";
import Tropical from "@/public/assets/palm-tree 1.svg";
import New from "@/public/assets/key-chain 1.svg";
import pool from "@/public/assets/swimming-pool 1.svg";
import beach from "@/public/assets/vacations 1.svg";
import island from "@/public/assets/island (1) 1.svg";
import camping from "@/public/assets/tent 1.svg";
import apartment from "@/public/assets/apartment 1.svg";
import house from "@/public/assets/home 1.svg";
import lakefront from "@/public/assets/cottage 1.svg";
import farmHouse from "@/public/assets/barn 1.svg";
import treehouse from "@/public/assets/treehouse (1) 1.svg";
import cabins from "@/public/assets/cabin 1.svg";
import castles from "@/public/assets/castle-tower 1.svg";
import lakeside from "@/public/assets/farm 1.svg";
import Link from "next/link";
import PropertyPage from "@/pages/property/[id]";

const Navbar: React.FC = () => {
  return (
    <div className="relative">
      {/* Left fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      <div className="flex items-center gap-8 xl:gap-10 py-5 pl-[3rem] text-[#616161] overflow-x-auto scrollbar-hide">
        {[
          { img: rooms, label: "Rooms" },
          { img: mansion, label: "Mansion" },
          { img: countryside, label: "Countryside" },
          { img: villa, label: "Villa" },
          { img: Tropical, label: "Tropical" },
          { img: New, label: "New" },
          { img: pool, label: "Amazing pool" },
          { img: beach, label: "Beach house" },
          { img: island, label: "Island" },
          { img: camping, label: "Camping" },
          { img: apartment, label: "Apartment" },
          { img: house, label: "House" },
          { img: lakefront, label: "Lakefront" },
          { img: farmHouse, label: "Farm house" },
          { img: treehouse, label: "Tree house" },
          { img: cabins, label: "Cabins" },
          { img: castles, label: "Castles" },
          { img: lakeside, label: "Lakeside" },
        ].map((item, i) => (
          <Link href={`/?category=${encodeURIComponent(item.label)}`} key={i}>
            <button
              className="flex flex-col items-center justify-center text-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black group flex-shrink-0 gap-2 pb-3"
            >
              <Image
                src={item.img}
                alt={item.label}
                className="w-[34px] h-[35px] xl:w-[40px] xl:h-[40px] group-hover:opacity-100 group-hover:brightness-0"
              />
              <p className="text-[12px] font-medium whitespace-nowrap">
                {item.label}
              </p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
