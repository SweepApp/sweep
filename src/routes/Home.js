import Card from "../components/Card";
import Upperbar from "../components/Upperbar";

export default function Home({user}) {
  return (
    <>
      <Upperbar>
        <ul>
          <li>Accueil</li>
        </ul>
      </Upperbar>
      <div className="Home" id="popular">
        <h1>Bonjour, { user } 👋</h1>
        <div className="Home__cards">
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}