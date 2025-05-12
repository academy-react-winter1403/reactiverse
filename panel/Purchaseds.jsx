import React from "react";
import Purchased from "./purchesed/Purchased";

const Purchaseds = () => {
  return (
    <div className="mt-8 *:mt-6 *:m-2 flex flex-row flex-wrap">
      <Purchased purchaseName="مجموع پرداخت ها" payedMoney="999,999" />
      <Purchased purchaseName="دوره های من" payedMoney="999,999" />
      <Purchased purchaseName="مجموع تیکت ها" payedMoney="999,999" />
    </div>
  );
};

export default Purchaseds;
