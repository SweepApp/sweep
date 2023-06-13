import Card from "../components/Card";
import Upperbar from "../components/Upperbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApi());
  }, [dispatch]);

  return (
    <>
      <Upperbar id="top" title="Home" />
      <div className="Home">
        <h1>Hello, User 👋</h1>
        <div className="Home__cards">
          <Card />
        </div>
      </div>
    </>
  );
}
