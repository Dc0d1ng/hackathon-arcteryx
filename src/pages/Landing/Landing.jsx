import React from "react";
import background from "../../assets/images/background.png";
import background2 from "../../assets/images/background2.png";
import { useState } from "react";

const landing = () => {
  const handleClick = () => {
    console.log("you've clicked me!");
  };
  return (
    <>
      <img src={background} alt="top of arcteryx site" onClick={handleClick} />
      <img src={background2} alt="bottom of arcteryx site" />
    </>
  );
};

export default landing;
