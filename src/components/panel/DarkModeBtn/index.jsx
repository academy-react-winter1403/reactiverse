import React, { useState } from "react";
import darkIt from "../../../core/utils/darkmodeHelper";

const DarkBtn = ({ className = "" }) => {
  const [isDark,setIsDark]=useState(false)
  return (
    <img
      onClick={() => {
        if(!isDark){
          darkIt("dark")
          setIsDark(true);
        }
        else if(isDark){
          darkIt(false);
          setIsDark(false);
        }
      }}
      className={"rounded-fullXl w-8 md:w-10 h-8 md:h-10 " + " " + className}
      src="resources/moon.png"
    />
  );
};

export default DarkBtn;
