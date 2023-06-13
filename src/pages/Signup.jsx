import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/auth/action";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password));
  };

  return (
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Create an account</h1>
          <div className="sign__container__form">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="password" placeholder="Password" required />
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="sign">
                Sign Up
              </button>
            </form>
          </div>
          <div className="sign__container__links">
            <a href="/login">Already have an account? Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
