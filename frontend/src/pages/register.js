import React, { useState } from "react";
import "./register.css";
import myImage from "../assets/smitlogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    secretKey: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, userType, secretKey } = formData;

    if (userType === "Admin" && secretKey !== "SMITPORTAL") {
      alert("Invalid secret key for Admin registration!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: username,
        email,
        password,
        userType, 
      });

      if (response.data.status === "ok") {
        alert("Registration successful!");
        setFormData({
          username: "",
          email: "",
          password: "",
          userType: "",
          secretKey: "",
        });

        navigate("/login");
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="cover">
          <img className="logo" src={myImage} alt="Logo" />

          <div className="">
            <form className="form" onSubmit={handleSubmit}>
              <p className="welcome font-medium text-lg text-gray-500 ">
                <input
                  type="radio"
                  name="userType"
                  onChange={handleChange}
                  value="User"
                />
                <label htmlFor="" className="ms-1 me-4">
                  User
                </label>
                <input
                  type="radio"
                  name="userType"
                  onChange={handleChange}
                  value="Admin"
                />
                <label htmlFor="" className="ms-1">
                  Admin
                </label>
              </p>

              {formData.userType === "Admin" ? (
                <div className="flex flex-col mt-3">
                  <label
                    className="text-lg font-medium text-white"
                    htmlFor="secretKey"
                  >
                    Secret Key
                  </label>
                  <input
                    name="secretKey"
                    onChange={handleChange}
                    value={formData.secretKey}
                    className="input-field w-full border-2 border-gray-100 rounded-lg p-2 bg-transparent"
                    placeholder="Enter Secret Key"
                    type="text"
                    required
                  />
                </div>
              ) : null}

              <div className="flex flex-col">
                <label
                  className="text-lg font-medium mt-3 text-white"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="input-field w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-lg font-medium mt-3 text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  type="email"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field w-full border-2 border-gray-100 rounded-lg p-2 bg-transparent"
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>

              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  className="Sign active:scale-[.98] active:duration-75 transition-all
                   hover:scale-[1.01] ease-in-out transform py-2 rounded-xl 
                   bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold text-lg "
                  type="submit"
                >
                  Sign up
                </button>
              </div>

              <div className="mt-3 flex justify-center items-center">
                <p className="font-medium text-base text-white">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  className="ml-2 font-medium text-base text-green-800"
                >
                  Sign in
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
  );
}

export default Register;
