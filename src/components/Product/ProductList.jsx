import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../../pages/ProductDetail";

function ProductList({ props }) {
  console.log(props);
  return (
    <div>
      <div className="row">
        {props.map((item) => (
          <div className="col-md-3" key={item.id} style={{ marginTop: 12 }}>
            <Link
              to={`/ProductDetail/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card text-center" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <p className="text-primary">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(item.price)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
