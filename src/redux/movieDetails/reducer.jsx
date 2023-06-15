import { createSlice } from "@reduxjs/toolkit";

const movieDetailsInitialState = {
  title: null,
  tagline: null,
  release_date: null,
  runtime: null,
  poster_path: null,
  backdrop_path: null,
  overview: null,
  vote_average: null,
  genres: [],
  production_companies: [],
  credits: [],
  revenue: null,
  budget: null,
  recommendations: [],
};

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: movieDetailsInitialState,
  reducers: {
    setMovieDetails: (state, action) => {
      const {
        title,
        tagline,
        release_date,
        runtime,
        poster_path,
        backdrop_path,
        overview,
        vote_average,
        genres,
        production_companies,
        credits,
        revenue,
        budget,
        recommendations,
      } = action.payload;
      state.title = typeof title !== "undefined" ? title : state.title;
      state.tagline = typeof tagline !== "undefined" ? tagline : state.tagline;
      state.release_date =
        typeof release_date !== "undefined" ? release_date : state.release_date;
      state.runtime = typeof runtime !== "undefined" ? runtime : state.runtime;
      state.poster_path =
        typeof poster_path !== "undefined" ? poster_path : state.poster_path;
      state.backdrop_path =
        typeof backdrop_path !== "undefined"
          ? backdrop_path
          : state.backdrop_path;
      state.overview =
        typeof overview !== "undefined" ? overview : state.overview;
      state.vote_average =
        typeof vote_average !== "undefined" ? vote_average : state.vote_average;
      state.genres =
        typeof genres !== "undefined"
          ? Object.values(genres[0])
              .slice(0, -1)
              .map((value) => value.split("-"))
              .join("")
              .split(",")
          : state.genres;
      state.production_companies =
        typeof production_companies !== "undefined"
          ? Object.values(production_companies[0])
              .slice(0, -1)
              .map((value) => value.split("-"))
              .join("")
              .split(",")
          : state.production_companies;
      state.credits =
        typeof credits !== "undefined" ? credits.split("-") : state.credits;
      state.revenue = typeof revenue !== "undefined" ? revenue : state.revenue;
      state.budget = typeof budget !== "undefined" ? budget : state.budget;
      state.recommendations =
        typeof recommendations !== "undefined"
          ? recommendations.split("-")
          : state.recommendations;
    },
  },
});

export const { setMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
