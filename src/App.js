import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Swipe from "./routes/Swipe";

export default function App() {
  const username = "User";
  const tmdbApiKey = process.env.REACT_APP_TMDB_API;

  return (
    <div className="App">
      <div className="View">
      <Routes>
        <Route path="/" element={<Home user={username} tmdb={tmdbApiKey}/>} />
        <Route path="/profile" element={<Profile user={username} tmdb={tmdbApiKey}/>} />
        <Route path="/swipe" element={<Swipe user={username} tmdb={tmdbApiKey}/>} />
      </Routes>
      </div>
      <Navbar/>
    </div>
  );
}