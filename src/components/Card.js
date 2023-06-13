export default function Card({ api }) {
  function sliceDate(date) {
    return date.slice(0, 4);
  }

  return api !== undefined ? (
    api.map((movie, index) => (
      <div className="card">
        <div className="card__poster">
          <img
            src={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
              movie.poster_path
            }
            alt={movie.name}
          />
        </div>
        <div className="card__infos">
          <ul>
            <li className="card__infos title">{movie.name}</li>
            <li>
              <i className="fa-solid fa-fw fa-calendar-days"></i>{sliceDate(movie.first_air_date)} - {movie.last_air_date !== null ? sliceDate(movie.last_air_date) : "Present"}
            </li>
            <li>
              <i className="fa-solid fa-fw fa-tv"></i>{movie.number_of_seasons > 1 ? movie.number_of_seasons + " seasons" : movie.number_of_seasons + " season"} 
            </li>
            <li className="tags">
              {movie.genres.map((genre, index) => index < 2 && (
                <span key={index}>{genre.name}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    ))
  ) : (
    <p style={{ fontSize: 28, textAlign: "center", margin: 0 }}>Loading</p>
  );
}
