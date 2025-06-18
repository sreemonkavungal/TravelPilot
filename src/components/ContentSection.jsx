import React from 'react';
import HeroImage from '../assets/images/HomeImage2.png'; // Update path if needed

function ContentSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Discover the World with TravelPilot
          </h1>
          <p className="text-lg text-gray-600">
            TravelPilot is your trusted travel companion making every journey smooth, safe, and unforgettable.
          </p>
          <button className="mt-4 inline-block bg-green-600 hover:bg-green-700-pointer text-white font-medium py-3 px-6 rounded-md transition duration-300">
            Explore
          </button>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Travel illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-none bg-transparent"
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
