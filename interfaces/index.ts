export interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Address structure
export interface Address {
  state: string;
  city: string;
  country: string;
}

// Offers structure
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Review {
  avatar: string;
  name: string;
  date: string;
  tripType: string;
  comment: string;
  period: string
}

export interface amenity {
  name:string;
  icon:string;
}

// Main Property interface
export interface PropertyProps {
  id: string | number;
  name: string;
  address: Address;
  rating: number;
  category: amenity[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
  reviews: Review[];
  space: string;
}