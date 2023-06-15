import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const token = useSelector((state) => state.usersData.token);

  return token ? (
    <nav>
      <ul>
        <li className={splitLocation[1] === "party" ? "active" : ""}>
          <Link to="/party">
            <i className="fa-solid fa-children fa-fw"></i>
          </Link>
        </li>
        <li
          className={
            splitLocation[1] === "" || splitLocation[1] === "details"
              ? "active"
              : ""
          }
        >
          <Link to="/">
            <i className="fa-solid fa-compass fa-fw"></i>
          </Link>
        </li>
        <li className={splitLocation[1] === "profile" ? "active" : ""}>
          <Link to="/profile">
            <i className="fa-solid fa-user fa-fw"></i>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    splitLocation[1] === "" && (
      <nav className="log">
        <button
          className="sign"
          onClick={() => (navigate("/login"))}
        >
          Log in
        </button>
        <button
          className="sign"
          onClick={() => (navigate("/signup"))}
        >
          Sign up
        </button>
      </nav>
    )
  );
}
