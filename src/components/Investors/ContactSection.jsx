// components/ContactSection.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Let's Talk About <span className="text-amber-500">Your<br /> Next Investment</span></h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Pretium est aliquet eu
            tortor vel. Leo justo amet duis nulla in dictumque dictumst
            fringilla. Nulla volutpat id consequat quis. Ut et integer
            fringilla nulla dignissim. Vitae eu venenatis adipiscing sed nam
            pretium quis massa ac. Neque not congue.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700">+1234556813</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700">+1234556813</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700">example@gmail.com</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Get latest email by subscribe our newsletter</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">End of day stock price</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">SEC Filings</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">E-Events</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">Press Releases</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">Presentations</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-amber-500" />
              <span className="text-sm">Weekly Summary</span>
            </label>
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-3/4 px-4 py-2 border border-gray-200 rounded-md"
            />
          </div>
          <button className="w-1/4 bg-amber-400 text-white py-2 rounded-md hover:bg-amber-500 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

