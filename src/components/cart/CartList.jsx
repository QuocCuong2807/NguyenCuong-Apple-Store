import React from "react";
import { Link } from "react-router-dom";
import {
  handleAddToCart,
  handleMinusCartItemQuantity,
  handleRemoveCartItem,
  handleSubmitCart,
} from "../../store/action";

function CartList({ props, dispatch, onChangeModalState }) {
  return (
    <div className="col-8">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
      </div>
      {props.cartList &&
        props.cartList.map((item) => (
          <div className="card rounded-3 mb-4" key={item.id}>
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.img}
                    className="img-fluid rounded-3"
                    alt={item.img}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">{item.name}</p>
                  <p>
                    <span className="text-muted">Color: </span>Grey
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button
                    className="btn btn-link px-2"
                    onClick={() => dispatch(handleMinusCartItemQuantity(item))}
                  >
                    <i className="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value={item.productQuantity}
                    type="number"
                    className="form-control form-control-sm"
                  />

                  <button className="btn btn-link px-2"
                    onClick={() => dispatch(handleAddToCart(item))}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 className="mb-0">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(item.totalPrice())}
                  </h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a
                    href="#!"
                    className="text-danger"
                    onClick={() => dispatch(handleRemoveCartItem(item.id))}
                  >
                    <i className="fas fa-trash fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      <h3>Your cart is empty</h3>
      <div className="card mb-5">
        <div className="card-body p-4">
          <div className="float-end">
            <p className="mb-0 me-5 d-flex align-items-center">
              <span className="small text-muted me-2">Order total:</span>{" "}
              <span className="lead fw-normal">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(props.totalOrderPrice())}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <Link
            to="/product"
            type="button"
            className="btn btn-light btn-block btn-lg"
          >
            Continue Shopping
          </Link>
          {props.totalOrderPrice() > 0 && (
            <button type="button" className="btn btn-warning btn-block btn-lg" onClick={() => onChangeModalState()}>
              Proceed to Pay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartList;
