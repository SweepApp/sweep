import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Log in</h1>
          <div className="sign__container__form">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="signmovies?api_key=test">
                Sign In
              </button>
            </form>
          </div>
          <div className="sign__container__links">
            <a href="#">Forgot Password?</a>
            <a href="/signup">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
