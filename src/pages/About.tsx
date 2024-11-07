import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About DriveMate</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're passionate about providing exceptional car rental experiences with premium vehicles and outstanding service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
          <p className="text-gray-600">All our vehicles undergo regular maintenance and safety checks.</p>
        </div>
        <div className="text-center p-6">
          <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
          <p className="text-gray-600">Experience luxury with our premium fleet and personalized service.</p>
        </div>
        <div className="text-center p-6">
          <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Our customer support team is always ready to assist you.</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2020, DriveMate has grown to become a leading car rental service provider. 
          We started with a simple mission: to make car rental easy, affordable, and enjoyable for everyone.
        </p>
        <p className="text-gray-600">
          Today, we serve thousands of satisfied customers with a fleet of premium vehicles and 
          continue to expand our services to meet the evolving needs of our clients.
        </p>
      </div>
    </div>
  );
}