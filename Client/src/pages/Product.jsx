import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(productData);

        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row gap-12">
        {/* LEFT SIDE : IMAGES */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {productData.image?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 border cursor-pointer hover:border-black ${
                  image === item ? "border-black" : "border-gray-300"
                }`}
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="border">
            <img src={image} className="w-[350px] md:w-[450px]" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE : PRODUCT DETAILS */}
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <p className="text-orange-500">★★★★★</p>
            <p className="text-gray-500">(122)</p>
          </div>

          {/* Price */}
          <p className="text-2xl font-medium">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selection */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-3">
              {productData.size.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border text-sm font-medium ${
                    size === item
                      ? "border-black bg-black text-white hover:cursor-pointer"
                      : "border-gray-300 hover:border-black cursor-pointer"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id,size)}
            disabled={!size}
            className="mt-4 bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 disabled:bg-gray-400 cursor-pointer"
          >
            ADD TO CART
          </button>

          <div>
            <p> 100% Original Products. </p>
            <p> Cash on delivery is available on this products. </p>
            <p> Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* DESCRIPTION & REVIEWS SECTION */}
      <div className="mt-16 px-2 md:px-0 ">
        {/* Tabs */}
        <div className="flex border-b">
          <div className="px-6 py-3  text-sm font-medium border-b-2 border-black cursor-pointer">
            Description
          </div>

          <div className="px-6 py-3 text-sm font-medium text-gray-500 cursor-pointer">
            Reviews (122)
          </div>
        </div>

        {/* Content */}
        <div className="border border-t-0 p-6 text-gray-600 text-sm leading-relaxed">
          <p className="mb-4">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence.
          </p>

          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>

        {/* related products only */}
        <RelatedProduct
          category={productData?.category}
          subCategory={productData?.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
