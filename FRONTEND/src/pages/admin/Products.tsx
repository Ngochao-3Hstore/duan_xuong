import { useProductQuery } from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const queryClient = useQueryClient();
  const { data: products, isLoading, isError } = useProductQuery();
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      return (
        window.confirm("Bạn chắc chắn muốn xóa không") &&
        (await axios.delete(`http://localhost:8080/api/v1/products/${id}`))
      );
    },
    onSuccess: () => {
      alert("Xoá sản phẩm thành công");
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h5">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              to="/admin/products/add"
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={product.image} alt={product.name} width={50} />
                </td>
                <td>
                  <span>{product.name}</span>
                </td>
                <td>
                  <span>{product.category}</span>
                </td>
                <td>{product.price}</td>
                <td>{product.featured ? "check" : "uncheck"}</td>
                <td>{product.countInStock}</td>
                <td width={200}>
                  <button
                    className="btn btn-danger"
                    onClick={() => mutate(product._id)}
                  >
                    Xoá
                  </button>
                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="btn btn-primary ms-2"
                  >
                    Cập nhật
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
