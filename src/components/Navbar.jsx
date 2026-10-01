import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Navbar({ variant = 'hero' }) {
  const light = variant === 'hero'
  return (
    <header className={`nav ${light ? 'nav-hero' : 'nav-plain'}`}>
      <div className="container nav-inner">
        <Logo light={light} dark={!light} />
        <nav className="nav-links" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/search">Courses</Link>
          <Link to="/creator">Creators</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/login" className="nav-signin">Sign In</Link>
          <Link to="/register" className="nav-join">Join Us</Link>
          <button className="nav-bag" aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
