import Image from "next/image";
import bag_icon from "@/public/assets/Case Minimalistic.svg";
import alx from "@/public/assets/alx.png";
import search from "@/public/assets/search.svg";
import user from "@/public/assets/greenUser.svg";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="text-[12px] lg:text-[16px]">
      {/* ================= TOP BAR ================= */}
      <div className="flex flex-wrap items-center justify-center lg:gap-4 gap-2 bg-[#34967C] h-auto py-5">
        <Image src={bag_icon} alt="bag-icon" />
        <p
          className="text-white text-white leading-tight max-w-[240px] text-left 
                      sm:max-w-none sm:leading-normal"
        >
          Overseas trip? Get the latest information on travel guides
        </p>
        <button className="bg-black text-white rounded-[50px] px-3">
          More Info
        </button>
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="flex flex-wrap-1 items-center justify-center border border-[#E9E9E9] xl:gap-[15rem] lg:gap-5 py-3 gap-3 px-5">
        <Link href="/">
          <Image className="hidden sm:block" src={alx} alt="alx-logo" />
        </Link>

        {/* ============== Form for large and Xlarge ============= */}
        <form className="hidden lg:flex items-center border border-[#E9E9E9] rounded-[50px] px-2">
          {/* Location */}
          <div className="flex flex-col flex-[3] m-2 px-2">
            <label htmlFor="" className="text-xs font-semibold text-black">
              Location
            </label>
            <input
              type="text"
              placeholder="Search for destination"
              className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
            />
          </div>
          {/* check in */}
          <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
            <label htmlFor="" className="text-xs font-semibold text-black">
              Check in
            </label>
            <input
              type="text"
              placeholder="Add date"
              className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
            />
          </div>
          {/* check out */}
          <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
            <label htmlFor="" className="text-xs font-semibold text-black">
              Check out
            </label>
            <input
              type="text"
              placeholder="Add date"
              className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
            />
          </div>
          {/* people */}
          <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
            <label htmlFor="" className="text-xs font-semibold text-black">
              People
            </label>
            <input
              type="text"
              placeholder="Add guest"
              className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
            />
          </div>
          {/* button */}
          <button className="bg-[#FFB700] rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
            <Image src={search} alt="search" />
          </button>
        </form>

        {/*============ Mobile form ================== */}

        <form className="lg:hidden flex flex-wrap-1 justify-center items-center border border-[#E9E9E9] rounded-[50px] pr-1 pl-5 h-[46px] w-[18rem]">
          <div className="">
            <label className="">where to</label>
            <ul className="flex flex-wrap-1 items-center justify-start">
              <li>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Date"
                  className="w-full outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Add guest"
                  className="w-full outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                />
              </li>
            </ul>
          </div>

          {/* button */}
          <button className="bg-[#FFB700] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <Image src={search} alt="search" />
          </button>
        </form>

        <div>
          
          <div className="xl:hidden">
            <button className="">
              <Image src={user} alt="user" className="" />
            </button>
          </div>

          <div className="hidden xl:flex flex-wrap-1 items-center justify-center gap-2 font-medium text-[15px]">
            <button className="bg-[#34967C] rounded-3xl text-white h-[45px] w-[100px]">
              Sign in
            </button>
            <button className="border border-[#E9E9E9] rounded-3xl h-[45px] w-[100px]">
              Sign up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
