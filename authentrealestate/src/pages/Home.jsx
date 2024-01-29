import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Banner from "../component/Banner.jsx";
import HouseList from "../component/HouseList";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <HouseList />

      <Footer />
    </div>
  );
};

export default Home;
