import { getTutorPrefix } from "../../helpers/getTutorPrefix";

export const SectionRequestItem = ({section = []}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-1">
        <div className="card profile-card-5" style={{backgroundColor: '#2c71b6'}}>
            <div className="card-body pt-0 mt-3">
                <h5 className="card-title">
                    <i  style={{color: 'white'}} className="fas fa-person-chalkboard"/>
                    &nbsp;&nbsp;
                    <small style={{color: 'white'}}>Seccion Privada</small>
                </h5>
                <div className="row">
                    <p className="card-text mb-0 text-muted col-10">
                        <small style={{color: 'white'}}> · Horario ajustable</small>
                    </p>
                    <p className="card-text mb-0 text-muted col-10">
                        <small style={{color: 'white'}}> · Aprende a tu ritmo</small>
                    </p>
                    <p className="card-text mb-0 text-muted col-10">
                        <small style={{color: 'white'}}> · De 1 a 5 personas</small>
                    </p>
                </div>
                <div className="row centered-children">
                    <div className="d-flex justify-content-between mt-2 col-7 rounded-4 pt-2 shadow"
                        style={{backgroundColor: '#F4F9FE', marginBottom: '-30px'}}
                    >
                        <h6 className="col-12 btn btn-lg mr-3" style={{color: '#229954'}}>
                            <i className="fas fa-rocket"/>
                            &nbsp; <small>Solicitar</small>
                        </h6>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


  )
}
