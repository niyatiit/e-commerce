import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Title text1="MY" text2="ORDERS" />

          <div className="mt-8 space-y-6">
            {products.slice(1, 4).map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                
                {/* Product Image */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-md border"
                />

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p>{currency} {item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                    <p>Date: 07, Jan, 2026</p>
                  </div>

                  <p className="text-sm text-green-600 font-medium mt-2">Status: Ready to ship</p>
                </div>

                {/* Track Button */}
                <button className="mt-4 md:mt-0 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                  Track Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
