import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import './Auth.css'

export default function Register() {
  return (
    <div className="auth-page grid-bg">
      <div className="auth-shell">
        <div className="auth-left">
          <Logo light />
          <h1>Sign up and come in</h1>
          <p>
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly,
            easily, and at no cost.
          </p>
          <div className="auth-collage">
            <img src="/assets/register-collage.jpg" alt="" />
            <img className="auth-shape s1 float" src="/assets/torus-lime.png" alt="" />
            <img className="auth-shape s2 float-delay" src="/assets/pyramid-lime.png" alt="" />
            <img className="auth-shape s3 float" src="/assets/squiggle-white.png" alt="" />
          </div>
        </div>

        <div className="auth-card register-card">
          <p className="auth-eyebrow">Create an Account</p>
          <h2>
            Welcome to
            <br />
            ByteSpace
          </h2>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Full Name
              <input type="text" placeholder="Jamie Davis" />
            </label>
            <label>
              Email
              <input type="email" placeholder="designer@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="********" />
            </label>
            <div className="auth-actions">
              <button type="submit" className="btn btn-lime">
                Continue
              </button>
            </div>
          </form>
          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
