import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Marina Akter
      </a>
      <a
        href="mailto:marinaakter878@gmail.com"
        className=" text-sm md:text-md hover:text-indigo-500"
      >
        marinaakter878@gmail.com
      </a>
      <p className="text-xs  mt-2 text-gray-500">
        © Marina Akter {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
