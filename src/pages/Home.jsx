import React from "react";
import BestSeller from "../components/Home/BestSeller";
import Banner from "../components/Shared/Banner";

export default function Home({bestSellerType}) {
  
  return (
    <div className="">
      <Banner />
      {bestSellerType.map((item, index) => (
        <BestSeller props={item} key={index} />
      ))}
    </div>
  );
}
