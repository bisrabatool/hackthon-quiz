import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"
import Feedback from "./pages/feedback"
import StudentInfoPage from "./pages/studentinfo";
import Test from "./pages/test"
import QuizForm from "./pages/QuizForm"
import Forgotpassword from "./pages/forgot-password";
import Enrollment from "./pages/enrollment"
import StdFeedback from "./pages/StdFeedback";
import StdProgress from "./pages/StdProgress";
import DashboardPage from "./pages/StdDashboard";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ===  "true" ? <Test/> : <Home/>}></Route >
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/studentinfo" element={<StudentInfoPage />}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/Quizform" element={<QuizForm/>}></Route>
        <Route path="/enrollment" element={<Enrollment/>}></Route>  
        <Route path="/stdFeedback" element={<StdFeedback/>}></Route>
        <Route path="/StdProgress" element={<StdProgress/>}></Route>
        <Route path="/StdDashboard" element={<DashboardPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
