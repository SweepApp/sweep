import {useState, useEffect} from 'react';

export default function Card(tmdb) {
  const [api, setApi] = useState([]);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomPage = randomInterval(1, 15);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+ tmdb.api + '&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + randomPage + '&year=2023&vote_count.gte=150&vote_average.gte=5&with_watch_monetization_types=flatrate')
      .then(res => res.json())
      .then(
        (result) => {
          setApi(result);
        }
      )
  }, []
  ) 

  console.log(api)

  return (
    api.results !== undefined ? (
      api.results.map((movie) => 
      <div className="card">
        <div className="card__infos">
          <span className="card__infos__title">{movie.title}</span>
          <ul className="card__tags">
            <li><i class="fa-solid fa-calendar-days"></i> {movie.release_date}</li>
            <li><i class="fa-regular fa-star"></i> {movie.vote_average}</li>
            <li><i class="fa-solid fa-users"></i> {movie.vote_count}</li>
          </ul>
        </div>
        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="..." />
      </div>
      )
    ) : (
      <p>Loading</p>
    )
  )
}
