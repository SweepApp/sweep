import Card from "../components/Card";
import Upperbar from "../components/Upperbar";

export default function Home() {
  const user = "User";
  return (
    <>
      <Upperbar>
        <ul>
          <li>@{user}</li>
        </ul>
      </Upperbar>
      <div className="Profile">

      </div>
    </>
  )
}