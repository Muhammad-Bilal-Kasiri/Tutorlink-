import { useState } from 'react'
import { supabase } from '../supabase'
import emailjs from '@emailjs/browser'

export default function Tutors() {
  const [form, setForm] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const { error } = await supabase.from('tutors').insert([{
      name: form.name,
      phone: form.phone,
      whatsapp: form.whatsapp,
      email: form.email,
      city: form.city,
      area: form.area,
      qualification: form.qualification,
      university: form.university,
      major: form.major,
      subjects: form.subjects,
      classes: form.classes,
      experience: form.experience,
      message: form.message
    }])

    if (error) throw error

    await emailjs.send(
      '@ABDvilliers',
      'template_lejpqsq',
      { ...form, form_type: 'Tutor Application' },
      'j9ZVzJ1i3qe68UrIf'
    )

    setSubmitted(true)
    setForm({})
  } catch (error) {
    alert('Error: ' + error.message)
  }
  setLoading(false)
  }


  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="container" style={{ padding: '100px 20px', maxWidth: 600, textAlign: 'center' }}>
        <div style={{ fontSize: 70, marginBottom: 20 }}>✅</div>
        <h1 style={{ fontSize: '2rem', marginBottom: 15, color: '#1a2b5c' }}>Application Submitted!</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Thank you for registering with <strong>TutorLink</strong>.<br />
          Our team will review your application and contact you soon on WhatsApp.
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: 20 }}>
          <strong>Note:</strong> Registration is 100% free. Only monthly fee applies after a student is assigned.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({}) }}
          className="btn-orange"
          style={{ marginTop: 30, padding: '12px 30px', fontSize: '1rem' }}
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  // 📝 FORM
  return (
    <div className="container" style={{ padding: '60px 15px', maxWidth: 800 }}>
      <h1 className="section-title">Become a Tutor</h1>
      <p className="section-subtitle">Register with TutorLink. 100% free. Only monthly fee, no additional charges.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <h4 style={{ marginBottom: 15 }}>Personal Information</h4>
        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="whatsapp" placeholder="WhatsApp Number" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="city" placeholder="City" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="area" placeholder="Area" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <h4 style={{ marginTop: 20, marginBottom: 15 }}>Education</h4>
        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="qualification" placeholder="Highest Qualification" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="university" placeholder="University / College" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="major" placeholder="Major / Subject" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <h4 style={{ marginTop: 20, marginBottom: 15 }}>Teaching Information</h4>
        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="subjects" placeholder="Subjects You Teach" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="classes" placeholder="Classes / Grades" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="experience" placeholder="Teaching Experience (years)" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <h4 style={{ marginTop: 20, marginBottom: 15 }}>Teaching Profile</h4>
        <textarea
          name="message"
          placeholder="Why do you want to teach? Describe your teaching style."
          rows="4"
          onChange={handleChange}
          style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6, marginBottom: 15 }}
        ></textarea>

        <button type="submit" className="btn-orange" disabled={loading} style={{ padding: '12px 30px', fontSize: '1.05rem' }}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}