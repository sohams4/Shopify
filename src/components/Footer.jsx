import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              
            
              <Link to="/" className="text-sm block hover:text-orange-500">
                Full Sleeves
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              T-shirts
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                
Polos
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">
CUSTOMER SERVICEE</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                
Contact us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
               
Tracking order
              </Link>
              
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">About Us</h4>
            <div className="space-y-2">
              
              
              <Link to="/" className="text-sm block hover:text-orange-500">
              Frequent questions
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              About us
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Soham Shendre</p>
      </div>
    </footer>
  );
};

export default Footer;