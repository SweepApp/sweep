import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Swipe from "./routes/Swipe";

export default function App() {
  const username = "User";
  const apiKey = process.env.REACT_APP_SWEEP_API_KEY;

  return (
    <div className="App">
      <div className="View">
      <Routes>
        <Route path="/" element={<Home user={username} apiKey={apiKey} />} />
        <Route path="/profile" element={<Profile user={username} apiKey={apiKey}/>} />
        <Route path="/swipe" element={<Swipe user={username} apiKey={apiKey}/>} />
      </Routes>
      </div>
      <Navbar/>
    </div>
  );
}