import { useState } from "react";
import { sapToReadableDate, getTutorPrefix } from "../../helpers";
import { useSectionStore } from "../../hooks/useSectionStore";
import Swal from 'sweetalert2';


export const SectionItem = ({section = {}}) => {
    const {tutor, language, startDate, endDate, daysOfWeek = [], hour, duration, 
            _id, level, courseNumber, enrolled} = section;
    const tutorPrefix = getTutorPrefix(language, tutor.gender);
    const {startEnrollSection, startCancelSection} = useSectionStore();
    const [isEnrolling, setIsEnrolling] = useState(false);
    
    const enableLoadingButton = () => {
        setIsEnrolling(true);
    }
    const disbaleLoadingButton = ({messageType, messageText}) => {
        setIsEnrolling(false);
        Swal.fire({
            text: messageText || 'Accion realizada con sucesso',
            icon: messageType || 'success',
            timer: 2500,
            showConfirmButton: false
          })
    }



    //VARIABLES HTML
    const dynamicButton = <h6 
        onClick={() => {
            enableLoadingButton();
            isEnrolling
            ? null
            : (
                enrolled 
                ? startCancelSection({sectionId: _id, callback: disbaleLoadingButton}) 
                : startEnrollSection({sectionId: _id, callback: disbaleLoadingButton}) 
            )
        }} 
        className={`card-title col-6 ${ isEnrolling ? '' : 'btn'} mr-3`} 
        style={{color: '#229954'}}
    >
        {
            isEnrolling
            ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            : (
                enrolled
                ? <i className="fas fa-thumbs-down"/>
                : <i className="fas fa-rocket"/>
            )
        }
        &nbsp; <small>{
            isEnrolling 
            ? 'Loading...'
            : (
                enrolled
                ? 'Cancelar'
                : 'Matricular'
            )
            }</small>
    </h6>;

    
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-1">
        <div className="card profile-card-5" style={{backgroundColor: '#F2F3F4'}}>
            <div className="card-body pt-0 mt-3">
                <div className="supder-absolute centered-children shadow">
                    <h5><i className="fas fa-language"/></h5>
                    &nbsp;
                    <h6>{language}</h6>
                </div>
                <h5 className="card-title">
                    <i className="fas fa-person-chalkboard"/>
                    &nbsp;&nbsp;
                    <small>{tutorPrefix + ' ' + tutor.lastname}</small>
                </h5>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small>Inicio: {sapToReadableDate(startDate)}</small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small>Fin: {sapToReadableDate(endDate)}</small>
                    </p>
                </div>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small>{daysOfWeek.join(' · ')}</small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small>{hour} · {duration}</small>
                    </p>
                        
                </div>
                <div className="row centered-children">
                    <div className="justify-content-between mt-2 col-10 rounded-4 shadow"
                        style={{backgroundColor: '#F4F9FE', marginBottom: '-30px'}}
                    >
                        <div className="row centered-children pt-2">
                            <h6 className="card-title col-3 p-2 text-center" style={{color: '#2c71b6'}}>
                                <i className="fas fa-ranking-star"/>
                                &nbsp;
                                <small>{level}</small>
                            </h6>
                            <h6 className="card-title col-3 p-2 text-center" style={{color: '#2c71b6'}}>
                                <i className="fas fa-hashtag"/>
                                &nbsp;
                                {courseNumber}
                            </h6>

                            {
                                dynamicButton
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


  )
}
