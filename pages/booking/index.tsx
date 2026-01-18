import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from '@/public/assets/Arrow Left.svg'
import { useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="h-[80px] bg-[#F8FAFC] w-full flex flex-wrap items-center gap-3">
        <Link href='/'><Image src={arrowLeft} alt="arrow" className="ml-[8rem]"/></Link>
        <h1 className="text-[#34967C] font-bold text-[25px] hover:border-[#34967C] border-b-2 py-5">Booking</h1>
      </div>
      <div className=" container mx-auto p-6 grid grid-cols-2 gap-6">
        <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
        <OrderSummary bookingDetails={formData}/>
      </div>
    </div>
  );
}
