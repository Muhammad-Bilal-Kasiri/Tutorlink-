import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p className="section-subtitle">
          Whether you're a teacher looking for tuitions or a parent searching for the perfect tutor — we've got you covered.
        </p>
        <div style={{ marginTop: 30 }}>
          <Link
            to="/parents"
            className="btn-orange"
            style={{
              padding: '12px 28px',
              fontSize: '1.05rem',
              marginRight: 10,
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            I Need a Tutor
          </Link>
          <Link
            to="/tutors"
            className="btn-outline-navy"
            style={{
              padding: '12px 28px',
              fontSize: '1.05rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            I'm a Teacher
          </Link>
          
        </div>
      </div>
    </section>
  )
}