import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import Productstems from "../components/Productstems";

const Collection = () => {
  const { products ,search , showSearch  } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const[sortType , setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(search){
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if(subCategory.length > 0)
    {
      productsCopy = productsCopy.filter((item) => 
        subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () =>{
    let fpcopy = filterProducts.slice();

    switch(sortType){
      case 'low-high' : 
      setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)))
      break;

      case 'high-low' :
        setFilterProducts(fpcopy.sort((a,b)=> (b.price - a.price)))
        break;

      default :
      applyFilter();
      break;

    }
  }
  useEffect(()=>{
    if(showSearch && search){
      applyFilter();
    }
    else{
      setFilterProducts(products)
    }
  },[products , showSearch , search])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search , showSearch]);

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="px-6 py-8 pt-25">
      {/* FILTER TITLE */}
      <h2 className="text-2xl font-semibold md:self-start text-center pb-2">
        FILTERS
      </h2>
      {/* FILTER SECTION */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center md:items-start">
        {/* Categories */}
        <div className="border p-4 w-60">
          <h3 className="font-medium mb-3">CATEGORIES</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Men"} onChange={toggleCategory} />
              Men
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Kids"} onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* Type */}
        <div className="border p-4 w-60">
          <h3 className="font-medium mb-3">TYPE</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"Sweater"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>

        {/* Product Sorting */}
        <div>
          <select onChange={(e) => setSortType(e.target.value)} className="p-4 ">
            <option value={"relavent"}> Sorted By : Relavent </option>
            <option value={"low-high"}> Sorted By : Low To High </option>
            <option value={"high-low"}> Sorted By : High To Low </option>
          </select>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="mt-30">
        <Title text1="ALL " text2="COLLECTIONS"></Title>
        <div className="pt-10 flex justify-around items-center flex-wrap gap-10">
          {filterProducts.map((item, index) => (
            <Productstems
              key={index}
              name={item.name}
              id={item._id}
              image={item.image[0]}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
