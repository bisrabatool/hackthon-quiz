import "./App.css";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"
import Feedback from "./pages/feedback"
import StudentInfoPage from "./pages/studentinfo";
import QuizComponent from "./components/QuizComponent";
import HomeComponent from "./components/HomeComponent";
import ResultsComponent from "./components/ResultsComponent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/studentinfo" element={<StudentInfoPage />}></Route>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/quiz" element={<QuizComponent />}></Route>
        <Route path="/ResultsComponent" element={<ResultsComponent />}></Route>


      </Routes>
    </BrowserRouter>
   
  );
}

export default App;



