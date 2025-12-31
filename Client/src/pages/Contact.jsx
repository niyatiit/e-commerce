import React from 'react'
import { Title } from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <Title text1="CONTACT" text2="US" />

        {/* Layout: Image + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          {/* Left Side: Image */}
          <div>
            <img
              src={assets.contact}
              alt="Contact Forever"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side: Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Store</h3>
              <p className="text-gray-700">54709 Willms Station</p>
              <p className="text-gray-700">Suite 350, Washington, USA</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-700">Tel: (415) 555-0132</p>
              <p className="text-gray-700">Email: admin@forever.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Careers at Forever</h3>
              <p className="text-gray-700 mb-3">
                Learn more about our teams and job openings.
              </p>
              <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Letter Box */}
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
