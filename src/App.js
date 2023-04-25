import { Routes, Route } from "react-router-dom";
import "./index.css";

// import Upperbar from "./components/Upperbar";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Swipe from "./routes/Swipe";

export default function App() {
  const user = "User";
  const tmdbApiKey = process.env.REACT_APP_TMDB_API;
  console.log(tmdbApiKey);

  return (
    <div className="App">
      {/* <Upperbar/> */}
      <div className="View">
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/swipe" element={<Swipe user={user}/>} />
      </Routes>
      </div>
      <Navbar/>
    </div>
  );
}