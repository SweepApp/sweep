import Card from "../components/Card";
import Upperbar from "../components/Upperbar";

export default function Home({user}) {
  return (
    <>
      <Upperbar>
        <ul>
          <li><button>Populaire</button></li>
          {/* <li><button>Vos amis</button></li> */}
        </ul>
      </Upperbar>
      <div className="Home" id="popular">
        <h1>Bonjour, { user } 👋</h1>
        <div className="Home__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}