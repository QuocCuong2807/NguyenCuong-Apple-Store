import React from "react";
import { useContext, useState } from "react";
import CartContext from "./store/Context";
import Header from "./components/Shared/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import { bestSellerType, allProduct } from "./data/data";
import Cart from "./pages/Cart";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const productsByType = bestSellerType.map((item) => item.products);
  //const newProducts = productsByType.flatMap(row => row)

  const { state, dispatch } = useContext(CartContext);

  //modal login state
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);

  //modal register state
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false);

  //handle show/hide login modal
  function handleChangeLoginModalState() {
    setIsShowLoginModal(!isShowLoginModal);
  }

  function handleChangeRegisterModalState() {
    setIsShowRegisterModal(!isShowRegisterModal);
  }
  return (
    <div>
      <Header
        onChangeLoginModalState={handleChangeLoginModalState}
        onChangeRegisterModalState={handleChangeRegisterModalState}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home bestSellerType={bestSellerType} />}
        />
        <Route path="/product" element={<Product />} />
        <Route
          path="/ProductDetail/:id"
          element={<ProductDetail products={allProduct} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Modal show={isShowLoginModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleChangeLoginModalState}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              toast.warn("🦄 Đợi ôn lại Spring cái đã", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              handleChangeLoginModalState();
            }}
          >
            Login
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isShowRegisterModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Re-Enter Password
            </label>
            <div class="col-sm-10">
              <input
                type="re-enter your password"
                class="form-control"
                id="inputPassword"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleChangeRegisterModalState}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              toast.warn("🦄 Đợi ôn lại Spring cái đã", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              handleChangeRegisterModalState();
            }}
          >
            Login
          </button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
