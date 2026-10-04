import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p className="section-subtitle">
          Whether you're a teacher looking for tuitions or a parent searching for the perfect tutor — we've got you covered.
        </p>

        <div className="cta-buttons">
          <Link
            to="/tutors"
            className="btn-outline-navy"
            style={{ textDecoration: 'none' }}
          >
            I'm a Teacher
          </Link>
          <Link
            to="/parents"
            className="btn-orange"
            style={{ textDecoration: 'none' }}
          >
            I Need a Tutor
          </Link>
        </div>
      </div>
    </section>
  )
}