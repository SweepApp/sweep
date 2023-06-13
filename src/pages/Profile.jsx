import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Upperbar from "../components/Upperbar";

export default function Home() {
  let username = useSelector((state) => state.usersData.username);
  let token = useSelector((state) => state.usersData.token);

  const navigate = useNavigate();

  if (!token) {
    navigate("/login", { replace: true });
  }

  return (
    <>
      <Upperbar title={`@${username}`}/>
      <div className="Profile">
        <div className="profile__card">
          <div className="profile__card__avatar">
            <img src="https://github.com/identicons/user.png" alt="avatar" />
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
      </div>
    </>
  )
}