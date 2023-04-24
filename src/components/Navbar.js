import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav>
      <ul>
        <li className={splitLocation[1] === "swipe" ? "active" : ""}>
          <a href="/swipe">
            <i class="fa-solid fa-children fa-fw"></i>
          </a>
        </li>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <a href="/">
            <i class="fa-solid fa-house fa-fw"></i>
          </a>
        </li>
        <li className={splitLocation[1] === "profile" ? "active" : ""}>
          <a href="/profile">
            <i class="fa-solid fa-user fa-fw"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
