import React from "react";

const Contact = () => {
  return (
    <div className='bg-gray-300 px-10 py-14 '>
      <div className='text-center pb-14 text-primary'>
        <p className='text-xl font-bold'>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn btn-primary">submit</button>
      </div>
    </div>
  );
};

export default Contact;