import React, {useState} from "react";

const domesticPackages = [
    {
        id: 'dom-01',
        name:'Kerala Tour Packages',
        image:'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
        description:'Sail through Alleppey’s serene backwaters, stroll Munnar’s tea gardens, and unwind at Kovalam’s golden beaches. Explore Fort Kochi’s colonial charm, experience Kathakali, rejuvenate with Ayurveda, and discover Periyar’s wildlife.',

    },
    {
        id: 'dom-02',
        name:'Kodaikanal Tour Packages',
        image:'https://images.unsplash.com/photo-1692792284356-f80113facd09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Glide across Kodai Lake, trek to Pillar Rocks, and admire Silver Cascade Falls. Stroll Coaker’s Walk and embrace the calm of pine forests and flower-filled gardens.',

    },
    {
        id: 'dom-03',
        name:'Ooty Tour Packages',
        image:'https://plus.unsplash.com/premium_photo-1726711363387-d1b0dcbd0223?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Enjoy scenic toy train rides, lush tea estates, and tranquil lakes. Visit Doddabetta Peak, wander botanical gardens, and relax in cozy cottages amidst the misty Nilgiri hills.',

    },
    {
        id: 'dom-04',
        name:'Kashmir Tour Packages',
        image:'https://images.unsplash.com/photo-1599471921533-551b97dbda13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Enjoy shikara rides on Dal Lake, stroll tulip gardens, and ski in Gulmarg. Visit Srinagar’s Mughal gardens, Pahalgam’s meadows, and Sonamarg’s alpine beauty.',

    },
    {
        id: 'dom-05',
        name:'Delhi Agra Tour Packages',
        image:'https://images.unsplash.com/photo-1732639840670-7321fc3a2c6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331',
        description:'Marvel at the Taj Mahal, explore Red Fort and Qutub Minar, and stroll through Chandni Chowk’s markets. A perfect blend of Mughal heritage and modern vibrancy.',

    },
    {
        id: 'dom-06',
        name:'Manali Tour Packages',
        image:'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        description:'Visit Solang Valley and Rohtang Pass for skiing and adventure, explore Hadimba Temple and Old Manali cafés, and relax by the Beas River amidst apple orchards and pine forests.',

    }
]

const internationalPackages = [
    {
        id: 'int-01',
        name:'Maldives Tour Packages',
        image:'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        description:'Relax in the Maldives’ turquoise waters and overwater villas. Snorkel among vibrant coral reefs, enjoy sunset cruises, unwind on pristine beaches, and indulge in luxurious resorts and spa treatments for the ultimate tropical getaway.',
        
    },
    {
        id: 'int-02',
        name:'Dubai Tour Packages',
        image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Experience Dubai’s blend of modern luxury and Arabian charm. Visit the Burj Khalifa, explore desert safaris, shop in extravagant malls, wander through the historic Al Fahidi district, and enjoy iconic attractions like Palm Jumeirah and Dubai Marina.',
        
    },
    {
        id: 'int-03',
        name:'Thailand Tour Packages',
        image:'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Discover Thailand’s rich culture and natural beauty. Explore Bangkok’s bustling markets, relax on Phuket and Krabi’s sandy beaches, visit Chiang Mai’s temples, and indulge in Thai cuisine, elephant sanctuaries, and vibrant nightlife.',
        
    },
    {
        id: 'int-04',
        name:'Malaysia Tour Packages',
        image:'https://images.unsplash.com/photo-1577931683033-1059552104e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173',
        description:'Experience Malaysia’s diverse charm with Kuala Lumpur’s skyline, Penang’s heritage streets, and Langkawi’s tropical islands. Enjoy cultural festivals, rainforest treks, beautiful beaches, and mouthwatering local cuisine.',
        
    },
    {
        id: 'int-05',
        name:'Bali Tour Packages',
        image:'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Unwind on Bali’s sun-kissed beaches, explore Ubud’s rice terraces, visit ancient temples, and enjoy cultural performances. Adventure seekers can try surfing, trekking, and river rafting, while others indulge in luxury resorts and wellness retreats.',
        
    },
    {
        id: 'int-06',
        name:'Vietnam Tour Packages',
        image:'https://images.unsplash.com/photo-1618165220283-e85246c4171c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        description:'Experience Vietnam’s breathtaking landscapes and rich history. Cruise through Halong Bay, explore Hoi An’s charming streets, wander Hanoi and Ho Chi Minh City, visit terraced rice fields in Sapa, and savor authentic Vietnamese cuisine.',
        
    }
]

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