import {
  Instagram,
  Facebook,
} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-white text-gray-900 ">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 bg-white">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 px-5 md:ml-20">


          
          {/* Column 1: Company Mission */}
          <div>
            <h3 className="text-lg font-semibold">TravelPilot</h3>
            <p className="mt-4 text-sm text-gray-600">
              TravelPilot is your trusted travel companion making every journey smooth, safe, and unforgettable.
            </p>
          </div>



          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="/tour-package" className="hover:text-gray-400">Tour Packages</a></li>
              <li><a href="/flight-booking" className="hover:text-gray-400">Flight Booking</a></li>
              <li><a href="/hotel-resort" className="hover:text-gray-400">Hotels & Resorts</a></li>
              <li><a href="/car-rental" className="hover:text-gray-400">Car Rentals</a></li>
            </ul>
          </div>



          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
              <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>



          {/* Column 4: Social Icons */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Follow Us</h4>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="text-gray-600 hover:text-gray-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" className="text-gray-600 hover:text-gray-400">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} TravelPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
