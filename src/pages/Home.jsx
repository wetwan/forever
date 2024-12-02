// import React from 'react'

import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LeastCollection from "../components/LeastCollection";
import NewsLetter from "../components/NewsLetter";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LeastCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
