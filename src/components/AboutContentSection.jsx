import React from 'react';
import {
  Globe,
  Shield,
  Users,
  Award,
  Heart,
  Target,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';

function AboutContentSection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-10 px-6 sm:px-10 lg:px-20 mt-26">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About TravelPilot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel companion making every journey smooth, safe, and unforgettable.
            We believe that travel should be accessible, enjoyable, and transformative.
          </p>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize travel by making it simple, affordable, and accessible to everyone.
                We believe that travel has the power to transform lives, broaden perspectives, and
                create lasting memories. Our mission is to remove the barriers that prevent people
                from exploring the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted travel companion, where every journey begins
                with confidence and ends with unforgettable memories. We envision a future where
                travel planning is effortless, personalized, and enjoyable for travelers of all
                backgrounds and budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at TravelPilot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                Your security and peace of mind are our top priorities. We partner only with
                verified providers and maintain the highest standards of service.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is centered around our customers' needs and experiences.
                Your satisfaction drives our innovation.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every interaction, from the initial inquiry to
                your safe return home. Quality is never compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind TravelPilot's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Name 1</h3>
              <p className="text-green-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                5+ years in travel industry. Passionate about making travel accessible to everyone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Name 2</h3>
              <p className="text-green-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Expert in travel logistics with a global network of trusted partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Name 3</h3>
              <p className="text-green-600 font-medium mb-3">Customer Experience Lead</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer has an exceptional travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Stats */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-2xl mb-4">
                <Calendar className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4+</h3>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-2xl mb-4">
                <Globe className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Countries Covered</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-2xl mb-4">
                <Star className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600 font-medium">Customer Rating</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-2xl mb-4">
                <MapPin className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-10 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you plan your next unforgettable adventure.
            Get in touch with our travel experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/tour-package"
              className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:border-green-800 hover:text-green-800 transition duration-300"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutContentSection;
