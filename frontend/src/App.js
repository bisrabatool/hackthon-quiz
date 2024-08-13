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
<<<<<<< HEAD
// import QuizForm from "./pages/QuizForm";
import QuizComponent from "./components/QuizComponent";
import CourseModule from "./pages/CourseModule";
import StdFeedback from "./pages/StdFeedback";
import Forgetpassword from"./pages/forgot-password";
import StdProgress from "./pages/StdProgress";


=======
import StdFeedback from "./pages/StdFeedback";
import CourseCard from "./pages/CourseCard"
import CourseModule from "./pages/CourseModule"
import StdProgress from "./pages/StdProgress";
>>>>>>> 4f8d5d003b5780da07cfcaff6a31b8ac06b79f5c
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
        <Route path="/studentdb" element={<Studentdb/>}></Route>
        <Route path="/Quizform" element={<QuizForm/>}></Route>
        <Route path="/enrollment" element={<Enrollment/>}></Route>  
        <Route path="/stdFeedback" element={<StdFeedback/>}></Route>
        <Route path="/CourseCard" element={<CourseCard/>}></Route>
        <Route path="/CourseModule" element={<CourseModule/>}></Route>
<<<<<<< HEAD
        <Route path="/StdFeedback" element={<StdFeedback/>}></Route>
        <Route path="/StdProgress" element={<StdProgress/>}></Route>


=======
        <Route path="/StdProgress" element={<StdProgress/>}></Route>
>>>>>>> 4f8d5d003b5780da07cfcaff6a31b8ac06b79f5c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
