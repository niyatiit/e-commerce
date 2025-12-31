import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, products, currency, updateQuantity ,navigate} =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="px-4 md:px-20 py-10">
      <Title text1="YOUR" text2="CART" />

      <div className="mt-10 flex flex-col gap-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr_1fr_1fr_auto] gap-4 items-center border-b pb-6"
            >
              {/* Product Image */}
              <img src={productData.image[0]} alt="" className="w-20 md:w-24" />

              {/* Product Details */}
              <div className="flex flex-col gap-1">
                <p className="font-medium">{productData.name}</p>
                <div className="flex items-center gap-3 text-sm">
                  <p className="font-semibold">
                    {currency}
                    {productData.price}
                  </p>
                  <span className="px-2 py-1 border text-xs">{item.size}</span>
                </div>
              </div>

              {/* Quantity */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="w-16 border px-2 py-1 text-center outline-none"
              />

              {/* Total Price */}
              <p className="font-medium">
                {currency}
                {productData.price * item.quantity}
              </p>

              {/* Delete Icon */}
              <button
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="text-gray-500 hover:text-black text-xl cursor-pointer"
              >
                🗑
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Total */}
      <div>
        <CartTotal />
        <div className="flex justify-center mt-6">
          <button onClick={()=>navigate('/place-order')} className="px-6 bg-black text-white py-3 hover:bg-gray-800 transition duration-300 cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
