import { setMovieDetails } from './reducer';

export const getMovieDetails = (movie) => async (dispatch) => {
  dispatch(setMovieDetails(movie))
}
