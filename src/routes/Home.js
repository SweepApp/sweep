import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import { useState, useEffect } from "react";

export default function Home({ user, apiKey }) {
  const [api, setApi] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Upperbar id="top" title="Home" />
      <div className="Home">
        <h1>Hello, {user} 👋</h1>
        <div className="Home__cards">
          <Card api={api} />
        </div>
      </div>
    </>
  );
}
