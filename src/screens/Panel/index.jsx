import React, { useEffect, useRef, useState } from "react";

//import mediaQuery from "../../core/utils/mediaQuery.utils";
import { Outlet } from "react-router";
import AccountBtn from "../../components/panel/AccountButton"
import DarkModeBtn from "../../components/panel/DarkModeBtn"
import HamburgerBtn from "../../components/common/responsiveBtn"
const Panel = ({ name }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // useEffect(() => {
  //   mediaQuery(
  //     "(min-width:768px)",
  //     () => {
  //       setIsSideBarOpen(true);
  //     },
  //     () => {
  //       setIsSideBarOpen(false);
  //     }
  //   );
  // }, []);
  return (
    <div className="flex flex-row flex-nowrap w-1/1">
      {isSideBarOpen && <SideBar />}
      <div className=" md:w-69/100 mt-5 w-1/1">
        <HamburgerBtn
          isOpen={isSideBarOpen}
          setOpen={setIsSideBarOpen}
          className="md:hidden w-8 h-8 bg-contain bg-no-repeat cursor-pointer relative bottom-2"
        />
        <Welcome personName={name} />
        <AccountBtn className="float-left ml-1 cursor-pointer" />
        <DarkBtn className="float-left ml-2 cursor-pointer" />
        <Outlet />
      </div>
      
    </div>
  );
};

export default Panel;
