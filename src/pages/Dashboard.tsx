import React from 'react';
import { Car, Calendar, CreditCard, User } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Active Rentals</h3>
            <Car className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">2</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Upcoming Bookings</h3>
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Total Spent</h3>
            <CreditCard className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">$1,234</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Loyalty Points</h3>
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold">450</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Rentals</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((rental) => (
              <div key={rental} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Tesla Model 3</h3>
                  <p className="text-sm text-gray-600">Mar 1, 2024 - Mar 5, 2024</p>
                </div>
                <span className="text-blue-600 font-medium">$396</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Reservations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((reservation) => (
              <div key={reservation} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">BMW 3 Series</h3>
                  <p className="text-sm text-gray-600">Apr 15, 2024 - Apr 20, 2024</p>
                </div>
                <button className="text-red-600 hover:text-red-700 font-medium">Cancel</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}