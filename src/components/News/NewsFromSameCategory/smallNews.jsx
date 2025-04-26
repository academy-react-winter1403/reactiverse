import React, { useState } from "react";
import { Link } from "react-router-dom";

const SmallNews = ({ imgSrc, detail, title, id }) => {
  return (
    <Link
      to={"/blog/Detail/" + id}
      className="bg-[#F3F4F6] min-h-8 w-68 rounded-3xl *:relative *:bottom-10 mb-10 md:mb-0"
    >
      <img
        src={!imgSrc ? "/newspaper.png" : imgSrc}
        alt="no image"
        className="h-60 w-60 rounded-3xl mx-auto"
      />
      <h3 className="px-5 my-2 text-end overflow-hidden text-ellipsis">
        {title}
      </h3>
      <p className="px-6 py-1 max-h-25 overflow-hidden text-ellipsis">
        {detail}
      </p>
    </Link>
  );
};

export default SmallNews;
