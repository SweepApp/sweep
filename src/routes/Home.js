import Card from "../components/Card";
import Upperbar from "../components/Upperbar";

export default function Home() {
  const user = "User";
  return (
    <>
      <Upperbar>
        <ul>
          <li><button>Populaire</button></li>
          <li><button>Pour vous</button></li>
          <li><button>Vos amis</button></li>
        </ul>
      </Upperbar>
      <div className="Home">
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