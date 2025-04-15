import React from "react";

const AddTicket = () => {
  return (
    <div className="mt-10 cursor-pointer leading-13 select-none h-20 w-1/1 md:w-73 p-[10px] pr-[100px] relative rounded-2xl bg-[#F3F4F6]">
      <img
        className="bg-blue-400 p-2 w-20 h-20 rounded-2xl absolute right-[10px] top-[-17px]"
        src="/resources/Path30.png"
        alt="noImage"
      />
      <span className="text-lg">افزودن تیکت جدید +</span>
    </div>
  );
};

export default AddTicket;
