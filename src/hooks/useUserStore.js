import { useDispatch, useSelector } from "react-redux"
import { academyApi } from "../api";
import { onLoadTutorList } from "../store/user/userSlice";

export const useUserStore = () => {
  const { tutorList } = useSelector( state => state.users );
  const dispatch = useDispatch();

    const startLoadTutor = async()=>{
      try {
        const { data } = await academyApi.get('/user/getTutors');
        dispatch ( onLoadTutorList(data.tutors));
      } catch (error) {
        console.log(error);
      }
    };

  return {
    //methods
    startLoadTutor,

    //props
    tutorList
  }
}
