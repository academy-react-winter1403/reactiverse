import React from "react";
//import { Link } from "react-router";
import { Link } from "react-router-dom";

const AccountBtn = ({ className="" }) => {
  return (
    <img
      className={
        "rounded-fullXl w-8 md:w-10 h-8 md:h-10 " + " " + className
      }
      src="resources/profile-user.png"
    />
  );
};

export default AccountBtn;
