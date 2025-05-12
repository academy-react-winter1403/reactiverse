import React from "react";

const HamburgerBtn = ({ className = "", setOpen ,isOpen}) => {
  const onOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <button
      onClick={() => {
        onOpen();
      }}
      className={"bg-[url(resources/hamburgerMenuIco.png)] " + " " + className}
    ></button>
  );
};

export default HamburgerBtn;
