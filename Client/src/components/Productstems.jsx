import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Productstems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      className="block group"
    >
      <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64">

        {/* Image */}
        <img 
          src={image} 
          alt="product" 
          className="h-48 w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />

        {/* Name */}
        <p className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-black">
          {name}
        </p>

        {/* Price */}
        <p className="text-gray-600 font-medium">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default Productstems;
