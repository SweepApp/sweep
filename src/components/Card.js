export default function Card({api}) {
  return (
    api !== undefined ? (
      api.map((movie, index) => 
      <div className="card">
        <div className="card__infos">
          <span className="card__infos__title">{movie.title}</span>
          <ul className="card__tags">
            <li><i className="fa-solid fa-calendar-days"></i> {movie.release_date}</li>
            <li><i className="fa-regular fa-star"></i> {movie.vote_average}</li>
            <li><i className="fa-solid fa-users"></i> {movie.vote_count}</li>
          </ul>
        </div>
        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="..." />
      </div>
      )
    ) : (
      <p style={{fontSize:28,textAlign:"center",margin:0}}>Loading</p>
    )
  )
}
