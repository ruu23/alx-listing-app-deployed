import React from "react";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600 mt-1">{property.description}</p>
      <p className="text-indigo-600 font-semibold mt-2">${property.price}</p>
    </div>
  );
}