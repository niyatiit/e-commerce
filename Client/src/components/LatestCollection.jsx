import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "./Title";
import Productstems from "./Productstems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [lastestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="mt-12 mb-16">

      {/* Title */}
      <Title text1="LATEST" text2="COLLECTION" />

      {/* Products */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8 
          px-4 
          mt-6
        "
      >
        {lastestProducts.map((item, index) => (
          <Productstems
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>

  );
};

export default LatestCollection;
