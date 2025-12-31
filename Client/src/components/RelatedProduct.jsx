import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Title} from "../components/Title"
import Productstems from './Productstems'

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      let productCopy = products.slice()

      productCopy = productCopy.filter(
        (item) => item.category === category
      )

      productCopy = productCopy.filter(
        (item) => item.subCategory === subCategory
      )

      setRelated(productCopy.slice(0, 4))
      // console.log(productCopy.slice(0, 4))
    }
  }, [products, category, subCategory])

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-4">Related Products</h2> */}
      <Title text1="Related" text2="Products"/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((item,index) => (
          <Productstems key={index} id={item._id} name={item.name} price={item.price} image={item.image[0]} ></Productstems>
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
