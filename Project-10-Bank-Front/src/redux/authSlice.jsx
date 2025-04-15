import { createSlice } from '@reduxjs/toolkit';


  const authSlice = createSlice({
    name: 'auth',
    initialState: {
      token: null,
      user: null,
      error: null,
      loading: false,
    },
    reducers: {
      loginUserRequest: (state) => {
        state.loading = true;
        state.error = null;
      },    
      loginUserSuccess: (state, actions) => {
        state.loading = false;
        state.token = actions.payload.token;
        state.user = actions.payload.user;
        localStorage.setItem('token', actions.payload.token);
        state.error = null;
      },  
      loginUserFailed: (state) => {

        state.loading = false;
        state.error = "Vos Identifiants ou votre mot de passe sont incorrectes."
      },

      logout: (state) => {
        localStorage.removeItem('token');
        state.token = null;
      },
    },
  });
  
  export const { logout, loginUserRequest, loginUserSuccess, loginUserFailed } = authSlice.actions;
  
  export default authSlice.reducer;