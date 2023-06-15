import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Upperbar from "../components/Upperbar";
import Banner from "../components/Banner";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.usersData.token);
  const [partyCode, setPartyCode] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Upperbar title="Party" />
      <div className="party">
        <div className="party__content">
          <div className="party__content__header">
            <Banner
              image="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80"
              alt="Party"
            />
            <h2>Join a Party</h2>
          </div>
          <div className="party__content__body">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Party ID"
                onChange={(e) => setPartyCode(e.target.value)}
                required
              />
              <button className="sign">Join</button>
            </form>
          </div>
        </div>
        <div className="float__bottom">
          <button className="wide">Start a party</button>
        </div>
      </div>
    </>
  );
}
