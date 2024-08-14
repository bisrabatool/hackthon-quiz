import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"
import Feedback from "./pages/feedback"
import AdminDashboard from "./pages/admindashboard"
import Forgotpassword from "./pages/forgot-password";
import Enrollment from "./pages/enrollment"
import StdFeedback from "./pages/StdFeedback";
import StdProgress from "./pages/StdProgress";
import Quize from "./pages/Quize"
import StdDashboard from "./pages/StdDashboard"

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ===  "true" ? <AdminDashboard/> : <Home/>}></Route >
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/Quize" element={<Quize/>}></Route>
        <Route path="/enrollment" element={<Enrollment/>}></Route>  
        <Route path="/stdFeedback" element={<StdFeedback/>}></Route>
        <Route path="/StdProgress" element={<StdProgress/>}></Route>
        <Route path="/StdDashboard" element={<StdDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
