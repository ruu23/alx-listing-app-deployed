import Image from "next/image";

const OrderSummary: React.FC<{ bookingDetails: any }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="mt-4">
      <Image
        src="/assets/booking.svg"
        alt="Property"
        className="object-cover rounded-md"
        width={540}
        height={607}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <div className="font-semibold flex flex-wrap gap-2 py-2">
          <img src="/assets/Star.svg" alt="stars" />
          <p>
            4.76 <span className="text-gray-500">(345 reviews)</span>
          </p>
        </div>
        <p className="text-sm text-gray-500">
          <span className="bg-gray-100 rounded p-1">{bookingDetails.startDate}</span>  
          <span className="bg-gray-100 rounded p-1 ml-3">{bookingDetails.totalNights} Nights</span>
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between font-semibold ">
        <p className="text-gray-500">Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p className="text-gray-500">Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="text-md">Grand Total</p>
        <p className="font-bold text-lg">${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
