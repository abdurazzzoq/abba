import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Cooperation from "../Cooperation/Cooperation";

import Main from "../Main/Main";
import ReceptSlider from "../ReceptSlider/ReceptSlider";

import Slider from "../Slider/Slider";
import BetterSides from "../BetterSides/BetterSides";
import Question from "../Question/Question";


const Home = () => {
  return (
    <div className="">
      <div className="">
        
        <Main />
        <Slider />
        <ReceptSlider />
        <AboutUs />
        {/* <Cooperation /> */}
        <BetterSides />
        <Question />
      </div>
    </div>
  );
};

export default Home;
