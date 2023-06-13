import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    navigate("/", { replace: true })
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
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="sign">
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
