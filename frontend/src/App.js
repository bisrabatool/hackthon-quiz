import "./App.css";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"
import Feedback from "./pages/feedback"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/home" element={<Home/>} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/feedback" element={<Feedback/>}></Route>
//       </Routes>
//     </BrowserRouter>
   
//   );
// }

// export default App;
function app(){
  return
}
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/feedback" element={<Feedback />} />
    <Route path="*" element={<NotFound />} /> {/* Add a 404 page */}
  </Routes>
</BrowserRouter>

