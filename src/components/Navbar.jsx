import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const token = useSelector((state) => state.usersData.token);

  return token ? (
    <nav>
      <ul>
        <li className={splitLocation[1] === "party" ? "active" : ""}>
          <a href="/party">
            <i className="fa-solid fa-children fa-fw"></i>
          </a>
        </li>
        <li
          className={
            splitLocation[1] === "" || splitLocation[1] === "details"
              ? "active"
              : ""
          }
        >
          <a href="/">
            <i className="fa-solid fa-compass fa-fw"></i>
          </a>
        </li>
        <li className={splitLocation[1] === "profile" ? "active" : ""}>
          <a href="/profile">
            <i className="fa-solid fa-user fa-fw"></i>
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    splitLocation[1] === "" && (
      <nav className="log">
        <button
          className="sign"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </button>
        <button
          className="sign"
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up
        </button>
      </nav>
    )
  );
}
