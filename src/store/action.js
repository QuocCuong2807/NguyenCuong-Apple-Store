import {
  ADD_TO_CART,
  ENTER_ADDRESS,
  ENTER_FULL_NAME,
  ENTER_PHONE_NUMBER,
  MINUS_CART_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  SUBMIT_CART,
} from "./constant";

export const handleAddToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const handleMinusCartItemQuantity = (payload) => ({
  type: MINUS_CART_ITEM_QUANTITY,
  payload,
});

export const handleRemoveCartItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload,
});

export const handleEnterFullName = (payload) => ({
  type: ENTER_FULL_NAME,
  payload,
});
export const handleEnterPhoneNumber = (payload) => {
  const value = payload;
  if (!validateNumber(value)) {
    payload = value.substring(0, value.length - 1);
  }

  return {
    type: ENTER_PHONE_NUMBER,
    payload,
  };
};
export const handleEnterAddress = (payload) => ({
  type: ENTER_ADDRESS,
  payload,
});
export const handleSubmitCart = (payload) => {
    if(validateFullName(payload.fullName) || validateAddress(payload.address) || !validatePhoneNumber(payload.phoneNumber)){
        return {
            type: 'ERROR'
        }
    }
    return {
        type: SUBMIT_CART,
        payload
    }
};

//validate type phone number
function validateNumber(input) {
  const regex = /^\d+$/;
  return regex.test(input);
}

//validate full name
function validateFullName(input) {
    return input.trim() === ''
}
//validate phone number
function validatePhoneNumber(input){
    const regex = /^\d{10}$/;
  return regex.test(input);
}
//validate address
function validateAddress(input) {
    return input.trim() === ''
}