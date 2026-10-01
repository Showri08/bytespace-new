import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import './Auth.css'

export default function Login() {
  return (
    <div className="auth-page grid-bg">
      <div className="auth-shell">
        <div className="auth-left">
          <Logo light />
          <h1>Sign in with ease</h1>
          <p>
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
          <div className="auth-collage">
            <img src="/assets/login-collage.jpg" alt="" />
            <img className="auth-shape s1 float" src="/assets/torus-lime.png" alt="" />
            <img className="auth-shape s2 float-delay" src="/assets/pyramid-lime.png" alt="" />
            <img className="auth-shape s3 float" src="/assets/squiggle-white.png" alt="" />
          </div>
        </div>

        <div className="auth-card">
          <p className="auth-eyebrow">Sign In</p>
          <h2>Welcome Back</h2>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
                Sign In
              </button>
            </div>
          </form>
          <div className="auth-or">
            <span>or</span>
          </div>
          <div className="social-row">
            <button type="button" aria-label="Facebook" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V6h-3c-2 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
              </svg>
            </button>
            <button type="button" aria-label="Google" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.7c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4C20.8 17.6 22 15.1 22 12.2z" />
                <path fill="#34A853" d="M12 22c2.8 0 5.1-.9 6.8-2.5l-3.4-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H2.9v2.7C4.6 19.8 8 22 12 22z" />
                <path fill="#FBBC05" d="M6.4 13.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.5H2.9C2.3 8.8 2 10.4 2 12s.3 3.2.9 4.5l3.5-2.7z" />
                <path fill="#EA4335" d="M12 5.9c1.5 0 2.9.5 4 1.5l3-3C17.1 2.7 14.8 1.8 12 1.8 8 1.8 4.6 4 2.9 7.5l3.5 2.7C7.2 7.8 9.4 5.9 12 5.9z" />
              </svg>
            </button>
          </div>
          <p className="auth-switch">
            New user? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
