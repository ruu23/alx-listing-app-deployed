import axios from "axios";
import { useState, useEffect } from "react";
import type { Review } from "@/interfaces"; 
import Image from "next/image";

type Props = {
  propertyId: string | number;
  rating: number;
};

const ReviewSection = ({ propertyId, rating }:Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
  return (
    <div className="mt-10 border-b">
      <h3 className="text-[30px] font-semibold">
        <span className="font-semibold flex flex-wrap gap-2">
          <Image src="/assets/Star.svg" alt="stars" />
          {rating}
          <span className="text-gray-400 font-normal">
            ({reviews.length} reviews)
          </span>
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-10 my-5">
        {reviews.map((review, index) => (
          <div key={index} className="pb-4 mb-4">
            <div className="flex items-center">
              <Image
                src={review.avatar}
                alt={review.name}
                className="rounded-full mr-4 mb-4"
              />
              <div>
                <p className="font-semibold text-[27px]">{review.name}</p>
                <p className="font-semibold text-[20px] text-gray-400">{review.period}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 font-semibold">
              <p className="">{review.date}</p>
              <p className="text-gray-400">• {review.tripType}</p>
            </div>
            <p className="text-[19px]">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
