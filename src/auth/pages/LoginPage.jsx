import { Link } from 'react-router-dom';
import { useForm, useAuthStore } from '../../hooks';


const loginFormFields = {
  email: 'carlos@gmail.com',
  password: '123456'
};



export const LoginPage = () => {
  const { email, password, onInputChange } = useForm(loginFormFields);
  const { startLogin } = useAuthStore();
  const onSubmit = (event)=>{
    event.preventDefault();
    startLogin({email, password});
  }
  return (
    <div className="container-fluid centered-children" style={{
      height : '98vh',
      // backgroundColor: 'gainsboro'
    }}>

      <div className="row centered-children">

        <div className="col-12">
          
          <h1 className="text-center mb-4">Login</h1>
          <form onSubmit={onSubmit}>
            <input 
              className="form-control fs-42 shadow mt-4" 
              placeholder="Correo"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <input 
              type="password"
              className="form-control shadow mt-2" 
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <button onClick={onSubmit} className="btn btn-info shadow mt-4 col-12">Ingresar</button>
          </form>
          <p className="mt-4 px-2 text-center">Olvidaste tu contrasena?</p>
          <p className="px-2 text-center">¿Aun no tienes usuario? <Link to='/register'>Registrate</Link></p>
        </div>

      </div>

    </div>
  )
}
