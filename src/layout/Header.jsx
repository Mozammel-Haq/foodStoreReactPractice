import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
       {/* Navbar */}
<nav className="navbar navbar-expand-lg sticky-top">
  <div className="container">
    <Link to='/' className="navbar-brand">
      <i className="fas fa-leaf me-2" />FreshBite
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-center">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/foods'>All Foods</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
                    <li class="nav-item cart-container">
              <Link class="nav-link" to='/cart'>
                <i class="fas fa-shopping-cart"></i>
                <span class="badge rounded-pill bg-danger ms-1 cart-number">0</span>
              </Link>
            </li>
        <li className="nav-item ms-lg-3">
          <Link className="btn btn-outline-primary btn-sm me-2" to='/login'>Login</Link>
          <Link className="btn btn-primary btn-sm" to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header