import axios from "axios"
import { loginUserFailed, loginUserRequest, loginUserSuccess } from "./authSlice";

export const loginUser = (body, dispatch) => {
    dispatch(loginUserRequest())
    axios.post("http://localhost:3001/api/v1/user/login", body)
    .then(res => {
        console.log(res.data);
       getProfile(res.data.body.token, dispatch);
    })
    .catch(() => {
        console.log('1');
        dispatch(loginUserFailed());
    })

}
export const getProfile = (token, dispatch) => {
    dispatch(loginUserRequest())
    axios.post("http://localhost:3001/api/v1/user/profile", null, { headers: {Authorization: "Bearer " + token}})
    .then(res => {
        const body = { token: token, user: res.data.body};
       dispatch(loginUserSuccess(body))
    })
    .catch(() => {
        console.log('2');
        dispatch(loginUserFailed());
    })

}

export const updateUser = (firstName, lastName, token) => {
    return async (dispatch) => {
      dispatch(loginUserRequest());
  
      try {
        const response = await axios.put(
          "http://localhost:3001/api/v1/user/profile",
          { firstName, lastName },
          { headers: { Authorization: `Bearer ${token}` } }
        );
  
        const body = { token, user: response.data.body };
        dispatch(loginUserSuccess(body));
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        dispatch(loginUserFailed());
      }
    };
  };