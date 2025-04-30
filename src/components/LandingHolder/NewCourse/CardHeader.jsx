import React from "react";
import cardImg from "../../../assets/img/Iwu0qZIbijkxQeEVpEu4QYeTYVdZFbnVfjPTGZuE.png";

const CardHeader = ({ img }) => {
  return (
    <div className="w-[85%] h-[200px] relative right-[7%] z-[200]">
      <img
        src={img === null && "Not-set" ? cardImg : img}
        alt="عکس"
        className="rounded-3xl"
      />
    </div>
  );
};

export default CardHeader;
