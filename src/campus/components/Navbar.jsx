import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (

    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to='home'>YAM Academy</Link>
        <form className="d-flex" role="search">
          <Link className="btn btn-outline-success" to="/login">LogIn</Link>
        </form>
      </div>
    </nav>
  )
}
