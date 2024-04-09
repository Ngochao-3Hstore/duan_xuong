import React from "react";
import { Link } from "react-router-dom";
import sanpham1 from "../../../assets/icons/14.svg";
import sanpham2 from "../../../assets/icons/15.svg";
import sanpham3 from "../../../assets/icons/16.svg";
import sanpham4 from "../../../assets/icons/30.svg";
import shave from "../../../assets/icons/shave.svg";
import shave2 from "../../../assets/icons/shave2.svg";
import shave3 from "../../../assets/icons/shave3.svg";
import { useProductQuery } from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "@/hooks/useStorage";
import axios from "axios";

type newProps = {
  featured?: boolean;
};

const New = ({ featured }: newProps) => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { data: products, isLoading, isError } = useProductQuery();
  const { mutate } = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string; quantity: number }) => {
        const { data } = await axios.post(`http://localhost:8080/api/v1/carts/add-to-cart`, {
            userId,
            productId,
            quantity,
        });
        return data;
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["cart", userId],
        });
    },
});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  // Kiểm tra xem products có tồn tại và là một mảng không trước khi filter
  const filteredProducts =
    products && Array.isArray(products)
      ? products.filter((product: IProduct) => product.featured == true)
      : products;
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="section-body">
          <div className="product-list">
            {filteredProducts.map((pro: IProduct, index: number) => (
              <div key={index} className="product-item">
                <div className="product-image">
                  <img src={pro.image} alt="" className="product__thumbnail" />
                  <span className="product-sale">{pro.discount}%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="" className="product__link">
                      {pro.name}
                    </Link>
                  </h3>
                  <Link to="" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">${pro.price}</span>
                    <span className="product-price__old mt-1">
                      <del>${pro.price - pro.price * (pro.discount / 100)}</del>
                    </span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="product-action__quickview border-0 ">
                    <Link
                      className="product-action__quickview__item"
                      to={`/detail/${pro._id}`}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="product-action__addtocart border-0">
                    <Link
                      className="product-action__quickview__item"
                      to={`/cart`} onClick={() => mutate({ productId: pro._id, quantity: 1 })}
                    >
                      Add To Cart
                    </Link>
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">
                      <img src={shave} alt="" />
                    </span>
                    <span className="product-action__compare px-2">
                      <img src={shave2} alt="" />
                    </span>
                    <span className="product-action__like">
                      <img src={shave3} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/*-----------------------------------------End .product-item----------------------------------------*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
