import React, { useState } from "react";
import { domesticHotels, internationalHotels } from '../data/hotelData.js';

import {
  MapPin,
  Star,
  Bed,
  Wifi,
  Coffee,
  Mountain,
  Waves,
  Building2,
  Eye,
  Plane,
  Heart,
} from "lucide-react";


// Amenity Icon Handler

function AmenityIcon({ label }) {
  const text = label.toLowerCase();

  if (text.includes("wifi")) return <Wifi className="h-4 w-4 text-green-700" />;
  if (text.includes("breakfast")) return <Coffee className="h-4 w-4 text-yellow-600" />;
  if (text.includes("mountain")) return <Mountain className="h-4 w-4 text-blue-600" />;
  if (text.includes("airport")) return <Plane className="h-4 w-4 text-blue-600" />;
  if (text.includes("lake") || text.includes("river") || text.includes("beach"))
    return <Waves className="h-4 w-4 text-blue-400" />;
  if (text.includes("spa")) return <Heart className="h-4 w-4 text-pink-600" />; // replaced Spa with Heart
  if (text.includes("city")) return <Building2 className="h-4 w-4 text-gray-600" />;
  if (text.includes("balcony") || text.includes("view"))
    return <Eye className="h-4 w-4 text-gray-600" />;
    return <Bed className="h-4 w-4 text-gray-500" />;
}


// Component

export default function HotelResortList() {
  const [activeCategory, setActiveCategory] = useState("domestic");
  const currentHotels =
    activeCategory === "domestic" ? domesticHotels : internationalHotels;

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Hotels & Resorts</h2>
          <p className="mt-3 text-gray-600">
            Handpicked stays for every budget and style
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveCategory("domestic")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeCategory === "domestic"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Domestic (India)
            </button>
            <button
              onClick={() => setActiveCategory("international")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeCategory === "international"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentHotels.map((hotel) => (
            <article
              key={hotel.id}
              className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-900/10 overflow-hidden flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-green-700" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {hotel.amenities.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      <AmenityIcon label={a} />
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <p className="text-gray-900">
                    <span className="text-xl font-bold">
                      ₹{hotel.pricePerNight.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-gray-500"> / night</span>
                  </p>
                  <a
                    href="/contact"
                    className="inline-block rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                  >
                    Enquire now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
