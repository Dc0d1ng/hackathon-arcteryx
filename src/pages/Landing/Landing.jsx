import React from "react";
import background from "../../assets/images/background.png";
import background2 from "../../assets/images/background2.png";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <img src={background} />
      <img src={background2} />
    </>
  );
};

export default landing;
