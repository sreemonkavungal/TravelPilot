import React, {useState} from "react";

const domesticPackages = [
    {
        id: 'dom-01',

    }
]

const internationalPackages = [
    {
        id: 'int-01',
        
    }
]

export default function TourPackageSection() {

    const [activeCategory, setActiveCategory] = useState('domestic');

    const currentHotels = activeCategory === 'domestic' ? domesticPackages : internationalPackages;

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
        
        </div> 
    </section>
 )
}