import React, { useContext, useState } from "react";
import { Title } from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext)

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Delivery Information */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Title text1="DELIVERY" text2="INFORMATION" />
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="col-span-2 border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Street"
              className="col-span-2 border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="State"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Country"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Phone"
              className="col-span-2 border rounded-lg p-3 focus:ring-2 focus:ring-black"
            />
          </form>
        </div>

        {/* Right Side: Cart Total */}
        <div className="space-y-8">
          <CartTotal />

          {/* Payment Method */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Title text1="PAYMENT" text2="METHOD" />
            <div className="mt-6 space-y-4">
              <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    onClick={() => setMethod("stripe")}
                    type="radio"
                    name="payment"
                    value="stripe"
                    className={`accent-black ${
                      method === "stripe" ? "bg-blue-500" : "none"
                    } `}
                  />
                  <span className="font-medium">Stripe</span>
                </div>
                <span className="text-sm text-gray-500">
                  Secure online payment
                </span>
              </label>
              <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    onClick={() => setMethod("razorpay")}
                    type="radio"
                    name="payment"
                    value="razorpay"
                    className={`accent-black ${
                      method === "razorpay" ? "bg-black" : "none"
                    }  `}
                  />
                  <span className="font-medium">Razorpay</span>
                </div>
                <span className="text-sm text-gray-500">
                  Fast UPI & card options
                </span>
              </label>
              <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    onClick={() => setMethod("cod")}
                    type="radio"
                    name="payment"
                    value="cod"
                    className={`accent-black ${
                      method === "cod" ? "bg-black" : "none"
                    }`}
                  />
                  <span className="font-medium">Cash on Delivery</span>
                </div>
                <span className="text-sm text-gray-500">
                  Pay when you receive
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate("/orders")}
                className="px-6 bg-black text-white py-3 hover:bg-gray-800 transition duration-300 cursor-pointer"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
