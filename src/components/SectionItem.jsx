
export const SectionItem = ({section = {}}) => {
  return (

    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-5">
        <div className="card profile-card-5" style={{backgroundColor: '#F2F3F4'}}>
            <div className="card-img-block">
                <img 
                    className="card-img-top" 
                    src="https://cdn.pixabay.com/photo/2015/11/23/17/22/france-flag-1058699_960_720.jpg" 
                    alt="Card image cap"
                />
            </div>
            <div className="card-body pt-0">
            <h6 className="card-title">Mme Yennifer Machado</h6>
            <p className="card-text mb-1">
                <span className="span-tag">Frances I</span>
                <span>L</span>
                <span>·</span>
                <span>Mi</span>
                <span>·</span>
                <span>Vi</span>
                <span> · 16:00 · 1h</span>
            </p>
            <p className="card-text mb-1 text-muted">
                <small>Inicio: 12/09/2022</small>
            </p>
            <p className="card-text mb-1 text-muted">
                <small>Finaliza: 20/12/2022</small>
            </p>
            <div className="d-flex justify-content-between mt-3">
                <span className="card-text text-muted"><small>14 cupos</small></span>
                <button className="btn btn-outline-primary mr-3">Matricular</button>
            </div>
            </div>
        </div>
    </div>


  )
}
