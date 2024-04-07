import {
  ADD_TO_CART,
  ENTER_ADDRESS,
  ENTER_FULL_NAME,
  ENTER_PHONE_NUMBER,
  MINUS_CART_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  SUBMIT_CART,
} from "./constant";
import { toast } from "react-toastify";

const initState = {
  userId: "",
  fullName: "",
  phoneNumber: "",
  address: "",
  cartList: [],
  itemQuantity: function () {
    return this.cartList.length == 0
      ? 0
      : this.cartList.reduce(
          (total, currentValue) => total + currentValue.productQuantity,
          0
        );
  },
  totalOrderPrice: function () {
    return this.cartList.length == 0
      ? 0
      : this.cartList.reduce(
          (total, currentValue) => total + currentValue.totalPrice(),
          0
        );
  },
};

function reducer(state, action) {
  function checkProductInCart(id) {
    return state.cartList.find((item) => item.id === id);
  }

  switch (action.type) {
    case ADD_TO_CART:
      //find product in cart by id
      const foundProduct = checkProductInCart(action.payload.id);

      //plus found product quantity up to 1 and push again to cart
      if (foundProduct) {
        state.cartList.forEach((element) => {
          if (element.id === foundProduct.id) element.productQuantity++;
        });
        const newState = {
          ...state,
          cartList: state.cartList,
        };
        return newState;
      }
      //add new product to cart if cannot find product in cart
      else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            {
              ...action.payload,
              productQuantity: 1,
              totalPrice: function () {
                return this.price * this.productQuantity;
              },
            },
          ],
        };
      }
    case MINUS_CART_ITEM_QUANTITY:
      //minus found product quantity to 1
      if (action.payload.productQuantity > 1) {
        state.cartList.forEach((element) => {
          if (element.id === action.payload.id) {
            element.productQuantity--;
          }
        });
        const newState = {
          ...state,
          cartList: state.cartList,
        };

        return newState;
      } else {
        return {
          ...state,
          cartList: state.cartList.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    case ENTER_FULL_NAME:
      console.log(action.payload);
      return {
        ...state,
        fullName: action.payload,
      };

    case ENTER_PHONE_NUMBER:
      console.log(action.payload);
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case ENTER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SUBMIT_CART:
      toast.success('🦄 Order success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      return initState;
    default:
      toast.error("Vui lòng nhập chính xác thông tin giao hàng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      });

      return {
        ...state,
      };
  }
}
export { initState };
export default reducer;
