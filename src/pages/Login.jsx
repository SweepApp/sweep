import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";
import Upperbar from "../components/Upperbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(username, password));
    navigate("/", { replace: true })
  };

  return (
    <>
    <Upperbar title="Login" button="true" />
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Log in</h1>
          <div className="sign__container__form">
            <form onSubmit={handleFormSubmit}>
              <input
                className="login"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="login"
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
            <Link to="#">Forgot Password?</Link>
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
