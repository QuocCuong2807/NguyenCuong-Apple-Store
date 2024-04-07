import React, { useState } from "react";
import { handleEnterAddress, handleEnterFullName, handleEnterPhoneNumber } from "../../store/action";


function Payment({ props, dispatch }) {


  return (
    <div className="col-md-4 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" novalidate="">
        <div className="row">
          <div className="col mb-3">
            <label for="fullName">Full name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name..."
              value={props.fullName}
              onChange={e => dispatch(handleEnterFullName(e.target.value))}
            />
            <div className="invalid-feedback"> Valid first name is required. </div>
          </div>
          
        </div>

        <div className="mb-3">
          <label for="phoneNumber">
            Phone number <span className="text-muted"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="(+84)0xxxxx"
            onChange={e => dispatch(handleEnterPhoneNumber(e.target.value))}
            value={props.phoneNumber}
          />
          <div className="invalid-feedback">
            {" "}
            Please enter a valid email address for shipping updates.{" "}
          </div>
        </div>
        <div className="mb-3">
          <label for="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            onChange={e => dispatch(handleEnterAddress(e.target.value))}
          />
          <div className="invalid-feedback">
            {" "}
            Please enter your shipping address.{" "}
          </div>
        </div>
        

        
      </form>
    </div>
  );
}

export default Payment;
