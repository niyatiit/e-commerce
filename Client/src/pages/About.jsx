import React from "react";
import { assets } from "../assets/assets";
import { Title } from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <Title text1="ABOUT" text2="US" />

        {/* Layout: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
          {/* Left Side: Image */}
          <div>
            <img
              src={assets.about}
              alt="About Forever"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side: Text */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Forever</strong> was born out of a passion for innovation
              and a desire to revolutionize the way people shop online. Our
              journey began with a simple idea: to provide a platform where
              customers can easily discover, explore, and purchase a wide range
              of products from the comfort of their homes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="bg-white py-16 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <Title text1="WHY" text2="CHOOSE US"></Title>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Assurance */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>

            {/* Convenience */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Convenience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>

            {/* Exceptional Customer Service */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Exceptional Customer Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of dedicated professionals is here to assist you every
                step of the way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <NewsLetterBox/>
    </div>
  );
};

export default About;
