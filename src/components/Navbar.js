import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/settings"><i class="fa-solid fa-bars"></i></Link>
        </li>
        <li>
          <Link to="/"><i class="fa-solid fa-house"></i></Link>
        </li>
        <li>
          <Link to="/profile"><i class="fa-solid fa-user"></i></Link>
        </li>
      </ul>
    </nav>
  )
}