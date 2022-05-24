import React from "react";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
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
            Championing technology's role in preparing and empowering the UK for
            what comes next, delivering a better future for people, society.
          </p>
          <button class="btn btn-primary">Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
