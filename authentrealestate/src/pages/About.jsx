import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container justify-center items-center">
      <div className=" mt-5 ml-[100px] items-center">
        <Slider {...sliderSettings}>
          <div>
            <img
              className="w-full h-[700px] object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/house-with-large-porch-large-window_1340-40545.jpg?ga=GA1.1.1223260424.1695521488&semt=ais_ai_generated"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[700px] object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/house-with-green-roof-green-roof_1340-28365.jpg?ga=GA1.1.1223260424.1695521488&semt=ais_ai_generated"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full  h-[700px] object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/blue-house-with-pink-roof-pond-front-it_1340-25943.jpg?ga=GA1.1.1223260424.1695521488&semt=ais_ai_generated"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[700px] object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/house-with-green-roof-green-roof_1340-32080.jpg?ga=GA1.1.1223260424.1695521488&semt=ais_ai_generated"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[700px] object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?ga=GA1.1.1223260424.1695521488&semt=ais_ai_generated"
              alt=""
            />
          </div>
        </Slider>
        <div className="text-center mt-9 ">
          <h1 className="text-violet-800 font-extrabold text-4xl">About Us</h1>
          <h4 className="text-orange-500 font-semibold mt-5">
            <i>Who We Are </i>
          </h4>
          <p className="font-medium text-justify mt-4 p-2">
            <i>
              Real estate has historically been the asset class that has created
              the highest wealth for investors around the world. However, large
              capital investment, specialised investment knowledge, asset
              management capabilities and understanding of market cycles has
              restricted the asset class to institutional investors, ultra high
              net worth individuals, pension and sovereign funds. Property Share
              was founded by a team with deep experience in institutional real
              estate investing and technology with the aim to democratise real
              estate investing for ordinary investors by providing institutional
              quality analysis, asset management and liquidity at much lower
              investment thresholds.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
