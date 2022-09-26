import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const academyApi = axios.create({
    baseURL: VITE_API_URL
});

//TODO: adicionar interceptores para adicionar info a cada peticion
academyApi.interceptors.request.use(config=>{
    config.headers = {
        ...config.headers,
        'jwt': localStorage.getItem('jwt')
    }
    return config
})

export default academyApi;