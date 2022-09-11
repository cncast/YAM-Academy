import { getTutorPrefix } from "../../helpers/getTutorPrefix";

export const SectionItem = ({section = []}) => {
    const {tutor, language, startDate, endDate, days, hour, duration, level, part} = section;
    console.log(section)
    const tutorPrefix = getTutorPrefix(language, tutor.gender);
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-1">
        <div className="card profile-card-5" style={{backgroundColor: '#F2F3F4'}}>
            <div className="card-body pt-0 mt-3">
                <h5 className="card-title">
                    <i className="fas fa-person-chalkboard"/>
                    &nbsp;&nbsp;
                    <small>{tutorPrefix + ' ' + tutor.lastName.split(' ')[0]}</small>
                </h5>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small>Inicio: {startDate}</small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small>Fin: {endDate}</small>
                    </p>
                </div>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small>{days.join(' · ')}</small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small>{hour} · {duration}h</small>
                    </p>
                        
                </div>
                <div className="row centered-children">
                    <div className="d-flex justify-content-between mt-2 col-11 px-4 rounded-4 pt-0 shadow "
                        style={{backgroundColor: '#F4F9FE', marginBottom: '-30px'}}
                    >
                        <div className="row centered-children pt-2">
                            <h6 className="card-title col-2 p-2" style={{color: '#0049A1'}}>
                                <i className="fas fa-language"/>
                                <small>{language}</small>
                            </h6>
                            <h6 className="card-title col-2 p-2" style={{color: '#A700B8'}}>
                                <i className="fas fa-ranking-star"/>
                                <small>{level}</small>
                            </h6>
                            <h6 className="card-title col-2 p-2" style={{color: '#E07A06'}}>
                                <i className="fas fa-hashtag"/>
                                &nbsp;
                                {part}
                            </h6>

                            <h6 className="card-title col-6 btn mr-3" style={{color: '#229954'}}>
                                <i className="fas fa-rocket"/>
                                &nbsp; <small>Matricular</small>
                            </h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


  )
}
