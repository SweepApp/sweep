import { Routes, Route } from "react-router-dom";
import "./index.css";

import Upperbar from "./components/Upperbar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Upperbar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      <Navbar/>
    </div>
  );
}