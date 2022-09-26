import { useDispatch, useSelector } from "react-redux"
import { academyApi } from "../api";
import { dateToSap } from "../helpers";
import { onLoadOppenedSections, onEnrollSection, onCancelSection, onCheckingSections } from "../store/section/sectionSlice";

export const useSectionStore = () => {
  const { status, opennedSections } = useSelector( state => state.sections );
  const dispatch = useDispatch();

    const startLoadOppenedSection = async()=>{
      try {
        dispatch( onCheckingSections() );
        setTimeout(async()=>{
          const { data } = await academyApi.get('/section/getOppenedSections');
          dispatch ( onLoadOppenedSections(data.sections) );
        }, 500)
      } catch (error) {
        console.log(error);
      }
    };


    const startEnrollSection = async({sectionId, callback})=>{
      try {
        const { data } = await academyApi.post('/section/enroll', {sectionId});
        if(data.enrolled){
          dispatch ( onEnrollSection({sectionId}) );
        }
        callback({messageText: 'Seccion matriculada con exito'});
      } catch (error) {
        console.log(error);
        callback({messageType: 'error', messageText: 'Hubo un error al intentar matricular la seccion'});
      }
    };


    const startCancelSection = async({sectionId, callback})=>{
      try {
        const { data } = await academyApi.post('/section/cancel', {sectionId});
        if(data.canceled){
          dispatch ( onCancelSection({sectionId}) );
          callback({messageText: 'Seccion cancelada con exito'});
        }else{
          callback({messageType: 'error', messageText: 'Hubo un error al intentar cancelar la seccion'});
        }
      } catch (error) {
        callback({messageType: 'error', messageText: 'Hubo un error al intentar cancelar la seccion'});
        console.log(error);
      }
    };


    const startCreateSection = async(sectionForm, callback)=>{
      try {

        const objToPost = {
          ...sectionForm,
          startDate: dateToSap(sectionForm.startDate),
          endDate: dateToSap(sectionForm.endDate),
          daysOfWeek: ['L', 'M', 'Mi', 'J', 'V'].filter((d)=> sectionForm.daysOfWeek[d])
        }
        const { data } = await academyApi.post('/section/create', objToPost);
        if(data.created){
          callback({messageText: 'Seccion creada con exito'});
        }else{
          callback({messageType: 'error', messageText: 'Hubo un error al intentar crear la seccion'});
        }
      } catch (error) {
        callback({messageType: 'error', messageText: 'Hubo un error al intentar crear la seccion'});
        console.log(error);
      }
    };


  return {
    //methods
    startLoadOppenedSection,
    startEnrollSection,
    startCancelSection,
    startCreateSection,

    //props
    status, 
    opennedSections
  }
}
