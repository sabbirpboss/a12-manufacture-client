import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-1 text-white w-full">
      <div className="text-center pb-14 text-[#2a303c]">
        <span className="text-xl font-bold border-b-2 border-accent text-accent pb-1">Contact Us</span>
        <h1 className="text-4xl mt-3">Stay connected with us 😀</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 bg-gradient-to-r from-[#2b0a37] to-accent py-10">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-md"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
          required
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={4}
          required
        />
        <button className="btn btn-accent font-normal">
          SEND US <FaAngleRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
