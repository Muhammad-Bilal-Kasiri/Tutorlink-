import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Connecting Students with <br />
        <span className="highlight">Trusted Tutors.</span>
      </h1>

      <div>
        <span className="hero-pill">✓ Verified Tutors</span>
        <span className="hero-pill">✓ Suitable Matches</span>
        <span className="hero-pill">✓ Feedback System</span>
      </div>

      <p className="sub">
        We understand your child's learning needs and connect you with a suitable tutor
        for a safe and effective learning experience.
      </p>

      <div className="hero-buttons">
        <Link
          to="/parents"
          className="btn-orange"
          style={{ padding: '12px 28px', fontSize: '1.05rem', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Find a Tutor
        </Link>
        <Link
          to="/tutors"
          className="btn-outline-navy"
          style={{ padding: '12px 28px', fontSize: '1.05rem', background: 'transparent', color: 'white', borderColor: 'white', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Register as Teacher
        </Link>
      </div>
    </section>
  )
}