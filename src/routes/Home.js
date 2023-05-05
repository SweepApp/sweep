import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import {useState, useEffect} from 'react';

export default function Home({user, apiKey}) {
  const [api, setApi] = useState([]);

  function fetchData() {
    let apiLink = 'http://localhost:8080/movies?api_key=' + apiKey;
    fetch(apiLink)
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
    window.location.href = "#top"
  }

  return (
    <>
      <Upperbar id="top">
        <ul>
          <li><button><i className="fa-solid fa-filter"></i></button></li>
          <li>Accueil</li>
          <li><button onClick={() => {refresh()}}><i className="fa-solid fa-rotate"></i></button></li>
        </ul>
      </Upperbar>
      <div className="Home">
        <h1>Bonjour, { user } 👋</h1>
        <div className="Home__cards">
          <Card api={api}/>
        </div>
      </div>
    </>
  )
}