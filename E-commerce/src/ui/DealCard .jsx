import React from "react";
import { Heart } from "lucide-react";

const DealCard = () => {
  return (
    <div className="w-105 bg-white rounded-xl shadow-md p-4 flex gap-4 hover:shadow-lg transition duration-300">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="Dress"
          className="w-40 h-52 object-cover rounded-lg"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md font-semibold">
          50% off
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        
        {/* Top */}
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-sm text-gray-500">Dress</h3>
            <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500" />
          </div>

          <h2 className="text-lg font-semibold mt-1">Stylist Dress</h2>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold">$75.00</span>
            <span className="text-gray-400 line-through text-sm">$150.00</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="font-medium">4.8</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Button */}
        <button className="mt-4 text-sm font-medium text-black flex items-center gap-1 hover:underline">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

export default DealCard;