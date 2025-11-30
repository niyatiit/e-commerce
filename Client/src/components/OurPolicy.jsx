import React from "react";
import { Title } from "./Title";

const OurPolicy = () => {
  return (
    <>
      <Title text1={"OUR"} text2={"POLICY"}></Title>
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Easy Exchange */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              className="w-12 mb-4"
              alt="exchange icon"
            />
            <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
            <p className="text-gray-500 text-sm">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* 7 Days Return */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3900/3900291.png"
              className="w-12 mb-4"
              alt="return icon"
            />
            <h3 className="text-lg font-semibold">7 Days Return Policy</h3>
            <p className="text-gray-500 text-sm">
              We provide 7 days free return policy
            </p>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891407.png"
              className="w-12 mb-4"
              alt="support icon"
            />
            <h3 className="text-lg font-semibold">Best customer support</h3>
            <p className="text-gray-500 text-sm">
              We provide 24/7 customer support
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPolicy;
