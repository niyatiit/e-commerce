import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendURL } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHander = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem(token, response.data.token);
          toast.success("Registation is successfully")
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login Successfully")
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log("Error:---- ", error);
      toast.error(error.message);
    }
    setName("")
    setPassword("")
    setEmail("")
  };

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <form
        onSubmit={onSubmitHander}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl"
      >
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
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
