import React from 'react';
import CarCard from '../components/CarCard';

const cars = [
  {
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1600',
    name: 'Tesla Model 3',
    price: 99,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1600',
    name: 'BMW 3 Series',
    price: 89,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600',
    name: 'Mercedes C-Class',
    price: 95,
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
  },
];

export default function Cars() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
}