import Dashboard from "./pages/dashboard";
import Studentdb from "./pages/studentdb";
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
import QuizForm from "./pages/QuizForm";
import QuizComponent from "./components/QuizComponent";
import CourseModule from "./pages/CourseModule";
import StdFeedback from "./pages/StdFeedback";
import Forgetpassword from"./pages/forgot-password";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ===  "true" ? <Test/> : <Home/>} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/studentinfo" element={<StudentInfoPage />}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/studentdb" element={<Studentdb/>}></Route>
        <Route path="/Quizform" element={<QuizForm/>}></Route>
        <Route path="/enrollment" element={<Enrollment/>}></Route>
        
        <Route path="/QuizForm" element={<QuizForm/>}></Route>
        <Route path="/QuizComponent" element={<QuizComponent/>}></Route>
        <Route path="/studentdb" element={<Studentdb/>}></Route>
        <Route path="/CourseModule" element={<CourseModule/>}></Route>
        <Route path="/StdFeedback" element={<StdFeedback/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
