import { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { useUserStore } from "../../hooks/useUserStore";

const sectionFormFields = {
    language: 'FR',
    level: 'A1',
    courseNumber: '1',
    tutor: '',
    daysOfWeek: {
        L: true,
        M: true,
        Mi: true,
        J: true,
        V: true
    },
    startDate: new Date(),
    endDate: new Date('2022-10-17'),
    hour: '1600',
    duration: '1h'
  };



export const CreateSection = ({ startCreateSection }) => {
    const {startLoadTutor, tutorList} = useUserStore();
    useEffect(() => {
        startLoadTutor();
    }, [])
    

    const { onResetForm, onInputChange, onDatepickerChange, onCheckboxChange, language, level, courseNumber, 
        tutor, startDate, endDate, hour, duration, daysOfWeek} = useForm(sectionFormFields);
    const callbackFunction = ({messageType, messageText}) => {
        if(!messageType || messageType==='success'){
            onResetForm();
        }
        Swal.fire({
            text: messageText || 'Accion realizada con sucesso',
            icon: messageType || 'success',
            timer: 2500,
            showConfirmButton: false
          })
    }
    const onSubmitSection = (event)=>{
        event.preventDefault();
        startCreateSection({language, level, courseNumber, tutor,
            startDate, endDate, hour, duration, daysOfWeek}, callbackFunction);
    }




  return (
    <div className="row">
        <form onSubmit={onSubmitSection} className="col-12 shadow px-4 py-4">
            <h5 className="mx-5">Crear un nueva seccion</h5>
            <div className="row mt-4 centered-children">
                <label className="col-3">Idioma:</label>
                <div className="col-9">
                    <select 
                        className="form-control" 
                        placeholder="Idioma"
                        name="language"
                        value={language}
                        onChange={onInputChange}
                    >
                        <option value="FR">Francés</option>
                        <option value="EN">Inglés</option>
                        <option value="PR">Portugués</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3 centered-children">
                <label className="col-3">Nivel:</label>
                <div className="col-3">
                    <select 
                        className="form-control" 
                        placeholder="Nivel"
                        name="level"
                        value={level}
                        onChange={onInputChange}
                    >
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                    </select>
                </div>
                <label className="col-3 text-center">Curso:</label>
                <div className="col-3">
                    <select 
                        className="form-control" 
                        placeholder="Curso"
                        name="courseNumber"
                        value={courseNumber}
                        onChange={onInputChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div className="row mt-4 centered-children">
                <label className="col-3 text-center">Tutor:</label>
                <div className="col-9">
                    <select 
                        className="form-control" 
                        placeholder="Tutor"
                        name="tutor"
                        value={tutor}
                        onChange={onInputChange}
                    >
                        <option value={null}>Seleccione un tutor</option>
                        {
                            tutorList.map((t)=>{
                                return <option key={t._id} value={t._id}>{t.name + ' ' + t.lastname}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row mt-4 centered-children">
                <label className="col-3 text-center">Dias:</label>
                <div className="col-8">
                    <div className="row" name="daysOfWeek">
                        <div className="form-check col-2">
                            <input className="form-check-input" type="checkbox" value="L" id="flexCheckDefault" 
                                onChange={(event) => onCheckboxChange(event, daysOfWeek)}
                                checked={daysOfWeek['L']}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">L</label>
                        </div>
                        <div className="form-check col-3">
                            <input className="form-check-input" type="checkbox" value="M" id="flexCheckDefault"
                                onChange={(event) => onCheckboxChange(event, daysOfWeek)}
                                checked={daysOfWeek['M']}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">M</label>
                        </div>
                        <div className="form-check col-3">
                            <input className="form-check-input" type="checkbox" value="Mi" id="flexCheckDefault"
                                onChange={(event) => onCheckboxChange(event, daysOfWeek)}
                                checked={daysOfWeek['Mi']}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Mi</label>
                        </div>
                        <div className="form-check col-2">
                            <input className="form-check-input" type="checkbox" value="J" id="flexCheckDefault"
                                onChange={(event) => onCheckboxChange(event, daysOfWeek)}
                                checked={daysOfWeek['J']}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">J</label>
                        </div>
                        <div className="form-check col-2">
                            <input className="form-check-input" type="checkbox" value="V" id="flexCheckDefault"
                                onChange={(event) => onCheckboxChange(event, daysOfWeek)}
                                checked={daysOfWeek['V']}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">V</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mt-4 centered-children">
                <label className="col-4 col-lg-2 text-center">Inicio:</label>
                <div className="col-8 col-lg-4">
                    <ReactDatePicker
                        className="form-control shadow mt-2"
                        placeholderText='Fecha inicio'
                        type="date"
                        selected={startDate}
                        onChange={(date) => onDatepickerChange(date, 'startDate')}
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <label className="col-4 col-lg-2 text-center">Fin:</label>
                <div className="col-8 col-lg-4 ">
                    <ReactDatePicker
                        className="form-control shadow mt-2"
                        placeholderText='Fecha Fin'
                        type="date"
                        selected={endDate}
                        onChange={(date) => onDatepickerChange(date, 'endDate')}
                        minDate={new Date()}
                        dropdownMode="select"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            
            <div className="row mt-1 centered-children">
                <label className="col-4 col-md-2 text-center">Hora:</label>
                <div className="col-8 col-md-3">
                    <input className="form-control shadow mt-2" placeholder="HHMM"
                        name="hour"
                        value={hour}
                        onChange={onInputChange}
                    />
                </div>
                <label className="col-4 text-center">Duracion:</label>
                <div className="col-8 col-md-3">
                    <input className="form-control shadow mt-2" placeholder="Duracion"
                        name="duration"
                        value={duration}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            
            <div className="row mt-4 px-5 centered-children">
                <button onClick={onSubmitSection} className="btn btn-primary btn-lg">Crear seccion</button>
            </div>
        </form>
    </div>
  )
}
