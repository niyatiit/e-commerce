import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <Title text1="CART" text2="TOTAL" />

      <div className="flex justify-between text-gray-700">
        <p className="font-medium">Sub Total:</p>
        <p>
          {currency} {getCartAmount()}.00
        </p>
      </div>

      <div className="flex justify-between text-gray-700">
        <p className="font-medium">Shipping Fee:</p>
        <p>
          {currency} {delivery_fee}.00
        </p>
      </div>

      <div className="flex justify-between text-black text-lg font-semibold border-t pt-4">
        <p>Total:</p>
        <p>
          {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
        </p>
      </div>


    </div>
  );
};

export default CartTotal;
