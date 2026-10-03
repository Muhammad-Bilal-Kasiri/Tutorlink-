export default function Contact() {
  return (
    <div className="container" style={{ padding: '60px 15px', maxWidth: 800 }}>
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">We are here to help you. Reach out anytime.</p>

      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-4" style={{ marginBottom: 20 }}>
          <div className="step-card" style={{ textAlign: 'center', padding: 30 }}>
            <div style={{ fontSize: 40 }}>💬</div>
            <h4 style={{ marginTop: 15 }}>WhatsApp</h4>
            <p style={{ color: '#64748b', fontSize: 14 }}>Fastest way to reach us</p>
            <a
              href="https://wa.me/+923242106727?text=Hello%20TutorLink%2C%20I%20want%20you%20to%20find%20me%20a%20home%20tutor."
              target="_blank"
              rel="noreferrer"
              className="btn-orange"
              style={{ display: 'inline-block', textDecoration: 'none', marginTop: 10 }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="col-md-4" style={{ marginBottom: 20 }}>
          <div className="step-card" style={{ textAlign: 'center', padding: 30 }}>
            <div style={{ fontSize: 40 }}>📧</div>
            <h4 style={{ marginTop: 15 }}>Email</h4>
            <p style={{ color: '#64748b', fontSize: 14 }}>info@tutorlink.pk</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tutorlink.edu.pk@gmail.com&su=TutorLink%20Inquiry"
              className="btn-outline-navy"
              style={{ display: 'inline-block', textDecoration: 'none', marginTop: 10 }}
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="col-md-4" style={{ marginBottom: 20 }}>
          <div className="step-card" style={{ textAlign: 'center', padding: 30 }}>
            <div style={{ fontSize: 40 }}>📱</div>
            <h4 style={{ marginTop: 15 }}>Social Media</h4>
            <p style={{ color: '#64748b', fontSize: 14 }}>Follow us</p>
            <div style={{ marginTop: 10 }}>
              <a href="https://www.instagram.com/tutorlink.edu.pk?stkn=b2szemZwd3dlaHR0" target="_blank" rel="noreferrer" style={{ marginRight: 10, textDecoration: 'none', color: '#f97316' }}>Instagram</a>
              <a href="https://www.facebook.com/share/1LanueDWzP/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#f97316' }}>Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}