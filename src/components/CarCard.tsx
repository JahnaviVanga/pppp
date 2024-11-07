import React from 'react';
import { Calendar, Fuel, Settings, Users } from 'lucide-react';

interface CarCardProps {
  image: string;
  name: string;
  price: number;
  transmission: string;
  fuel: string;
  seats: number;
}

export default function CarCard({ image, name, price, transmission, fuel, seats }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-blue-600 font-bold">${price}/day</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Available</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
}