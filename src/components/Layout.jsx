import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import '../pages/Home.css'

export default function Layout({ children }) {
  return (
    <div className="page">
      {children}
      <Footer />
    </div>
  )
}

export function PageHero({ children, tall }) {
  return (
    <section className={`page-hero grid-bg ${tall ? 'page-hero-tall' : ''}`}>
      <Navbar variant="hero" />
      {children}
    </section>
  )
}
