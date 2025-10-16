import React, { useState } from "react";

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


// ========================
// Amenity Icon Handler
// ========================
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


// ========================
// Hotel Data
// ========================

const domesticHotels = [
  {
    id: "dom-01",
    name: "The Valle by Kondody Hotels",
    location: "Munnar, Kerala",
    rating: 4.8,
    pricePerNight: 12000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507781534.jpg?k=888d565f905ddcb07e82f4dada4e125130a61a84f43b0ab547c8b6d23d25fcef&o=",
    amenities: ["Breakfast", "Free WiFi", "Mountain view"],
  },
  {
    id: "dom-02",
    name: "Savoy - IHCL SeleQtions",
    location: "Ooty, Tamil Nadu",
    rating: 4.7,
    pricePerNight: 16166,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254172471.jpg?k=35d6a8f3e65ca4075db5b1ae12630584370b14e78d8c94520f06bf4043674fac&o=",
    amenities: ["Breakfast", "Free WiFi", "Spa Access"],
  },
  {
    id: "dom-03",
    name: "Sterling Lake Palace",
    location: "Alleppey, Kerala",
    rating: 4.9,
    pricePerNight: 6000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/709541363.jpg?k=974cac45e36a1011a77529eb0d58c23094c14d93c6ce838e87fe2185e04f395b&o=",
    amenities: ["Breakfast", "Free WiFi", "Lake View"],
  },
  {
    id: "dom-04",
    name: "WelcomHeritage Ayatana",
    location: "Ooty , Tamil Nadu",
    rating: 4.8,
    pricePerNight: 19000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/744582868.jpg?k=c377b446e9d2aeca32d6638df7ae61a567b835e48bbe8b9e94aea50a38a5da3d&o=",
    amenities: ["Breakfast", "Free WiFi", "Balcony"],
  },
  {
    id: "dom-05",
    name: "Sterling Kodai Valley",
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.9,
    pricePerNight: 8000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410720414.jpg?k=a1250e54596bc28c0d69cc8dc6e5a69d9f4d2213e94ef651b1f4d11cd498fde5&o=",
    amenities: ["Breakfast", "Free WiFi", "Mountain view"],
  },
  {
    id: "dom-06",
    name: "The Carlton Kodaikanal",
    location: "Kodaikanal , Tamil Nadu",
    rating: 4.6,
    pricePerNight: 19500,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70194531.jpg?k=523780238c8e7afc4d87640ec51884b6a37015f8541f7cba9ed56a932982b719&o=",
    amenities: ["Breakfast", "Free WiFi", "Airport Shuttle"],
  },
  {
    id: "dom-07",
    name: "The Vintage Gulmarg",
    location: "Gulmarg , Jammu and Kashmir",
    rating: 4.7,
    pricePerNight: 8000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/120476414.jpg?k=12f1dfbe1de4e770028d6f0f94fe9ae941c7594ce964c8c464938cd69756800c&o=",
    amenities: ["Breakfast", "Free WiFi", "Mountain view"],
  },
  {
    id: "dom-08",
    name: "The Imperial, New Delhi",
    location: "New Delhi, India",
    rating: 4.8,
    pricePerNight: 35000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610493784.jpg?k=06c17122010402c540c8d7a1e773e06c98eb31639435e0b6e40ab847f26dbc02&o=",
    amenities: ["Breakfast", "Free WiFi", "Palace Tour"],
  },
  {
    id: "dom-09",
    name: "Larisa Resort Manali",
    location: "Manali, India",
    rating: 4.5,
    pricePerNight: 18000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/590915224.jpg?k=e488bec5b7b6d800b34735c22dad09ce8044e066a7c9d1af876e4fdbb5348d40&o=",
    amenities: ["Breakfast", "Free WiFi", "Garden View"],
  },
];

const internationalHotels = [
  {
    id: "int-01",
    name: "Rove Downtown",
    location: "Dubai, UAE",
    rating: 4.9,
    pricePerNight: 20000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506522303.jpg?k=2c408f9d9ec0c7d2f18d01f4d5e75d34869b967c60f5e8bd63e2249741d66d74&o=",
    amenities: ["Breakfast", "Free WiFi", "City View"],
  },
  {
    id: "int-02",
    name: "Kandima Maldives",
    location: "Maldives",
    rating: 4.8,
    pricePerNight: 20000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480981628.jpg?k=ebf2814af2408d663c063ef1bc02fa52137943763f88b0190ee1377cfaf6e9dc&o=",
    amenities: ["Breakfast", "Free WiFi", "Spa"],
  },
  {
    id: "int-03",
    name: "Hotel Clover Asoke",
    location: "Bangkok, Thailand",
    rating: 4.7,
    pricePerNight: 9000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477225536.jpg?k=f9dc83e8365747654fb3415b6f4d0def1673dbbb90b44fb856a1f29abe340980&o=",
    amenities: ["Breakfast", "Free WiFi", "City View"],
  },
  {
    id: "int-04",
    name: "MOV Hotel",
    location: "Kuala Lumpur, Malaysia",
    rating: 4.8,
    pricePerNight: 11000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702755928.jpg?k=55cc6887d2890c6ca6319fdd3c8ba1efe2cadffd24a3023430aa8c79137b2d0c&o=",
    amenities: ["Breakfast", "Free WiFi", "City View"],
  },
  {
    id: "int-05",
    name: "Mandarin Oriental Bangkok",
    location: "Bangkok, Thailand",
    rating: 4.6,
    pricePerNight: 18000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/589374200.jpg?k=27fc70136f5e1d873384dd5f4d2e8603ab0668a07944f9889a3bf7901ef9b35e&o=",
    amenities: ["Breakfast", "Free WiFi", "River View"],
  },
  {
    id: "int-06",
    name: "The St. Regis Bali",
    location: "Bali, Indonesia",
    rating: 4.7,
    pricePerNight: 22000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426599767.jpg?k=eacff6a1dd56b230052cd3585d2945d2b4f8c5dff6e9e0fdc84663403975a190&o=",
    amenities: ["Breakfast", "Free WiFi", "Beach Access"],
  },
  {
    id: "int-07",
    name: "The First Collection",
    location: "Jumeirah Village, UAE",
    rating: 4.8,
    pricePerNight: 12000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/629332746.jpg?k=988c10c58dcb9a22c089198d4be5677756de3236bbdce22e716b2d3971fa19ac&o=",
    amenities: ["Breakfast", "Free WiFi", "Spa"],
  },
  {
    id: "int-08",
    name: "The Oriental Jade Hotel",
    location: "Hanoi, Vietnam",
    rating: 4.9,
    pricePerNight: 23000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508923850.jpg?k=a6549327fca5b6e242376350e3de8b7c4b75fd11e78e3f775a01aa5358c25718&o=",
    amenities: ["Breakfast", "Free WiFi", "City Center"],
  },
  {
    id: "int-09",
    name: "Sala Danang Beach Hotel",
    location: "Danang, Vietnam ",
    rating: 4.7,
    pricePerNight: 8000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=",
    amenities: ["Breakfast", "Free WiFi", "Beach View"],
  },
];

// ========================
// Component
// ========================
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
