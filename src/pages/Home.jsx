import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [api, setApi] = useState([]);

  let username = useSelector((state) => state.usersData.username);
  let token = useSelector((state) => state.usersData.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

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
        <h1>Hello, {username} 👋</h1>
        <div className="Home__cards">
          <Card api={api} />
        </div>
      </div>
    </>
  );
}
