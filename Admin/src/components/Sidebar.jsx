import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
     ${
       isActive
         ? "bg-pink-50 text-pink-600"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <aside className="w-56 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#f9fdf9] border-r border-gray-200">
      
      <div className="flex flex-col gap-2 px-3 pt-6">

        <NavLink to="/add" className={linkClass}>
          <span className="text-lg">＋</span>
          <p className="text-sm font-medium">Add Items</p>
        </NavLink>

        <NavLink to="/list" className={linkClass}>
          <span className="text-lg">☑</span>
          <p className="text-sm font-medium">List Items</p>
        </NavLink>

        <NavLink to="/orders" className={linkClass}>
          <span className="text-lg">☑</span>
          <p className="text-sm font-medium">Orders</p>
        </NavLink>

      </div>
    </aside>
  );
};

export default Sidebar;
