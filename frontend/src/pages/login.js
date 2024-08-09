import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import myImage from "../assets/smitlogo.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.status === "ok") {
        alert("Login successful!");

        window.localStorage.setItem("token", response.data.data.token);
        window.localStorage.setItem("loggedIn", true);

      
        const userType = response.data.data.userType;
        if (userType === "Admin") {
          navigate("/test");
        } else if (userType === "User") {
          navigate("/studentdb");
        }
      } else {
        alert(response.data.error || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="cover p-3">
            <img className="logo" src={myImage} alt="Logo" />
            <p className="welcome font-medium text-lg text-gray-500">
              Welcome! Please enter your details.
            </p>
            <div className="">
              <form className="form" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label
                    className="text-lg font-medium mt-3 text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    className="text-lg font-medium text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-feild w-full border-2 border-gray-100 rounded-lg p-2 bg-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div>
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="mr-2 bg-transparent"
                    />
                    <label htmlFor="remember-me" className="text-white">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="font-medium text-base text-green-800 ms-3">
                  Forgot password?
                </Link>
                </div>
                <div className="mt-4 flex flex-col gap-y-4">
                  <button
                    className="Sign active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold text-lg"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <div className="mt-3 flex justify-center items-center">
                  <p className="font-medium text-base text-white">
                    Don't have an account?
                  </p>
                  <Link
                    to="/register"
                    className="ml-2 font-medium text-base text-green-800"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Login;
