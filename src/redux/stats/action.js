import { setStats } from './reducer';

export const postStats = (matches, history, token) => async (dispatch) => {
  try {
    await fetch("http://localhost:8080/api/v1/user/profile", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        matches: matches,
        history: history,
      }),
    });

    dispatch(
      setStats({
        matches: matches,
        history: history,
      })
    );
    
  } catch (error) {
    console.log(error);
  }
}

export const putStats = (matches, history, token) => async (dispatch) => {
  try {
    await fetch("http://localhost:8080/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        matches: matches,
        history: history,
      }),
    });

    dispatch(
      setStats({
        matches: matches,
        history: history,
      })
    );

  } catch (error) {
    console.log(error);
  }
}

export const getStats = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/profile", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
    });

    const data = await response.json();

    dispatch(
      setStats({
        matches: data.body["matches"],
        history: data.body["history"],
      })
    );

  } catch (error) {
    console.log(error);
  }
}