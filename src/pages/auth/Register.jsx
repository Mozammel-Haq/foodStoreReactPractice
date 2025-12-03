const Register = () => {
  return (
    <>
<main className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Create Account</h2>
            <p className="text-muted">Join FreshBite today</p>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="user@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="********" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="********" required />
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="terms" required />
              <label className="form-check-label small" htmlFor="terms">I agree to the <a href="#">Terms &amp; Conditions</a></label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="small text-muted">
              Already have an account?
              <a href="login.html" className="fw-bold text-primary">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Register