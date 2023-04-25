import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import {useState, useEffect} from 'react';

export default function Home({user, tmdb}) {
  const [api, setApi] = useState([]);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomPage = randomInterval(1, 20);

  let randomAscDesc = Math.random() < 0.5 ? "asc" : "desc";

  function randomValue(arr1, arr2) {
    return Math.random() < 0.5 ? arr1 : arr2;
  }

  function fetchData() {
    let apiLink = 'https://api.themoviedb.org/3/discover/movie?api_key='+ tmdb + '&language=fr-FR&sort_by=' + randomValue("popularity", "vote_average") + '.' + randomValue("asc", "desc") + '&include_adult=false&include_video=false&page=' + randomPage + '&year=2023&vote_count.gte=50&vote_average.gte=5&with_watch_monetization_types=flatrate'
    fetch(apiLink)
    .then(res => res.json())
    .then(
      (result) => {
        setApi(result);
      }
    )

    console.log(apiLink)
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
          <button class="button" onClick={() => {refresh()}}><i className="fa-solid fa-rotate"></i></button>
        </div>
      </div>
    </>
  )
}