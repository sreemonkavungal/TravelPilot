import React, { useState } from 'react';
import { MapPin, Star, Bed, Wifi, Coffee } from 'lucide-react';

const domesticHotels = [
  {
    id: 'dom-01',
    name: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    rating: 4.8,
    pricePerNight: 8500,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/713031969.jpg?k=35bce585ebe5cff87dca1db2ec83ad536e258322179ecb3311551734bde042f3&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'City View'],
  },
  {
    id: 'dom-02',
    name: 'The Leela Palace Delhi',
    location: 'New Delhi, India',
    rating: 4.7,
    pricePerNight: 12000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/30785708.jpg?k=c49746cb0af40700e9a3f54ce26f89a2983bfa37e84fe354d66d03ae0ae6a533&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Spa Access'],
  },
  {
    id: 'dom-03',
    name: 'Oberoi Udaivilas',
    location: 'Udaipur, India',
    rating: 4.9,
    pricePerNight: 25000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812893.jpg?k=a034ea2f5c5431b95bedb68ac0aaa9507f6d2ba261a3182554b1dc81b4ab0f52&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Lake View'],
  },
  {
    id: 'dom-04',
    name: 'JW Marriott',
    location: 'Mumbai Sahar, Maharashtra',
    rating: 4.8,
    pricePerNight: 30000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461609208.jpg?k=d566e4150abbc85b0251b27870623b3cefe6b0f601b3d75059a81ee59652db84&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Boat Transfer'],
  },
  {
    id: 'dom-05',
    name: 'The Oberoi Amarvilas',
    location: 'Agra, India',
    rating: 4.9,
    pricePerNight: 35000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/47406117.jpg?k=2c0d45158285df03e79c683ea4a2d04328b4270b0ba1a80175e28f0710f627a2&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Taj Mahal View'],
  },
  {
    id: 'dom-06',
    name: 'ITC Maratha Mumbai',
    location: 'Mumbai, India',
    rating: 4.6,
    pricePerNight: 9500,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/551546107.jpg?k=7e5065c7515135e5444f347889bda374e1693dee7d8df3a14e9f8fc24ff93324&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Airport Shuttle'],
  },
  {
    id: 'dom-07',
    name: 'Evolve Back Resort',
    location: 'Coorg, Karnataka',
    rating: 4.7,
    pricePerNight: 15000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/96977642.jpg?k=2a4748c56431699c05e83788172e0c993e44f01d5d7ac22d932856609bf7c3c8&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Beach Access'],
  },
  {
    id: 'dom-08',
    name: 'Taj Falaknuma Palace',
    location: 'Hyderabad, India',
    rating: 4.8,
    pricePerNight: 28000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181480.jpg?k=8bfc458b703e4447e12f6470f32356ff04208f9aa902dbecb9cfaf708697d30e&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Palace Tour'],
  },
  {
    id: 'dom-09',
    name: 'The Oberoi Bangalore',
    location: 'Bangalore, India',
    rating: 4.5,
    pricePerNight: 11000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31211348.jpg?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Garden View'],
  },
];

const internationalHotels = [
  {
    id: 'int-01',
    name: 'Burj Al Arab',
    location: 'Dubai, UAE',
    rating: 4.9,
    pricePerNight: 45000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/675859513.jpg?k=cbb19bcc2fd1ab8b431d538e96cd0372c4738a46c69d9204d60649dcac98d843&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Marina View'],
  },
  {
    id: 'int-02',
    name: 'Marina Bay Sands',
    location: 'Singapore',
    rating: 4.8,
    pricePerNight: 35000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611268772.jpg?k=eae185c7a8c1fa3526a656ef05f65b32e1b4dfa68bfcc3a06738fb7ea0264f71&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Infinity Pool'],
  },
  {
    id: 'int-03',
    name: 'The Ritz-Carlton Tokyo',
    location: 'Tokyo, Japan',
    rating: 4.7,
    pricePerNight: 28000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/538638940.jpg?k=98b5bdf94718a4f56d5e2bb0fb206298fb512754f8009f5033669421dcb4c9e0&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'City View'],
  },
  {
    id: 'int-04',
    name: 'The Peninsula Hong Kong',
    location: 'Hong Kong',
    rating: 4.8,
    pricePerNight: 32000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/167821082.jpg?k=8b23bd5ce70d047b8bf78d7f57682cb936a8776897ee94cec209ab016559efcb&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Harbor View'],
  },
  {
    id: 'int-05',
    name: 'Mandarin Oriental Bangkok',
    location: 'Bangkok, Thailand',
    rating: 4.6,
    pricePerNight: 18000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/589374200.jpg?k=27fc70136f5e1d873384dd5f4d2e8603ab0668a07944f9889a3bf7901ef9b35e&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'River View'],
  },
  {
    id: 'int-06',
    name: 'The St. Regis Bali',
    location: 'Bali, Indonesia',
    rating: 4.7,
    pricePerNight: 22000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/426599767.jpg?k=eacff6a1dd56b230052cd3585d2945d2b4f8c5dff6e9e0fdc84663403975a190&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Beach Access'],
  },
  {
    id: 'int-07',
    name: 'Four Seasons Sydney',
    location: 'Sydney, Australia',
    rating: 4.8,
    pricePerNight: 38000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227683814.jpg?k=6ea4df5cd0684bf3aa89b0052873caf0bf47e98492fdd91d9e399c7d9121d135&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Harbor View'],
  },
  {
    id: 'int-08',
    name: 'The Langham',
    location: 'London, UK',
    rating: 4.9,
    pricePerNight: 55000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/7401098.jpg?k=433c15190e30b544bf720b962d915dc7c1320a388a7d9ab2392bba67963ff89e&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'City Center'],
  },
  {
    id: 'int-09',
    name: 'The Plaza New York',
    location: 'New York, USA',
    rating: 4.7,
    pricePerNight: 42000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115429401.jpg?k=ba70c2a088e115a6b75d6c79f4100a0a517a310d814f5f14dc2d944c238f5d21&o=',
    amenities: ['Breakfast', 'Free Wi‑Fi', 'Central Park View'],
  },
];

function AmenityIcon({ label }) {
  if (label.toLowerCase().includes('wifi')) return <Wifi className="h-4 w-4" />;
  if (label.toLowerCase().includes('breakfast')) return <Coffee className="h-4 w-4" />;
  return <Bed className="h-4 w-4" />;
}

export default function HotelResortList() {
  const [activeCategory, setActiveCategory] = useState('domestic');

  const currentHotels = activeCategory === 'domestic' ? domesticHotels : internationalHotels;

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Hotels & Resorts</h2>
          <p className="mt-3 text-gray-600">Handpicked stays for every budget and style</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveCategory('domestic')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeCategory === 'domestic'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Domestic (India)
            </button>
            <button
              onClick={() => setActiveCategory('international')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeCategory === 'international'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentHotels.map((hotel) => (
            <article key={hotel.id} className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{hotel.rating}</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-green-700" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {hotel.amenities.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      <AmenityIcon label={a} />
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-gray-900">
                    <span className="text-xl font-bold">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-gray-500"> / night</span>
                  </p>
                  <a href="/contact" className="inline-block rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">
                    Book now
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


