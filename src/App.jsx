import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Party from "./pages/Party";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="View">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/party" element={<Party />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
      <Navbar/>
    </>
  );
}

export default App;