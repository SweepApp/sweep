import img from '../assets/images/starwars.jpg';

export default function Card() {
  return (
    <div className="card">
      <span>Star Wars</span>
      <img src={ img } alt="..." />
    </div>
  )
}