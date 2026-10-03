export default function HowItWorks() {
  const teacherSteps = [
    { icon: '📘', title: 'Register', desc: 'Fill out a quick form. 100% free.' },
    { icon: '👥', title: 'Get Matched', desc: 'We share your profile with parents in your area.' },
    { icon: '✅', title: 'Start Teaching', desc: 'Take a demo class. Start earning on your terms.' },
  ]

  const parentSteps = [
    { icon: '📘', title: 'Register', desc: 'Tell us your class, subjects, and preferred area. 100% free. Only monthly fee, no additional charges.' },
    { icon: '👥', title: 'Get Matched', desc: 'Get the best tutors near you. Free demo classes.' },
    { icon: '✅', title: 'Confirm & Learn', desc: 'Once satisfied, confirm your tutor and start learning.' },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Simple steps for teachers and parents.</p>

        <h4 style={{ textAlign: 'center', color: '#f97316', marginTop: 60 }}>For Students / Parents / Guardian</h4>
        <div className="row" style={{ marginTop: 20 }}>
          {parentSteps.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="step-card">
                <div className="step-icon">{s.icon}</div>
                <div className="step-label-parent">STEP {i + 1}</div>
                <h4 style={{ marginTop: 10 }}>{s.title}</h4>
                <p style={{ color: '#64748b', fontSize: 14 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <br /><br />


        <h4 style={{ textAlign: 'center', color: '#14b8a6', marginTop: 40 }}>For Teachers</h4>
        <div className="row" style={{ marginTop: 20 }}>
          {teacherSteps.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="step-card">
                <div className="step-icon">{s.icon}</div>
                <div className="step-label-teacher">STEP {i + 1}</div>
                <h4 style={{ marginTop: 10 }}>{s.title}</h4>
                <p style={{ color: '#64748b', fontSize: 14 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}