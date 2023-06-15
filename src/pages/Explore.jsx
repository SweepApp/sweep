import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [api, setApi] = useState([]);

  let username = useSelector((state) => state.usersData.username);

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
      <Upperbar id="top" title="Explore" />
      <div className="explore">
        <h1>{username ? `Hello, ${username} 👋` : 'Hello 👋'}</h1>
        <div className="explore_cards">
          <Card api={api} style="mini" />
        </div>
      </div>
    </>
  );
}
