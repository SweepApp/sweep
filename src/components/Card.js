import {useState, useEffect} from 'react';

import example from "../assets/images/starwars.jpg";

export default function Card(tmdb) {
  const [api, setApi] = useState([]);

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rdnInt = randomInt(1,500);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/' + rdnInt + '?api_key='+ tmdb.api)
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
    api && (
      <div className="card">
        <div className="card__infos">
          <span className="card__infos__title">{api.original_title}</span>
          <ul className="card__tags">
            <li>Test</li>
          </ul>
        </div>
        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + api.poster_path} alt="..." />
      </div>
    )
  );
}
