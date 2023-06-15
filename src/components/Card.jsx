import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "../redux/movieDetails/reducer";
import { useNavigate } from "react-router";

export default function Card({ api, style }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function sliceDate(date) {
    return date.slice(0, 4);
  }

  function sliceVote(vote) {
    let voteString = vote.toString();
    return voteString.slice(0, 3);
  }

  function formatTime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + "h" + minutes;
  }

  function openDetails(movie) {
    dispatch(setMovieDetails(movie));
    navigate("/details");
  }

  let card = `card__${style}`;

  return api !== undefined ? (
    api.map((movie, index) => (
      <div className={card} key={index} onClick={() => openDetails(movie)}>
        <div className={`${card}__poster`}>
          <img
            src={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
              movie.poster_path
            }
            alt={movie.name}
          />
        </div>
        <div className={`${card}__infos`}>
          <ul>
            <li className={`${card}__infos title`}>{movie.title}</li>
            <li>
              {movie.vote_average >= 5 ? (
                <i className="fa-solid fa-fw fa-face-smile"></i>
              ) : (
                <i className="fa-solid fa-fw fa-face-sad-tear"></i>
              )}
              {sliceVote(movie.vote_average)}/10
            </li>
            <li>
              <i className="fa-solid fa-fw fa-calendar-days"></i>{sliceDate(movie.release_date)}
            </li>
            <li>
              <i className="fa-regular fa-fw fa-clock"></i>{formatTime(movie.runtime)} 
            </li>
          </ul>
        </div>
        <div className={`${card}__bg`}>
          <img
            src={
              "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
              movie.backdrop_path
            }
            alt={movie.name}
          />
        </div>
      </div>
    ))
  ) : (
    <p style={{ fontSize: 28, textAlign: "center", margin: 0 }}>Loading</p>
  );
}

Card.propTypes = {
  api: propTypes.array,
  style: propTypes.string,
};