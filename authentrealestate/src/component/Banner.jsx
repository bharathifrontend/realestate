import React from "react";
import Search from "./Search.jsx";

const Banner = () => {
  return (
    <section className="bg-white text-black my-40">
      <div className="container my-9 mx-12 flex items-center justify-between py-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us
          </h1>
          <p className="text-lg lg:text-xl mb-8 justify-center space-x-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur saepe deleniti modi, eum tempora ducimus. Nam sint
            labore vitae? Quibusdam ratione corrupti exercitationem, voluptatem
            cumque modi itaque quis fuga a!
          </p>
        </div>
        <div className="md:flex-1 lg:flex justify-end items-end">
          <img
            className="w-full max-w-xl rounded-tl-[120px]"
            src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
            alt="Dream House"
          />
        </div>
      </div>

      <Search />
    </section>
  );
};
export default Banner;
