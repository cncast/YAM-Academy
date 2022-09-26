import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      tutorList: []
   },
   reducers: {
      onLoadTutorList: (state, { payload } ) => {
         state.tutorList = payload;
      },
   }
});
export const { onLoadTutorList } = userSlice.actions;