import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller.toString());
      formData.append("size", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendURL + "/api/product/add",
        formData,
        {headers:{token}}
      );
      // console.log(response.data);

      if(response.data.success)
      {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setPrice('')
        setImage1(null)
        setImage2(null)
        setImage3(null)
        setImage4(null)
      }
      else
      {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("Error: ---", error);
      toast.error(error.message)
    }
  };

  return (
    <div className="pt-25 pl-70 pr-10 w-full pb-5">
      <h2 className="text-2xl font-semibold mb-6">Add New Item</h2>
      <form onSubmit={onSubmitHandler} className="space-y-6">
        {/* <!-- Upload Images --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* <!-- Upload Box 1 --> */}
          <label className="relative w-full h-32 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100">
            {/* <!-- Hidden input --> */}
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            {/* <!-- Image shown --> */}
            <img
              src={
                image1
                  ? URL.createObjectURL(image1)
                  : "https://cdn2.iconfinder.com/data/icons/files-documents-13/128/file_document_extension_upload-42-1024.png"
              }
              className="w-12 h-12 object-contain"
              alt="Upload"
            />
          </label>

          {/* <!-- Upload Box 2 --> */}
          <label className="relative w-full h-32 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <img
              src={
                image2
                  ? URL.createObjectURL(image2)
                  : "https://cdn2.iconfinder.com/data/icons/files-documents-13/128/file_document_extension_upload-42-1024.png"
              }
              className="w-12 h-12 object-contain"
              alt="Upload"
            />
          </label>

          {/* <!-- Upload Box 3 --> */}
          <label className="relative w-full h-32 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <img
              src={
                image3
                  ? URL.createObjectURL(image3)
                  : "https://cdn2.iconfinder.com/data/icons/files-documents-13/128/file_document_extension_upload-42-1024.png"
              }
              className="w-12 h-12 object-contain"
              alt="Upload"
            />
          </label>

          {/* <!-- Upload Box 4 --> */}
          <label className="relative w-full h-32 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <img
              src={
                image4
                  ? URL.createObjectURL(image4)
                  : "https://cdn2.iconfinder.com/data/icons/files-documents-13/128/file_document_extension_upload-42-1024.png"
              }
              className="w-12 h-12 object-contain"
              alt="Upload"
            />
          </label>
        </div>

        {/* <!-- Product Name --> */}
        <div>
          <label className="block font-medium mb-2">Product Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type here"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* <!-- Product Description --> */}
        <div>
          <label className="block font-medium mb-2">Product Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Write content here"
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* <!-- Category & Subcategory --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Product Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Sub Category</label>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Sweater">Sweater</option>
            </select>
          </div>
        </div>

        {/* <!-- Price --> */}
        <div>
          <label className="block font-medium mb-2">Product Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            min="1"
            type="number"
            placeholder="25"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* <!-- Sizes --> */}
        <div>
          <label className="block font-medium mb-2">Product Sizes</label>

          <div className="flex flex-wrap gap-3">
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"],
                )
              }
              className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <p
                className={` ${sizes.includes("S") ? "bg-pink-100 border-pink-500 text-pink-600" : "border-gray-300 text-gray-700 hover:bg-gray-50"} font-medium text-gray-700`}
              >
                S
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"],
                )
              }
              className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <p
                className={` ${
                  sizes.includes("M")
                    ? "bg-pink-100 border-pink-500 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } font-medium text-gray-700`}
              >
                M
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"],
                )
              }
              className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <p
                className={` ${
                  sizes.includes("L")
                    ? "bg-pink-100 border-pink-500 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } font-medium text-gray-700`}
              >
                L
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"],
                )
              }
              className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <p
                className={` ${
                  sizes.includes("XL")
                    ? "bg-pink-100 border-pink-500 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } font-medium text-gray-700`}
              >
                XL
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"],
                )
              }
              className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50"
            >
              <p
                className={` ${
                  sizes.includes("XXL")
                    ? "bg-pink-100 border-pink-500 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } font-medium text-gray-700`}
              >
                XXL
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
          />
          <label className="font-medium">Add to Bestseller</label>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
