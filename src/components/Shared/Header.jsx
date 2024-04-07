import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { json, Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/Context";

function Header({onChangeLoginModalState, onChangeRegisterModalState }) {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "#fff" }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: 46 }}>
                <Link
                  className="nav-link"
                  style={{ color: "#fff" }}
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: 46 }}>
                <Link
                  to="/cart"
                  type="button"
                  className="position-relative"
                  style={{
                    marginTop: 8,
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Cart <CiShoppingCart />
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                    style={{ fontSize: 10, marginLeft: 8 }}
                  >
                    {state.itemQuantity()}
                  </span>
                </Link>
              </li>
            </ul>
            <div>
              <button style={{marginRight:12}} type="button" class="btn btn-outline-primary" onClick={() => onChangeLoginModalState()}>
                Đăng nhập
              </button>
              <button type="button" class="btn btn-outline-info" onClick={() => onChangeRegisterModalState()}>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
