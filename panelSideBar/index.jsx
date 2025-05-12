import React from "react";

import { Link, NavLink } from "react-router";
const SideBar = () => {
  return (
    <div className="absolute w-1/1 md:max-w-90 md:w-3/10 animate-[move_0.5s_1_linear] md:animate-[moveIt_2s_1_linear] duration-1000 md:static top-12 z-20 md:mx-4 h-125 md:block md:h-163 bg-[rgb(243,244,246)] rounded-none md:rounded-xl p-[25px] my-3 dark:bg-black dark:text-white">
      <div className="cursor-pointer h-15 pr-[95px] pt-[10px] mx-auto font-medium whitespace-nowrap text-xl lg:text-2xl  bg-[url(resources/image.png)]  bg-contain bg-no-repeat bg-right block">
        اکادمی سپهر
      </div>
      <Link to="/panel" className="w-1/1 mt-5 mb-5 md:mb-0  text-3xl md:text-base  md:w-25 md:mt-5 cursor-pointer backgroundSize md:backgroundSize  pr-9 md:pr-7 bg-[url(resources/home.png)] bg-no-repeat block bg-right bg-contain">
        پیشخوان
      </Link>
      <Link to="/panel/myCourses" className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base   md:w-29 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path29.png)] bg-no-repeat block bg-right bg-[10px 10px]">
        دوره های من
      </Link>
      <Link to="/panel/tickets" className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base  md:w-23 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path30.png)] bg-no-repeat block bg-right bg-contain">
        تیکت ها
      </Link>
      <Link to="/panel" className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base   md:w-30 cursor-pointer backgroundSize md:backgroundSize my-1 pr-9 md:pr-7 bg-[url(resources/Path31.png)] bg-no-repeat block bg-right bg-contain">
        جزیات حساب
      </Link>
      <Link to="/panel" className="w-1/1 mt-3 mb-5 md:mb-0 text-3xl md:text-base  md:w-15 cursor-pointer backgroundSize md:backgroundSize pr-9 md:pr-7 bg-[url(resources/Path32.png)] bg-no-repeat bg-right block bg-contain">
        خروج
      </Link>
    </div>
  );
};

export default SideBar;
