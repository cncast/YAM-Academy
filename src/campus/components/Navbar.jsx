import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {
  const { status, startLogout, loggedUser } = useAuthStore();
  const callLogout = (event)=>{
    event.preventDefault();
    startLogout();
  };
  const ifLogout = <Link className="btn btn-outline-success" to="/login">LogIn</Link>;
  const ifLogin = <>
    <h6 className='mx-3'>{loggedUser?.name + ' ' + loggedUser?.lastname}</h6>
    <button className="btn btn-outline-success" onClick={callLogout}>LogOut</button>
  </>
  return (

    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to='home'>YAM Academy</Link>
        <form className="d-flex text-center centered-children" role="search">
          
          {
            status === 'authenticated' 
            ? ifLogin
            : ifLogout
          }
        </form>
      </div>
    </nav>
  )
}
