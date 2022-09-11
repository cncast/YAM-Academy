import { Link } from 'react-router-dom'

export const ModuloCard = ({component}) => {
  const {name, description, path, iconClasses, color, isBuilding} = component;
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 centered-children'>
      <Link to={path} className="card text-bg-light shadow p-3 modulo-card nav-link" 
          style={{ height: '15em', width: '17em', margin: '1em'}}
      >
          <div className="card-body">
            <span style={{fontSize: '50px', color: color}}>
              <i className={iconClasses}/>
            </span>


            <span style={{
              fontSize: '25px', 
              marginTop: '-35px', 
              marginLeft: '45px', 
              position: 'absolute',
              backgroundColor: isBuilding ? '#F1E22B' : '#CDCDCD',
              width: '55px'
            }}>
              <i className={ isBuilding ? 'fa-solid fa-person-digging' : 'fa-solid fa-ghost'}/>
            </span>



              <h5 className="card-title">{name}</h5>
              <p className="card-text" style={{fontSize: '12px'}}>{description}</p>
          </div>
      </Link>
    </div>
  )
}
