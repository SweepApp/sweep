import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearPersistedState } from "../redux";
import { useEffect } from "react";
import { update } from "../redux/auth/action";
import Upperbar from "../components/Upperbar";
import avatars from "../assets/data/avatars.json";

export default function Home() {
  let username = useSelector((state) => state.usersData.username);
  let token = useSelector((state) => state.usersData.token);
  let avatar = useSelector((state) => state.usersData.avatar);
  let matches = useSelector((state) => state.statsDetails.matches);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
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

  const editAvatar = () => {
    setEdit(true);
  };

  const selectAvatar = (pic) => {
    setEdit(false);
    dispatch(update(pic, token));
  };

  return (
    <>
      <Upperbar title={`@${username}`} />
      <div className="Profile">
        <div className="profile__card">
          <div className="profile__card__avatar">
            <img src={avatar} alt="avatar" />
            <button className="edit" onClick={() => editAvatar()}>
              <i className="fa-solid fa-fw fa-pen"></i>
            </button>
          </div>

          {edit && (
            <div className="profile__card__modale">
              <div className="profile__card__modale__header">
                <h2>Choose an avatar</h2>
                <button className="close no" onClick={() => setEdit(false)}>
                  <i className="fa-solid fa-fw fa-times"></i>
                </button>
              </div>
              <div className="profile__card__modale__list">
                {avatars &&
                  avatars.map((pic, index) => (
                    <img
                      key={index}
                      alt={pic.name}
                      src={pic.url}
                      onClick={() => selectAvatar(pic.url)}
                      className={pic.url === avatar ? "selected" : ""}
                    />
                  ))}
              </div>
            </div>
          )}

          <div className="profile__card__infos">
            <div className="profile__card__infos__name">
              <h1>{username}</h1>
            </div>
            <div className="profile__card__infos__stats">
              <span>
                {matches} {matches > 2 ? "matches" : "match"}
              </span>
            </div>
          </div>
        </div>

        <div className="profile__history">
          <h2>History</h2>
        </div>

        <div className="profile__disconnect">
          <button className="wide" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
