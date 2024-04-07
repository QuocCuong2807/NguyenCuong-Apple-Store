import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { handleAddToCart } from "../store/action";
import CartContext from "../store/Context";
import { toast } from "react-toastify";

function ProductDetail({ products }) {
  //get product by id
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  //get cartState from context
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <div className="container" style={{ marginTop: 12 }}>
        <h1 className="text-center">Chi tiết sản phẩm</h1>
        <div className="card ">
          <h5 className="card-header text-center">{product.name}</h5>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={product.img} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    <b>Dung lượng:</b> 256GB
                  </p>
                  <p className="card-text">
                    <b>Màu:</b> Xám
                  </p>
                  <div className="d-flex">
                    <p>
                      <b>Giá:</b>
                    </p>
                    <h5
                      className="card-title"
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(product.price)}
                    </h5>
                  </div>

                  <a
                    href="#"
                    className="btn btn-primary "
                    onClick={() => {
                      dispatch(handleAddToCart(product))
                      toast.success(`Đã thêm ${product.name} vào giỏ hàng`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }}
                  >
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
