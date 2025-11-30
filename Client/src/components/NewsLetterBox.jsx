import React from "react";

const NewsLetterBox = () => {
    const onSubmitHandler = (e) =>{
        e.preventDefault()
    }
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Subscribe now & get 20% off
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <form onSubmit={onSubmitHandler} className="flex mt-6 shadow-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 px-4 py-3 outline-none"
          />

          <button className="bg-black text-white px-6 md:px-10 py-3 font-medium">
            SUBSCRIBE
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsLetterBox;
