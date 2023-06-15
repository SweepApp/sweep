import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Upperbar from "../components/Upperbar";

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
            <h2>Party</h2>
          </div>
          <form className="modal__body" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Party ID"
              onChange={(e) => setPartyCode(e.target.value)}
              required
            />
            <button className="sign">Join</button>
          </form>
        </div>
        <div className="float__bottom">
          <button className="wide">Start a party</button>
        </div>
      </div>
    </>
  );
}
