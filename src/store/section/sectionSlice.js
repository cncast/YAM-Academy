import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
   name: 'section',
   initialState: {
      opennedSections: [],
      status: 'checking', //loaded
      
   },
   reducers: {
      onCheckingSections: (state, action)=>{
         state.status = 'checking';
      },
      onLoadOppenedSections: (state, { payload } ) => {
        state.status = 'loaded';
        state.opennedSections = payload || [];
      },
      onEnrollSection: (state, {payload})=>{
         state.opennedSections = state.opennedSections.map((e)=>{
            if(e._id === payload.sectionId){
               e.enrolled = true;
            }
            return e;
         })
      },
      onCancelSection: (state, {payload})=>{
         state.opennedSections = state.opennedSections.map((e)=>{
            if(e._id === payload.sectionId){
               e.enrolled = false;
            }
            return e;
         })
      }
   }
});
export const { onLoadOppenedSections, onEnrollSection, onCancelSection, onCheckingSections } = sectionSlice.actions;