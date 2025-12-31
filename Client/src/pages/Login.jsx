import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHander = async (e) =>{
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <form onSubmit={onSubmitHander} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-gray-800 tracking-wide">
            {currentState === "Sign Up" ? "Sign Up" : "Login"}
          </p>
          <hr className="mt-2 border-gray-300" />
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          {currentState === "Sign Up" && (
            <input
            required
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          )}

          <input
          required
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <input
          required
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-8 bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-lg font-semibold tracking-wide hover:opacity-90 transition"
        >
          {currentState}
        </button>

        {/* Switch state */}
        <p className="text-sm text-gray-600 text-center mt-6">
          {currentState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-black font-medium cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-black font-medium cursor-pointer hover:underline"
              >
                Create one
              </span>
              <br />
              <span className="text-xs text-gray-500">
                It only takes a minute 🚀
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
