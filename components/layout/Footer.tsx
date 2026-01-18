import alx from "@/public/assets/alx-footer.svg";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="text-[#CACACA] bg-[#222222] text-[11px] lg:text-[16px]">
      {/* green part */}
      <div className="bg-[#34967C] h-[29px]"></div>

      {/* middle part */}
      <div className="grid xl:grid-cols-2 grid-cols-1 m-10 gap-5">
        <div className="lg:w-[75%]">
          <Image src={alx} alt="alx" className="mb-6 " />
          <p>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 justify-center align-center mt-5 xl:mt-auto">
          <div>
            <h1 className="lg:text-2xl text-[16px] mb-4">Explore</h1>
            <ul className="leading-loose">
              <li>Apartments in Dubai</li>
              <li>Hotels in New York</li>
              <li>Villa in Spain</li>
              <li>Mansion in Indonesia</li>
            </ul>
          </div>
          <div>
            <h1 className="lg:text-2xl text-[16px] mb-4">Company</h1>
            <ul className="leading-loose">
              <li>About us</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>
          <div>
            <h1 className="lg:text-2xl text-[16px] mb-4">Help</h1>
            <ul className="leading-loose">
              <li>Support</li>
              <li>cancel Booking</li>
              <li>Refunds Process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* last part */}
      <div className="border-t border-[#CACACA] xl:grid grid-cols-2 mx-9 py-5 space-y-5 lg:space-y-5 xl:space-y-0 ">
        <p className="text-center lg:text-center xl:text-left">
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details
          <a className="text-[#34967C]" href="#">
            {" "}
            here
          </a>
        </p>

        <div className="flex flex-wrap xl:justify-end justify-center lg:gap-[60px] gap-5 text-center lg:text-center xl:text-right">
          <p>Terms of Service</p>
          <p>Policy service</p>
          <p>Cookies Policy</p>
          <p className="hidden xl:block">Partners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
