import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo dark />
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" className="btn btn-lime">Search</button>
          </form>
          <p className="legal-note">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Browse</h4>
            <Link to="/search">Featured Courses</Link>
            <Link to="/search">Featured Categories</Link>
            <Link to="/search">Business</Link>
            <Link to="/search">IT</Link>
            <Link to="/search">Design</Link>
          </div>
          <div>
            <h4 className="sr-only">More</h4>
            <Link to="/search">Development</Link>
            <Link to="/search">Marketing</Link>
            <Link to="/search">Photography</Link>
            <Link to="/search">Finance</Link>
            <Link to="/search">Sport</Link>
          </div>
          <div>
            <h4>Platform</h4>
            <Link to="/register">Become a Creator</Link>
            <Link to="/creator">Affiliate Program</Link>
            <Link to="/login">Contact</Link>
            <Link to="/search">Help</Link>
            <Link to="/">About</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  )
}
