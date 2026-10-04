import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="nav-inner">

          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="TutorLink" style={{ height: 45 }} />
          </Link>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>

          <div className={`nav-menu ${open ? 'open' : ''}`}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/parents" onClick={() => setOpen(false)}>For Parents</Link>
            <Link to="/tutors" onClick={() => setOpen(false)}>Become a Tutor</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="nav-actions">
              <Link to="/parents" className="btn-orange" onClick={() => setOpen(false)}>
                Find a Tutor
              </Link>
              <Link to="/tutors" className="btn-outline-navy" onClick={() => setOpen(false)}>
                I'm a Teacher
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}