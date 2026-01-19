import React, { useEffect, useState } from "react";
import { backendURL, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log("error :------ ", error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) =>{
    try{
      const response = await axios.post(backendURL+'/api/product/remove',{id},{headers:{token}})

      if(response.data.message)
      {
        toast.success(response.data.message)
        await fetchList()
      }
      else
      {
        toast.error(response.data.message)
      }
    }
    catch(error)
    {
      console.log("error :----- ",error)
    }
  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      <div className="flex-1 ml-56">
        {/* Navbar */}
        {/* <Navbar setToken={setToken} /> */}

        {/* Content */}
        <div className="pt-20 px-10">
          <h2 className="text-2xl font-semibold mb-6">All Products List</h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b text-sm font-medium text-gray-600">Image</th>
                  <th className="py-3 px-4 border-b text-sm font-medium text-gray-600">Name</th>
                  <th className="py-3 px-4 border-b text-sm font-medium text-gray-600">Category</th>
                  <th className="py-3 px-4 border-b text-sm font-medium text-gray-600">Price</th>
                  <th className="py-3 px-4 border-b text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b">
                    <td className="py-3 px-4">
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-gray-700">{item.category}</td>
                    <td className="py-3 px-4 text-gray-700">{currency}{item.price}</td>
                    <td onClick={()=>removeProduct(item._id)} className="py-3 px-4 text-red-500 font-bold cursor-pointer">X</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
