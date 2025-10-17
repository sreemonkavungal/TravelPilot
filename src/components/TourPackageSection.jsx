import React, {useState} from "react";

import { domesticPackages, internationalPackages } from '../data/tourData.js';

export default function TourPackageSection() {

    const [activeCategory, setActiveCategory] = useState('domestic');

    const currentPackages = activeCategory === 'domestic' ? domesticPackages : internationalPackages;

 return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-15">
       <div className="max-w-7xl mx-auto">
       <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Tour Packages</h2>
          <p className="mt-3 text-gray-600">Seamless adventures tailored to your budget and style</p>
          </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg">
                    <button
                    onClick={() => setActiveCategory('domestic')}
                    className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeCategory === 'domestic'
                                ? 'bg-green-600 text-white'
                                : 'text-gray-600 hover:text-gray-900'
                                 }`}>
                    Domestic (India)
                    </button>
                    <button
                    onClick={() => setActiveCategory('international')}
                    className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeCategory === 'international'
                                ? 'bg-green-600 text-white'
                                : 'text-gray-600 hover:text-gray-900'
                                 }`}>
                    International
                    </button>
                    </div>
            </div>

       
    
             {/* TourPackages Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                 {currentPackages.map((tour) => (
                <article
                    key={tour.id}
                    className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-900/10 overflow-hidden flex flex-col h-full">
                    <div className="h-48 w-full overflow-hidden">
                        <img
                            src={tour.image}
                            alt={tour.name}
                            className="h-full w-full object-cover"
                             />
                    </div>
                <div className="p-6 flex flex-col flex-1 justify-between">

            {/* Title and Description */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tour.name}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{tour.description}</p>
                </div>

            {/* Enquire Now Button */}
                <div className="mt-6 flex justify-end">
                    <a
                        href="/contact"
                        className="inline-block rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">
                        Enquire now
                    </a>
                </div>
                </div>
                </article>
                 ))}
             </div>


        </div> 
    </section>
 )
}