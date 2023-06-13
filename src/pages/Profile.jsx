import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPersistedState } from "../redux";
import { useEffect } from "react";
import Upperbar from "../components/Upperbar";

export default function Home() {
  let username = useSelector((state) => state.usersData.username);
  let token = useSelector((state) => state.usersData.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  const handleLogout = () => {
    navigate("/login");
    navigate(0);
    clearPersistedState();
  };

  return (
    <>
      <Upperbar title={`@${username}`} />
      <div className="Profile">
        <div className="profile__card">
          <div className="profile__card__avatar">
            <img src={`https://github.com/identicons/${username}.png`} alt="avatar" />
          </div>
          <div className="profile__card__infos">
            <div className="profile__card__infos__name">
              <h1>{username}</h1>
            </div>
            <div className="profile__card__infos__stats">
              <span>0 Matchs</span>
            </div>
          </div>
        </div>

        <div className="profile__history">
          <h2>Historique</h2>
        </div>

        <div className="profile__disconnect">
          <button className="wide" onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
}
