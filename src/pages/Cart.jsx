import { Button } from "bootstrap";
import React, { useReducer, useContext, useState } from "react";
import CartList from "../components/cart/CartList";
import Payment from "../components/cart/Payment";
import { handleSubmitCart } from "../store/action";
import CartContext from "../store/Context";
import { Modal } from "react-bootstrap";

function Cart() {
  //get cartState from context
  const { state, dispatch } = useContext(CartContext);

  //modal process cart state
  const [isShowModal, setIsShowModal] = useState(false);

  function handleChangeModalState() {
    setIsShowModal(!isShowModal);
  }

  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <CartList
              props={state}
              dispatch={dispatch}
              onChangeModalState={handleChangeModalState}
            />
            {state.cartList.length > 0 && (
              <Payment props={state} dispatch={dispatch} />
            )}
          </div>
        </div>
      </section>

      <Modal show={isShowModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Xác nhận thông tin đặt hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Thông tin đặt hàng:</h3>
          <p>
            <b>Họ tên:</b> {state.fullName}
          </p>
          <p>
            <b>Số điện thoại:</b> {state.phoneNumber}
          </p>
          <p>
            <b>Địa chỉ:</b>: {state.address}
          </p>
          <h3>Danh sách sản phẩm đặt mua:</h3>
          <ul>
            {state.cartList.map((item) => (
              <li className="d-flex justify-content-between">
                <p>{item.name}</p>
                <p>x: {item.productQuantity}</p>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleChangeModalState}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(handleSubmitCart(state));
              setIsShowModal();
            }}
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
