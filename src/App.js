import { Routes, Route } from "react-router-dom";
import "./index.css";

// import Upperbar from "./components/Upperbar";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";

export default function App() {
  return (
    <div className="App">
      {/* <Upperbar/> */}
      <div className="View">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      </div>
      <Navbar/>
    </div>
  );
}