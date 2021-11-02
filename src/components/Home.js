import React from "react";

import "./css/home.css";
import Section from "./Section";
function Home() {
  return (
    <div className='home'>
      <Section
        title='Model S'
        description='Order Online for Tochless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Tochless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Tochless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Tochless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Const Less Than A New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
      />
    </div>
  );
}

export default Home;
