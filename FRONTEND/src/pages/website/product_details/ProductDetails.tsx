import React from "react";
import SortFilterPrices from "./SortFilterPrices";
import Product from "./Product";
import DescribeProduct from "./DescribeProduct";
import NewDetails from "./NewDetails";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <>
      <div>
        <SortFilterPrices />
        {/*--------------------------------End .SortFilterPrice-----------------------------------------------------*/}
        <Product />
        {/*----------------------------------end Productdetails----------------------------------------------------------------- */}
        <DescribeProduct />
        {/* ---------------------------------end describeProduct-------------------------------------------- */}
        <NewDetails />
        {/*------------------------------------------------------End .news------------------------------------------------*/}
      </div>
    </>
  );
};

export default ProductDetails;
