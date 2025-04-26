import React, { useEffect, useState } from "react";
import SmallNews from "./NewsFromSameCategory/smallNews";
import { getNewsFromSameCategory } from "../../core/services/api/getNewsFromSameCtegory";
import { useParams } from "react-router-dom";

const NewsFromSameCategory = ({ data }) => {
  return (
    <>
      <p className="mt-20 mb-15 text-end mr-4"> اخبار مشابه</p>
      <div className="flex flex-wrap md:flex-row justify-center text-center md:flex-nowrap gap-3">
        {data.map(({ title, miniDescribe, id }, key) => {
          return (
            <SmallNews id={id} key={key} title={title} detail={miniDescribe} />
          );
        })}
      </div>
    </>
  );
};

export default NewsFromSameCategory;
