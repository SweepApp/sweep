import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import {useState, useEffect} from 'react';

export default function Home({user, tmdb}) {
  const [api, setApi] = useState([]);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomPage = randomInterval(1, 20);

  function fetchData() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+ tmdb + '&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + randomPage + '&year=2023&vote_count.gte=150&vote_average.gte=5&with_watch_monetization_types=flatrate')
    .then(res => res.json())
    .then(
      (result) => {
        setApi(result);
      }
    )
  }

  useEffect(() => {
    fetchData();
  }, []
  ) 

  function refresh() {
    fetchData();
  }

  return (
    <>
      <Upperbar>
        <ul>
          <li><button><i className="fa-solid fa-filter"></i></button></li>
          <li>Accueil</li>
          <li><button onClick={() => {refresh()}}><i className="fa-solid fa-rotate"></i></button></li>
        </ul>
      </Upperbar>
      <div className="Home" id="popular">
        <h1>Bonjour, { user } 👋</h1>
        <div className="Home__cards">
          <Card api={api}/>
        </div>
      </div>
    </>
  )
}