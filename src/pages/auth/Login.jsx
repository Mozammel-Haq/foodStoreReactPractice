import { useState } from "react"
import { useUser } from "../../contexts/userContext"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const {login} = useUser()
  const navigate = useNavigate()
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await login(user.email, user.password); // wait for API response
    if (result.success) {
      console.log("Login Success", result.data);
      navigate('/about');
    } else {
      console.log("Login Failed:", result.error);
    }
  } catch (err) {
    console.error("Login Error:", err);
  }
};


  return (
    <>
<main className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome Back</h2>
            <p className="text-muted">Login to manage your orders</p>
          </div>
          <form id="loginForm">
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" 
              name="email"
              onChange={handleChange}className="form-control" placeholder="user@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"  
              name="password"
              onChange={handleChange}
              className="form-control" placeholder="********" required />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label small" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="small text-decoration-none">Forgot password?</a>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100 py-2 mb-3">
              Login
            </button>
            {/* React: Auth Provider Placeholder */}
            {/* <div class="text-center my-3 text-muted small">OR</div>
                      <button class="btn btn-outline-dark w-100 py-2"><i class="fab fa-google me-2"></i> Continue with Google</button> */}
          </form>
          <div className="text-center mt-4">
            <p className="small text-muted">
              Don't have an account?
              <a href="register.html" className="fw-bold text-primary">Register</a>
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

export default Login