import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ marginBottom: 20 }}>
            <img src="/logo.png" alt="TutorLink" style={{ height: 50, marginBottom: 12 }} />
            <p style={{ fontSize: 14 }}>
              Connecting students with trusted tutors across Pakistan.
            </p>
          </div>

          <div className="col-md-4" style={{ marginBottom: 20 }}>
            <h5>Quick Links</h5>
            <Link to="/tutors">Tutor Registration</Link>
            <Link to="/parents">Parent Registration</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="col-md-4" style={{ marginBottom: 20 }}>
            <h5>Contact</h5>
            <p style={{ fontSize: 14, marginBottom: 10 }}>Pakistan</p>
            <a href="https://wa.me/+923242106727?text=Hello%20TutorLink%2C%20I%20want%20you%20to%20find%20me%20a%20home%20tutor." target="_blank" rel="noreferrer">💬 WhatsApp Support</a>
            <a href="https://www.instagram.com/tutorlink.edu.pk?stkn=b2szemZwd3dlaHR0" target="_blank" rel="noreferrer">📷 Instagram</a>
            <a href="https://www.facebook.com/share/1LanueDWzP/" target="_blank" rel="noreferrer">📘 Facebook</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 TutorLink. All rights reserved.
        </div>
      </div>
    </footer>
  )
}