import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiSafe2Fill } from "react-icons/ri";
import { MdLocalOffer, MdOutlineSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <div className="text-white -mt-20 mb-20 z-50 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 gap-3">
      <div className="flex flex-col justify-center items-center border rounded-xl gap-3 py-5 bg-base-100 bg-gradient-to-r from-[#2b0a37] to-accent">
        <FaShippingFast className="text-7xl mx-3 text-[#2b0a37]" />

        <div className="text-center">
        <h3 className="text-lg font-bold">Free Shipping</h3>
        <h5 className="text-sm">For Orders From $50</h5>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border rounded-xl gap-3 py-5 bg-base-100 bg-gradient-to-r from-[#2b0a37] to-accent">
        <MdOutlineSupportAgent className="text-7xl mx-3 text-[#2b0a37]" />

        <div className="text-center">
        <h3 className="text-lg font-bold">Support 24/7</h3>
        <h5 className="text-sm">Call us anytime</h5>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border rounded-xl gap-3 py-5 bg-base-100 bg-gradient-to-r from-[#2b0a37] to-accent">
        <RiSafe2Fill className="text-7xl mx-3 text-[#2b0a37]" />

        <div className="text-center">
        <h3 className="text-lg font-bold">100% Safety</h3>
        <h5 className="text-sm">Only secure payments</h5>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border rounded-xl gap-3 py-5 bg-base-100 bg-gradient-to-r from-[#2b0a37] to-accent">
        <MdLocalOffer className="text-7xl mx-3 text-[#2b0a37]" />

        <div className="text-center">
        <h3 className="text-lg font-bold">Hot Offers</h3>
        <h5 className="text-sm">Discounts up to 90%</h5>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
