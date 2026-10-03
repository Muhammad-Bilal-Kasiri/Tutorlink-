export default function WhyChooseUs() {
  const items = [
    { icon: '🏠', title: 'Verified Tutors', desc: 'Every tutor goes through a complete verification process.' },
    { icon: '🎯', title: 'Suitable Matching', desc: 'We match tutors based on your child\'s needs and area.' },
    { icon: '📊', title: 'Feedback System', desc: 'Continuous feedback to ensure quality education.' },
  ]

  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Trust, quality, and safety — that's TutorLink.</p>
        <div className="row" style={{ marginTop: 30 }}>
          {items.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div style={{ display: 'flex', gap: 15 }}>
                <div className="why-icon">{item.icon}</div>
                <div>
                  <h4 style={{ marginBottom: 6, fontSize: '1.1rem' }}>{item.title}</h4>
                  <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}