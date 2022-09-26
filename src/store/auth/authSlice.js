import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      status: 'not-authenticated', //authenticated, checking
      loggedUser: null,
   },
   reducers: {
      onLogin: (state, { payload } ) => {
         state.status = 'authenticated';
         state.loggedUser = payload;
      },
      onLogout: (state) => {
         state.status = 'not-authenticated';
         state.loggedUser = null;
      },
      onChecking: (state, {payload})=>{
         state.status = 'checking';
         state.loggedUser = null;
      }
   }
});
export const { onLogin, onChecking, onLogout } = authSlice.actions;