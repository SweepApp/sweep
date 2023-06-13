import { useSelector } from "react-redux";
import Upperbar from "../components/Upperbar";
import Card from "../components/Card"; 

export default function Home({user, tmdb}) {
  let username = useSelector((state) => state.usersData.username);

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