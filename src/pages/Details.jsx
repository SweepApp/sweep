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
      <div className="details">
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
              <h3>Genres</h3>
              <ul>
                  {movieDetails.genres.slice(0, 3).map((genre) => (
                    <li key={genre.id}>{genre}</li>
                  ))}
              </ul>
            </div>
            <div className="details__infos__credits">
              <h3>Cast</h3>
              <ul>
                {movieDetails.credits.slice(0, 3).map((actor) => (
                  <li key={actor.id}>{actor}</li>
                ))}
              </ul>
              <ul>
                {movieDetails.credits.slice(3, 6).map((actor) => (
                  <li key={actor.id}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="details__infos__details">
              <h3>Details</h3>
              <div className="details__infos__details__box">
                <table>
                  <tbody>
                    <tr>
                      <td className="title">Production</td>
                      <td>
                        {movieDetails.production_companies.map((company) => (
                          <span key={company.id}>{company}</span>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="title">Budget</td>
                      <td>{movieDetails.budget}$</td>
                    </tr>
                    <tr>
                      <td className="title">Revenue</td>
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
