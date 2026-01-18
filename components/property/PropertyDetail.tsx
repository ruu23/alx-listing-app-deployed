import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{
  property: PropertyProps;
  part?: "top" | "bottom";
}> = ({ property, part }) => {
  return (
    <div className="mx-auto text-[22px]">
      {/* top part */}
      {(part === "top" || !part) && (
        <>
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-[50px] font-bold">{property.name}</h1>
              <div className="flex items-center space-x-5 mt-3">
                <span className="font-semibold flex flex-wrap gap-2">
                  <img src="/assets/Star.svg" alt="stars" />
                  {property.rating}
                  <span className="text-gray-400 font-normal">
                    ({property.reviews.length} reviews)
                  </span>
                </span>

                <span className="text-gray-400 flex flex-wrap gap-2">
                  <img src="/assets/location.svg" alt="stars" />
                  {property.address.state}, {property.address.city},{" "}
                  {property.address.country}
                </span>

                <span className="text-gray-400 flex flex-wrap gap-2">
                  <img src="/assets/user.svg" alt="stars" />
                  Mainstream
                </span>
              </div>
            </div>

            {/* buttons section */}
            <div className=" flex flex-wrap justify-between gap-5 items-center font-semibold text-[19px]">
              <button className="border rounded-3xl flex flex-wrap px-4 py-2 gap-2">
                <img src="/assets/heart.svg" alt="" />
                Save
              </button>
              <button className="border rounded-3xl flex flex-wrap px-4 py-2 gap-2">
                <img src="/assets/share.svg" alt="" />
                Share
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="mt-4 grid grid-cols-4 grid-rows-2 gap-2 h-[500px] w-full">
            {/* Big left image */}
            <img
              src={property.image[0]}
              alt={property.name}
              className="col-span-2 row-span-2 w-full h-full object-cover rounded-l-xl"
            />

            {/* Top-right small image 1 */}
            <img
              src={property.image[1]}
              alt={property.name}
              className="col-span-2 w-full h-full object-cover rounded-tr-xl"
            />

            {/* Top-right small image 2 */}
            <img
              src={property.image[2]}
              alt={property.name}
              className="col-span-1 w-full h-full object-cover"
            />

            {/* Bottom-right wide image */}
            <img
              src={property.image[3]}
              alt={property.name}
              className="col-span-1 w-full h-full object-cover rounded-br-xl"
            />
          </div>

          {/* villa details */}

          <div className="flex flex-wrap items-center gap-5 mt-5 pb-5 font-medium text-[12px]">
            <div className="flex flex-wrap items-center gap-1 border rounded-3xl px-4 py-2">
              <img src="/assets/bed.svg" alt="bed" />
              Bedrooms
            </div>
            <div className="flex flex-wrap items-center gap-1 border rounded-3xl px-4 py-2">
              <img src="/assets/bathtub.svg" alt="bathtub" />
              Bathroom
            </div>
            <div className="flex flex-wrap items-center gap-1 border rounded-3xl px-4 py-2">
              <img src="/assets/people.svg" alt="people" />
              2-4 guests
            </div>
          </div>
        </>
      )}

      {/* Bottom part */}
      {(part === "bottom" || !part) && (
        <>
          <div className=" border-b py-10">
            {/* Tabs */}
            <div className="flex flex-wrap justify-between items-center text-gray-400 font-medium text-[20px] space-x-[50px] border-b border-t pt-7">
              <div className="space-x-[50px]">
                <button className="text-[#34967C] border-b-2 border-[#34967C] font-semibold pb-3">
                  Description
                </button>
                <button className="hover:text-[#34967C] hover:border-b-2 hover:font-semibold border-[#34967C] pb-3">
                  What we offer
                </button>
                <button className="hover:text-[#34967C] hover:border-b-2 hover:font-semibold border-[#34967C] pb-3">
                  Reviews
                </button>
                <button className="hover:text-[#34967C] hover:border-b-2 hover:font-semibold border-[#34967C] pb-3">
                  About host
                </button>
              </div>
              <span className="pb-3">Published July 01, 2024</span>
            </div>
            {/* description */}
            <div className="pr-5">
                <p className="font-medium mt-10 pb-10">{property.description}</p>
                  {/* space */}
                  <div className="font-medium">
                    <h1 className="font-bold">The space</h1>
                    <p>BEDROOM & BATHROOM</p>
                    <p>{property.space}</p>
                    
                    <button className="text-[#34967C] flex felx-wrap justify-between gap-3 mt-4">Read more <img src="/assets/green-arrow.svg" alt="" /></button>
                    
                  </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="border-b mt-10">
            <h2 className="text-[30px] font-semibold">What this place offers</h2>
            <p>Each home is fully equipped to meet your needs, with ample space and privacy.</p>
            <ul className="grid grid-cols-2 gap-5 text-[27px] py-10">
              {property.category.map((amenity, index) => (
                <li key={index} className="p-2 flex flex-wrap items-center gap-3">
                  <img src={amenity.icon} alt={amenity.name} />{amenity.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyDetail;
