import { v2 as clodinary } from "cloudinary";
import productModel from "../models/product.model.js";
// functio of the add the product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // Upload the All images in the cloudinary cloud
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await clodinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      !size ||
      !bestseller
    ) {
      return res.json({
        suucess: false,
        message: "Please filled all property",
      });
    }

    // console.log(
    //   name,
    //   description,
    //   price,
    //   category,
    //   subCategory,
    //   size,
    //   bestseller
    // );

    // console.log(imagesUrl)

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      size: JSON.parse(size),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product Added Successfully",
    });
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};




// Function for the list of the product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({ success: true, products });
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// function for removinf product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);

    return res.json({
      success: true,
      message: "Product is deleted successfully",
    });
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.json({ success: false, message: "product is not find " });
    }
    const product = await productModel.findById(productId);

    return res.json({ success: true, product });
    
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
