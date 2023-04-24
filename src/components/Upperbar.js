import { Link } from "react-router-dom";

export default function Upperbar() {
  return (
    <div id="upperbar">
      <ul>
        <li>
          <Link to="#">Pour vous</Link>
        </li>
        <li>
          <Link to="#friends">Vos amis</Link>
        </li>
      </ul>
    </div>
  )
}