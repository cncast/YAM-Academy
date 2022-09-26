import { Link } from 'react-router-dom'

export const AdminLinkCard = ({icon, title, to}) => {
  return (
    <Link  to={to} className="card mt-2 shadow modulo-card nav-link">
        <div className="card-content">
            <div className="card-body rounded" style={{backgroundColor: '#06A1E0'}}>
                <div className="text-center">
                    <i className={icon} style={{fontSize: '35px', color: 'white'}}/>
                    &nbsp;&nbsp;&nbsp;
                    <span className="block blue-grey darken-2" style={{color: 'white'}}>{title}</span>
                </div>
            </div>
        </div>
    </Link>
  )
}
