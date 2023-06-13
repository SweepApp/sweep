import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";
import Details from "./pages/Details";
import Login from "./pages/Login";

import bg from "/src/assets/img/bg.jpg";

function App() {
  return (
    <>
      <div className="View">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      <Navbar/>
      <div className="bg">
          <img src={bg} alt="background" />
        </div>
    </>
  );
}

export default App;