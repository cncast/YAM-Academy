
export const SectionItem = ({section = {}}) => {
  return (
    <div className="card mb-3 section-card text-bg-light ">
        <div className="row g-0">
            <div className="col-md-5">
            <img src="https://www.cursosfemxa.es/images/stories/virtuemart/product/frances-a13.jpg" 
            className="img-fluid rounded-start" alt="A1"/>
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">Mme Yennifer Machado</h5>
                    <p className="card-text">
                        <small>Licenciada en lenguas extrangeras con orientacion al frances, apasionada por el emprendedurismo y una adulta soñadora.</small>
                    </p>
                    <p className="card-text mb-0">
                        <span className="m-1">L</span>
                        <span className="m-1">Mi</span>
                        <span className="m-1">J</span>
                        <span className="m-1">V</span>
                        <span className="m-1"> · </span>
                        <span className="ml-2">16:00pm</span>
                        <span className="ml-2"> · 1h</span>
                    </p>
                    <p className="card-text mb-0">
                        <small className="text-muted">Inicia: 01/09/2022</small>
                    </p>
                    <p className="card-text mb-0">
                        <small className="text-muted">Finaliza: 01/12/2022</small>
                    </p>
                    <div className="justify-content-md-end">
                        <small className="text-muted">14 cupos</small>
                        <button className="btn btn-primary btn-sm m-2">Matricular</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12" style={{backgroundColor: 'gray'}}>

            
        </div>
    </div>
  )
}
