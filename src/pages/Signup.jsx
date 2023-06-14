import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/auth/action";
import avatar1 from "../assets/images/avatar/1.jpg";
import avatar2 from "../assets/images/avatar/2.jpg";
import avatar3 from "../assets/images/avatar/3.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password, avatar));
    navigate("/", { replace: true });
  };

  const avatars = [avatar1, avatar2, avatar3];

  return (
    <div className="login">
      <div className="sign">
        <div className="sign__container">
          <h1>Create an account</h1>
          <div className="sign__container__form">
            <form onSubmit={handleFormSubmit}>
              <div className="sign__container__form__avatar">
                <label htmlFor="avatar">Choose an avatar</label>
                <div className="sign__container__form__avatar__list">
                  {avatars.map((pic, index) => (
                    <img
                      key={index}
                      alt="avatar"
                      src={pic}
                      onClick={() => setAvatar(pic)}
                      className={pic === avatar ? "selected" : ""}
                    />
                  ))}
                </div>
              </div>
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
              <button className="sign" type="submit">
                Sign up
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
