import { useSelector } from "react-redux";
import Upperbar from "../components/Upperbar";

export default function Details() {
  const movieDetails = useSelector((state) => state.movieDetails);

    if (movieDetails.title === null) {
      window.location.href = "/";
      console.log('test')
    }

  function sliceDate(date) {
    return date.slice(0, 4);
  }

  function formatTime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + "h" + minutes;
  }

  return (
    <>
      <Upperbar title={movieDetails.title} />
      <div className="Details">
        <div className="details__poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="details__infos">
          <div className="details__infos__header">
            <div>
              <h1>{movieDetails.title}</h1>
              <h2>{movieDetails.tagline}</h2>
            </div>
            <div className="details__infos__header__row">
              <span>{sliceDate(movieDetails.release_date)}</span>
              <span>{formatTime(movieDetails.runtime)}</span>
            </div>
            <div className="details__infos__overview">
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
            </div>
            <div className="details__infos__genres">
              <ul>
                {movieDetails.genres}
              </ul>
            </div>
            <div className="details__infos__credits">
              <h3>Cast</h3>
              <ul>
                <li>{movieDetails.credits}</li>
              </ul>
            </div>
            <div className="details__infos__details">
              <h3>Details</h3>
              <div className="details__infos__details__box">
                <table>
                  <tbody>
                    <tr>
                      <td>Production</td>
                      <td>
                        {movieDetails.production_companies}
                      </td>
                    </tr>
                    <tr>
                      <td>Budget</td>
                      <td>{movieDetails.budget}$</td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>{movieDetails.revenue}$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
