import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <div className="View">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      </div>
      <Navbar/>
    </>
  );
}

export default App;