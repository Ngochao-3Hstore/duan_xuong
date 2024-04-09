import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BannerShop from "./BannerShop";
import SortFilterPrice from "./SortFilterPrice";
import NewShop from "./NewShop";
import NextPage from "./NextPage";
import Services from "../index/Services";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <div>
        <BannerShop />
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        <SortFilterPrice />
        {/*--------------------------------End .SortFilterPrice-----------------------------------------------------*/}
        <NewShop />
        <NextPage />
        {/*------------------------------------------------------End .news------------------------------------------------*/}
        <Services />
        {/*----------------------------------------------------End .services----------------------------------------*/}
      </div>
    </>
  );
};

export default Shop;
