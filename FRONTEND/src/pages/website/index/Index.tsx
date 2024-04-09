import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import New from "./New";
import Shop from "./Shop";
import Blog from "./Blog";
import Services from "./Services";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div>
        {<Banner />}
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        {<New />}
        <div className="container">
          <hr />
        </div>
        {/*------------------------------------------------------End .news------------------------------------------------*/}
        {<Shop />}
        {/*----------------------------------------------End .shop--------------------------------------------*/}
        {<Blog />}
        {/*------------------------------------------------End .blog----------------------------------------------------*/}
        {<Services />}
        {/*------------------------------------------------------------End .services-------------------------------------*/}
      </div>
    </>
  );
};

export default index;
