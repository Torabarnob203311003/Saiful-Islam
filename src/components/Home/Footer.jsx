import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 lg:px-16 opacity-[100%]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-12">
          {/* Company Logo and Address */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={icon}
                alt="Tawun Logo" 
                className="mr-2 w-12 h-12 rounded-full border border-gray-300 p-1"
              />
              {/* <h2 className="font-bold text-xl text-gray-800">TAWUN</h2> */}
            </div>
            <p className="text-gray-600 mb-2">Street name, Area address</p>
            <p className="text-gray-600 mb-4">City name, Country</p>
            <Link to="/contact" className="text-gray-700 font-medium">Contact Us</Link>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/everyday-essentials" className="text-gray-600 hover:text-gray-800">Everyday essentials</Link></li>
              <li><Link to="/category/household" className="text-gray-600 hover:text-gray-800">Household</Link></li>
              <li><Link to="/category/professional" className="text-gray-600 hover:text-gray-800">Professional</Link></li>
              <li><Link to="/category/education" className="text-gray-600 hover:text-gray-800">Education</Link></li>
              <li><Link to="/category/creative" className="text-gray-600 hover:text-gray-800">Creative</Link></li>
              <li><Link to="/category/information-technology" className="text-gray-600 hover:text-gray-800">Information technology</Link></li>
              <li><Link to="/category/specialized" className="text-gray-600 hover:text-gray-800">Specialized</Link></li>
              <li><Link to="/category/commercial" className="text-gray-600 hover:text-gray-800">Commercial</Link></li>
              <li><Link to="/category/tawun-tailored-services" className="text-gray-600 hover:text-gray-800">Tawun Tailored Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Tawun</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-gray-800">How it works</Link></li>
              <li><Link to="/help-support" className="text-gray-600 hover:text-gray-800">Help & support</Link></li>
              <li><Link to="/terms-service" className="text-gray-600 hover:text-gray-800">Terms of service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy policy</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-800">Careers</Link></li>
              <li><Link to="/investors" className="text-gray-600 hover:text-gray-800">Investors section</Link></li>
              <li><Link to="/charity" className="text-gray-600 hover:text-gray-800">Charity & Donations</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-gray-800">Community Forum</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Social media</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>

              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-gray-600">
          <p>© tawun 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
