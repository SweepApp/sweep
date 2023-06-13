import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const token = useSelector((state) => state.usersData.token);

  return token && (
    <nav>
      <ul>
        <li className={splitLocation[1] === "swipe" ? "active" : ""}>
          <a href="/swipe">
            <i className="fa-solid fa-children fa-fw"></i>
          </a>
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <a href="/">
            <i className="fa-solid fa-house fa-fw"></i>
          </a>
        </li>
        <li className={splitLocation[1] === "profile" ? "active" : ""}>
          <a href="/profile">
            <i className="fa-solid fa-user fa-fw"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
