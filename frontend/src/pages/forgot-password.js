import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import myImage from "../assets/smitlogo.png";

function Forgotpassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/forgot-password", {
        email,
      });

      setMessage(res.data.status);
      console.log(res.data, "userForgotPassword");
    } catch (error) {
      console.error("Error submitting forgot password:", error);
      setMessage("Error: Unable to process request");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="cover p-3">
            <img className="logo" src={myImage} alt="Logo" />
            <p className="welcome font-medium text-lg text-gray-500">
              Reset your password
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
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    type="submit"
                    className="Sign active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold text-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {message && <p className="mt-4 text-center text-white">{message}</p>}
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

export default Forgotpassword;
