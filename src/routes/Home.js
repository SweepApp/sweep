import Card from "../components/Card";

export default function Home() {
  const user = "User";
  return (
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
  )
}