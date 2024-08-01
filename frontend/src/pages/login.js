import React from "react";
import "./register.css";
import myImage from "..//assets/smitlogo.png";
import { Link } from "react-router-dom";
import { Form } from "antd";


function Login() {
  // const handleLoginClick = (event) => {
  //   event.preventDefault();
  //   document.querySelector('form').style.opacity = 0;
  //   document.querySelector('.wrapper').classList.add('form-success');
  // };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className=" cover p-3">
            <img className="logo" src={myImage} alt="" />
            <p className="welcome font-medium text-lg text-gray-500">
              Welcome! Please enter you details.
            </p>
            <div className="">
              <Form className="form">
               
                <div className="flex flex-col">
                  <label
                    className="text-lg font-medium mt-3 text-white"
                    name="email"
                  >
                    Email
                  </label>
                  <input
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-lg p-2 mt-1 bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    className="text-lg font-medium text-white"
                    name="password"
                  >
                    Password
                  </label>
                  <input
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="input-feild w-full border-2 border-gray-100 rounded-lg p-2  bg-transparent"
                    placeholder="Enter your password"
                    type={"password"}
                  />
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div>
                    <input type="checkbox" id="remember" className="input-feild " />
                    <label
                      className="ml-2 font-medium text-base text-white"
                      for="remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <button className="font-medium text-base mx-4 text-green-800">
                    Forgot password
                  </button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    // onClick={handleLogin}
                    className="Sign active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
                    ease-in-out transform py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-green-500 ...  text-white font-bold text-lg"
                    htmlType="submit"
                  >
                    Sign in
                  </button>
                </div>
                <div className="mt-3 flex justify-center items-center mb-3">
                  <p className="font-medium text-base text-white">
                    Don't have an account?
                  </p>
                  <Link
                    // onClick={() => setAuthState('register')}
                    to="/register"
                    className="ml-2  font-medium text-base text-green-800"
                  >
                    Sign up
                  </Link>
                </div>
              </Form>
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
