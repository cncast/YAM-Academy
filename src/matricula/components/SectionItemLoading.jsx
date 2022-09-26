
export const SectionItemLoading = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-1">
        <div className="card profile-card-5 placeholder-glow" style={{backgroundColor: '#F2F3F4'}}>
            <div className="card-body pt-0 mt-3">
                <div className="supder-absolute centered-children shadow">
                    <h5><i className="fas fa-language"/></h5>
                    &nbsp;
                    <span className="placeholder col-5">EN</span>
                </div>
                <div className="card-title">
                    &nbsp;&nbsp;
                    <h3 className="placeholder col-8"/>
                </div>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small className="col-9 placeholder"></small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small className="col-9 placeholder"></small>
                    </p>
                </div>
                <div className="row">
                    <p className="card-text mb-1 text-muted col-6">
                        <small className="col-9 placeholder"></small>
                    </p>
                    <p className="card-text mb-1 text-muted col-6">
                        <small className="col-9 placeholder"></small>
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
                                <small className="col-9 placeholder"></small>
                            </h6>
                            <h6 className="card-title col-3 p-2 text-center" style={{color: '#2c71b6'}}>
                                <i className="fas fa-hashtag"/>
                                &nbsp;
                                <small className="col-6 placeholder"></small>
                            </h6>

                            <h6 className="card-title col-6 btn mr-3" style={{color: '#229954'}}>
                                <i className="fas fa-rocket"/>
                                &nbsp; 
                                <small className="col-7 placeholder"></small>
                            </h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

  )
}
