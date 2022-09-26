import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

const registerFormFields = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  password2: '',
  country: '',
  birthDate: '',
  gender: 'M'
}


export const RegisterPage = () => {
  const { name, lastname, email, password, password2, gender, onSelectChange,
      onInputChange, onDatepickerChange, country, birthDate } = useForm(registerFormFields);
  const { startRegister } = useAuthStore();
  const onSubmit = (event)=>{
    event.preventDefault();
    // console.log({name, lastname, email, password, password2, country, birthDate, gender});
    startRegister({name, lastname, email, password, password2, country, birthDate, gender});
  }
  return (
    <div className="container-fluid centered-children" style={{
      height : '98vh',
    }}>

      <div className="row centered-children">

        <div className="col-12">
          
          <h1 className="text-center mb-4">Registro</h1>
          <form onSubmit={onSubmit}>
            <div className="row mt-4">
              <div className="col-6">
                <input className="form-control fs-42 shadow" placeholder="Nombre"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6">
                <input className="form-control fs-42 shadow" placeholder="Apellidos"
                  name="lastname"
                  value={lastname}
                  onChange={onInputChange}
                />
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-8">
                <input type="email" className="form-control fs-42 shadow mt-2" placeholder="Correo"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-4 mt-2">
                <select className="form-control fs-42 shadow" placeholder="Genero"
                  name="gender"
                  value={gender}
                  onChange={onInputChange}
                >
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
            </div>


            
            
            <div className="row mt-2">
              <div className="col-6">
                <input type="password" className="form-control shadow mt-2" placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6">
                <input type="password" className="form-control shadow mt-2" placeholder="Confirmacion"
                  name="password2"
                  value={password2}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-6">
                <select 
                  className="form-control shadow mt-2" 
                  placeholder="Pais" 
                  onChange={onInputChange}
                  name="gender"
                  value="gender"
                >
                  <option value="Honduras">Honduras</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Panamá">Panamá</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="México">México</option>
                </select>
              </div>
              <div className="col-6">
                <DatePicker
                  className="form-control shadow mt-2"
                  placeholderText='Fecha de nacimiento'
                  type="date"
                  selected={birthDate}
                  onChange={(date) => onDatepickerChange(date, 'birthDate')}
                  maxDate={new Date()}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <button onClick={onSubmit} className="btn btn-info shadow mt-4 col-12">Registarme</button>
          </form>
          <p className="mt-1 px-2 mt-3">¿Ya tienes usuario? <Link to='/login'>Ingresar</Link></p>
        </div>

      </div>

    </div>
  )
}
