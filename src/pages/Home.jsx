import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [api, setApi] = useState([]);

  function fetchData() {
    let apiLink = "http://localhost:8080/movies?api_key=test";
    fetch(apiLink)
      .then((res) => res.json())
      .then((result) => {
        setApi(result);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Upperbar id="top" title="Home" />
      <div className="Home">
        <h1>Hello, User 👋</h1>
        <div className="Home__cards">
          <Card api={api} />
        </div>
      </div>
    </>
  );
}
