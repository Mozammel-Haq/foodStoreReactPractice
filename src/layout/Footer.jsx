import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
{/* Footer */}
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-4">
        <h5><i className="fas fa-leaf me-2" />FreshBite</h5>
        <p>
          Fresh, healthy, and delicious food delivered straight to your
          doorstep.
        </p>
      </div>
      <div className="col-md-2 mb-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to='/' className="footer-link">Home</Link></li>
          <li><Link to='/foods' className="footer-link">Menu</Link></li>
          <li><Link to='/about' className="footer-link">About Us</Link></li>
        </ul>
      </div>
      <div className="col-md-2 mb-4">
        <h5>Account</h5>
        <ul className="list-unstyled">
          <li><Link to='/login' className="footer-link">Login</Link></li>
          <li><Link to='/register' className="footer-link">Register</Link></li>
        </ul>
      </div>
      <div className="col-md-4 mb-4">
        <h5>Newsletter</h5>
        <form className="d-flex">
          <input className="form-control me-2" type="email" placeholder="Your email" />
          <button className="btn btn-primary" type="submit">Join</button>
        </form>
      </div>
    </div>
    <hr className="border-secondary mt-4" />
    <div className="text-center text-muted small">
      © 2025 FreshBite Food Store.
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer