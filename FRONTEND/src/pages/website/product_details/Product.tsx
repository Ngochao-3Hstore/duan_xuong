import React from "react";
import icons34 from "../../../assets/icons/34.svg";
import icons35 from "../../../assets/icons/35.svg";
import icons36 from "../../../assets/icons/36.svg";
import icons37 from "../../../assets/icons/37.svg";
import icons38 from "../../../assets/icons/38.svg";
import icons39 from "../../../assets/icons/39.svg";
import icons40 from "../../../assets/icons/40.svg";
import icons41 from "../../../assets/icons/41.svg";
import icons42 from "../../../assets/icons/42.svg";
import icons43 from "../../../assets/icons/43.svg";
import { useParams } from "react-router-dom";
import { useProductQuery } from "@/hooks/useProductQuery";

type Props = {};

const Product = (props: Props) => {
  const { id } = useParams();
  const { data: pro, isLoading } = useProductQuery(id!);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="Productdetails">
      <div className="container">
        <div className="Productdetails-full">
          <div className="Productdetails-full-image">
            <div className="Productdetails-full-image__child">
              <a href="">
                <img src={pro.image} alt="" />
              </a>
              <a className="Productdetails-full-image__child__item" href="">
                <img src={pro.image} alt="" />
              </a>
              <a href="">
                <img src={pro.image} alt="" />
              </a>
              <a className="Productdetails-full-image__child__items" href="">
                <img src={pro.image} alt="" />
              </a>
            </div>
            <div className="Productdetails-full-imame__dad">
              <a href="">
                <img
                  src={pro.image}
                  alt=""
                  style={{
                    marginLeft: "31px",
                    width: "423px",
                    height: "500px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="Productdetails-full-content">
            <span className="Productdetails-full-content__title">
              {pro.name}
            </span>
            <br />
            <span className="Productdetails-full-content__price">
              ${pro.price}
            </span>
            <br />
            <img
              src={icons39}
              alt=""
              className="Productdetails-full-content__img "
            />
            <img
              style={{ marginBottom: "-5px" }}
              src={icons40}
              alt=""
              className="Productdetails-full-content__imgs me-2 "
            />
            <span>
              5 Customer Review
            </span>
            <p className="Productdetails-full-content__context mt-3">
              {pro.description}
            </p>
            <div className="Productdetails-full-content__size">
              <span className="Productdetails-full-content__size__title">
                Size
              </span>
              <br />
              <button className="Productdetails-full-content__size__l">
                L
              </button>
              <button className="Productdetails-full-content__size__x">
                XL
              </button>
              <button className="Productdetails-full-content__size__x">
                XS
              </button>
            </div>
            <div className="Productdetails-full-content__color">
              <span className="Productdetails-full-content__color__title">
                Color
              </span>
              <br />
              <button className="Productdetails-full-content__color__Violet" />
              <button className="Productdetails-full-content__color__black" />
              <button className="Productdetails-full-content__color__earthybrown" />
            </div>
            <div className="Productdetails-full-content__Addtocart">
              <div className="Productdetails-full-content__Addtocart__quantity">
                <a
                  className="Productdetails-full-content__Addtocart__quantity__s"
                  href=""
                >
                  -
                </a>
                <span className="Productdetails-full-content__Addtocart__quantity__sss">
                  1
                </span>
                <a
                  href=""
                  className="Productdetails-full-content__Addtocart__quantity__ss"
                >
                  +
                </a>
              </div>
              <button className="Productdetails-full-content__Addtocart__AddToCart">
                <a href="/cart">Add To Cart</a>
              </button>
              <button className="Productdetails-full-content__Addtocart__Compare">
                + Compare
              </button>
            </div>
            <div className="line">
              <hr />
            </div>
            <table className="Productdetails-full-content__table">
              <tbody>
                <tr>
                  <td className="title">SKU</td>
                  <td>
                    <span className="characters">:</span>
                    SS001
                  </td>
                </tr>
                <tr>
                  <td className="title">Category</td>
                  <td>
                    <span className="characters">:</span>Sofas
                  </td>
                </tr>
                <tr>
                  <td className="title">Tags</td>
                  <td>
                    <span className="characters">:</span> Sofa, Chair, Home,
                    Shop
                  </td>
                </tr>
                <tr>
                  <td className="title">Share</td>
                  <td>
                    <span className="characters">:</span>
                    <img src={icons41} />
                    <img className="image" src={icons42} />
                    <img src={icons43} className="img" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
