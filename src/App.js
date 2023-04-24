import { Routes, Route } from "react-router-dom";
import "./index.css";

import Upperbar from "./components/Upperbar";
import Navbar from "./components/Navbar";

import Home from "./routes/Home";

export default function App() {
  return (
    <div className="App">
      <Upperbar/>
      <div className="View">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </div>
      <Navbar/>
    </div>
  );
}