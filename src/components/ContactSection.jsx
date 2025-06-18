import React from 'react';

 function ContactSection() {
  return (
    <div className="min-h-screen bg-white py-30 px-2 sm:px-6 lg:px-8 h-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Contact Form */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <form action="https://formspree.io/f/mjkroozq" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
                </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>
</div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className=" h-full">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d714.8846105003473!2d76.30760825033269!3d10.02731286029346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Mall%2C%2034%2F1000%2C%20Old%20NH%2047%2C%20Edappally%20Junction%2C%20Nethaji%20Nagar%2C%20Edappally%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682024!3m2!1d10.0272018!2d76.3076651!5e0!3m2!1sen!2sin!4v1750241013398!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-lg shadow-md min-h-[500px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default ContactSection;