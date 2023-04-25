import Upperbar from "../components/Upperbar";
import Card from "../components/Card"; 

export default function Home({user, tmdb}) {
  return (
    <>
      <Upperbar>
        <ul>
          <li>@{user}</li>
        </ul>
      </Upperbar>
      <div className="Profile">
        <div className="profile__card">
          <div className="profile__card__avatar">
            <img src="https://github.com/identicons/user.png" alt="avatar" />
          </div>
          <div className="profile__card__infos">
            <div className="profile__card__infos__name">
              <h1>{user}</h1>
            </div>
            <div className="profile__card__infos__stats">
              <span>26 Matchs</span>
            </div>
          </div>
        </div>

        <div className="profile__history">
          <h2>Historique</h2>
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}