import { setAuth } from "./reducer";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data.body["email"])
    dispatch(
      setAuth({
        username: username,
        email: data.body["email"],
        avatar: data.body["avatar"],
        isLoggedIn: true,
        token: data.body["token"],
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const signup = (username, email, password, avatar) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/signup", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        avatar: avatar,
      }),
    });

    const data = await response.json();

    dispatch(
      setAuth({
        username: username,
        email: email,
        avatar: avatar,
        isLoggedIn: true,
        token: data.body["token"],
      })
    );
    
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

export const update = (avatar, token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    });

    const data = await response.json();

    dispatch(
      setAuth({
        username: data.body["username"],
        email: data.body["email"],
        avatar: avatar,
        isLoggedIn: true,
        token: token,
      })
    );
    
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
