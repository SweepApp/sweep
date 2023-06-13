import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Swipe from "./routes/Swipe";

function App() {
  return (
    <>
      <div className="View">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipe" element={<Swipe />} />
      </Routes>
      </div>
      <Navbar/>
    </>
  );
}

export default App;