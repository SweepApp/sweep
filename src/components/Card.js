import img from "../assets/images/starwars.jpg";

export default function Card() {
  return (
    <div className="card">
      <div className="card__infos">
        <span className="card__infos__title">The Mandalorian</span>
        <ul className="card__tags">
          <li>Science-Fiction</li>
          <li>Western</li>
        </ul>
      </div>
      <img src={img} alt="..." />
    </div>
  );
}
