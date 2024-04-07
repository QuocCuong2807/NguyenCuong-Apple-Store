import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../../pages/ProductDetail";
function BestSeller({ props }) {
  return (
    <div className="container text-center">
      <h3 style={{ marginTop: 12, marginBottom: 12 }}>{props.name}</h3>
      <div className="row">
        {props.products.map((item, index) => (
          <div className="col-md-3" key={index}>
            <Link
              to={`/ProductDetail/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <p className="card-text text-primary">
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

export default BestSeller;
