import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';

const Search = () => {
    const{search  , setSearch , showSearch , setShowSearch} = useContext(ShopContext)
    const location = useLocation();
    const [visible  , setVisible] = useState(false)

    useEffect(()=>{
      console.log(location.pathname)

      if(location.pathname.includes('collection') && showSearch)
      {
        setVisible(true)
      }
      else
      {
        setVisible(false)
      }
    },[location])

  return showSearch  && visible ? (
    <div className="fixed top-15 left-0 w-full bg-white z-50 py-4 shadow-sm">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2">
          
          {/* Search Input */}
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 outline-none text-sm bg-transparent"
          />

          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>

          {/* Close Icon */}
          <button onClick={()=>setShowSearch(false)} className="text-gray-500 text-xl leading-none hover:cursor-pointer ">
            ×
          </button>

        </div>

      </div>
    </div>
  ) : null
}

export default Search