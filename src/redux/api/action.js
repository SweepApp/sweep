import { setApi } from "./reducer";
import 'dotenv/config';

export const fetchApi = () => async (dispatch) => {
  try {
    await fetch('http://localhost:8080/movies?api_key=' + process.env.REACT_APP_SWEEP_API_KEY)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setApi(data));
      });
  } catch (e) {
    console.log(e);
  }
};
