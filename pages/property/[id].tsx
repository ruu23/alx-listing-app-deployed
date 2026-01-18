import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { useEffect, useState } from "react";
import { PropertyProps } from "@/interfaces";
import axios from "axios";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async() => {
      try{
        const respone = await axios.get<PropertyProps>(`/properties/${id}`)
        setProperty(respone.data)
      }
      catch(error){
        console.error("Error fetching property details:", error);
      }
      finally{
        setLoading(false)
      }
    }
    fetchProperty()
  }, [id])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="p-11">
      <PropertyDetail property={property} part="top"/>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <PropertyDetail property={property} part="bottom"/>
          <ReviewSection propertyId={property.id} rating={property.rating} />
        </div>
        <div className="col-span-1">
          <div className="sticky top-8">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
