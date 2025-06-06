import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Company Mission */}
          <div>
            <h3 className="text-lg font-semibold">TravelPilot</h3>
            <p className="mt-4 text-sm text-gray-300">
              TravelPilot is your trusted travel companion. We curate unforgettable experiences, ensuring every journey is smooth, safe, and filled with adventure.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="/tour-package" className="hover:text-white">Tour Packages</a></li>
              <li><a href="/flight-booking" className="hover:text-white">Flight Booking</a></li>
              <li><a href="/hotel-resort" className="hover:text-white">Hotels & Resorts</a></li>
              <li><a href="/car-rental" className="hover:text-white">Car Rentals</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h4>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} TravelPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
