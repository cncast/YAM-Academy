import { useDispatch, useSelector } from "react-redux"
import { academyApi } from "../api";
import { onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, loggedUser } = useSelector( state => state.auth );
  const dispatch = useDispatch();

    const startLogin = async({email, password})=>{
      try {
        const { data } = await academyApi.post('/auth', {email, password});
        localStorage.setItem('jwt', data.jwt);
        dispatch ( onLogin(data.user) );
      } catch (error) {
        console.log(error);
      }
    };
    
    const startRegister = async({name, lastname, email, password, password2, country, birthDate, gender})=>{
      try {
        const objToPost = {name, lastname, email, password, password2, country, birthDate, gender};
        // console.log(objToPost);
        const { data } = await academyApi.post('/auth/register', objToPost);
        console.log(data);
        localStorage.setItem('jwt', data.jwt);
        dispatch ( onLogin(data.user) );
      } catch (error) {
        console.log(error);
      }
    };

    const startLogout = ()=>{
      localStorage.removeItem('jwt');
      dispatch ( onLogout() );
    };

    const checkAuthToken = async()=>{
        try {
          const jwt = localStorage.getItem('jwt');
          if(!jwt) return dispatch( onLogout() );
          const { data } = await academyApi.post('/auth/renew');
          localStorage.setItem('jwt', data.jwt);
          dispatch( onLogin(data.user) );
        } catch (error) {
          localStorage.removeItem('jwt');
          console.log(error);
        }
    }



  return {
    //methods
    startLogin,
    startLogout,
    startRegister,
    checkAuthToken,

    //props
    status, 
    loggedUser
  }
}
