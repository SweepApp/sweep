import { setFriends } from "./action";

export const getFriends = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/friends", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    dispatch(
      setFriends({
        friends: data.body["friends"],
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export const addFriend = (username, token) => async (dispatch) => {
  try {
    await fetch("http://localhost:8080/api/v1/user/friends", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        friends: username,
      }),
    });

    dispatch(
      getFriends()
    );
  } catch (error) {
    console.log(error);
  }
}