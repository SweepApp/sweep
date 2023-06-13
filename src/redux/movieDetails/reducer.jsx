import { createSlice } from '@reduxjs/toolkit';

const movieDetailsInitialState = {
  title: null,
  tagline: null,
  release_date: null,
  runtime: null,
  poster_path: null,
  overview: null,
  genres: [],
  production_companies: [],
  credits: [],
  revenue: null,
  budget: null,
  keywords: [],
  recommendations: [],
};

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: movieDetailsInitialState,
  reducers: {
    setMovieDetails: (state, action) => {
      const { title, tagline, release_date, runtime, poster_path, overview, genres, production_companies, credits, revenue, budget, keywords, recommendations } = action.payload;
      state.title = title;
      state.tagline = tagline;
      state.release_date = release_date;
      state.runtime = runtime;
      state.poster_path = poster_path;
      state.overview = overview;
      state.genres = Object.values(genres[0]).join('');
      state.production_companies = Object.values(production_companies[0]).join('');
      state.credits = credits;
      state.revenue = revenue;
      state.budget = budget;
      state.keywords = keywords;
      state.recommendations = recommendations;
    },
  },
});

export const { setMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;