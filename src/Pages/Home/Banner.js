import React from "react";
import banner from "../../Assests/Slide/banner.jpg";
import { FaShippingFast } from "react-icons/fa";
import { RiSafe2Fill } from "react-icons/ri";
import { MdLocalOffer, MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div>
        <div
          class="hero min-h-screen"
          style={{
            background: `url(${banner})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="md:max-w-md lg:max-w-lg max-w-xl text-white">
              <h1 class="mb-5 text-6xl font-bold text-white">
                The BD's tehnology trade association
              </h1>
              <p class="mb-5">
                Championing technology's role in preparing and empowering the UK
                for what comes next, delivering a better future for people,
                society.
              </p>
              <Link to="/products" class="btn btn-primary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 m-4">
        <div className="flex items-center border-2">
          <FaShippingFast className="text-7xl mx-3 text-primary" />
          <div>
            <h3 className="text-lg font-bold">Free Shipping</h3>
            <h5 className="text-sm">For Orders From $50</h5>
          </div>
        </div>
        <div className="flex items-center border-2">
          <MdOutlineSupportAgent className="text-7xl mx-3 text-primary" />
          <div>
            <h3 className="text-lg font-bold">Support 24/7</h3>
            <h5 className="text-sm">Call us anytime</h5>
          </div>
        </div>
        <div className="flex items-center border-2">
          <RiSafe2Fill className="text-7xl mx-3 text-primary" />
          <div>
            <h3 className="text-lg font-bold">100% Safety</h3>
            <h5 className="text-sm">Only secure payments</h5>
          </div>
        </div>
        <div className="flex items-center border-2">
          <MdLocalOffer className="text-7xl mx-3 text-primary" />
          <div>
            <h3 className="text-lg font-bold">Hot Offers</h3>
            <h5 className="text-sm">Discounts up to 90%</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
