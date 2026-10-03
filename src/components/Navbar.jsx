import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="nav-inner">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="TutorLink" style={{ height: 45 }} />
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/parents">For Parents</Link>
            <Link to="/tutors">Become a Tutor</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="nav-buttons">
             <Link to="/parents" className="btn-orange" style={{ textDecoration: 'none' }}>
              Find a Tutor
            </Link>
            <Link to="/tutors" className="btn-outline-navy" style={{ textDecoration: 'none' }}>
              I'm a Teacher
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  )
}