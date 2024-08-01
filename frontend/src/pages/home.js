import React from "react";
import "./home.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import myImage from "../assets/smitlogo.png";

const Home = () => {
  return (
    <>
      {/* ========== BACKGROUND ANIMATION ========== */}

      <div className="wrapper">
        <div className="home-Card">
          {/* ========== NAVBAR ========== */}

          <div>
            <Box sx={{ flexGrow: 1 }} className="navbar">
              <AppBar
                position="static"
                sx={{
                  background:"linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))",
                  boxShadow: "none",
                }}
              >
                <Toolbar variant="dense">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  ></IconButton>
                  <Typography variant="h6" color="inherit" component="div">
                    <img
                      className="logo"
                      src={myImage}
                      alt="Logo"
                      style={{ height: "100px", marginTop: "0.011px" }} 
                    />
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          </div>

          {/* ========== NAVBAR-END ========== */}

          {/* ========== HOME ========== */}

          <div className="home-Container mt-5 p-5">
            <p className="text-white font-extralight main-heading mt-5">
              Quiz Application
            </p>
            <p className="text-blue-800 font-extralight main-text mt-5">
              Saylani Mass IT Training Program
            </p>
            <p className="mt-5 text-green-900 main-line">
              The Saylani Mass IT Training Program is a pioneering institute
              that offers advanced IT education entirely for free.
            </p>
            <p className="mt-5 text-green-900 main-line">
              The Saylani Mass Training Department operates as a key division
              within the Saylani Welfare Trust, empowering individuals with the
              latest IT skills.
            </p>
            <p className="mt-5 font-bold text-green-900 main-line">
              Start your exam here:
            </p>
            <Link
              to="/login"
              className="p-3 mt-3 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
                    ease-in-out transform py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-green-600 ...  text-white font-bold text-lg"
            >
              Continue with Email
            </Link>
          </div>

          {/* ========== HOME-END ========== */}
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
      {/* ========== BACKGROUND ANIMATION END ========== */}
    </>
  );
};

export default Home;
