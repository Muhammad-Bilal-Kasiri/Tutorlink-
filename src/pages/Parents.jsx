import { useState } from 'react'
import { supabase } from '../supabase'
import emailjs from '@emailjs/browser'

export default function Parents() {
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
    // 1. Supabase mein save karein
    const { error } = await supabase.from('parents').insert([{
      name: form.name,
      whatsapp: form.whatsapp,
      email: form.email,
      student_name: form.student_name,
      class: form.class,
      area: form.area,
      subjects: form.subjects,
      timing: form.timing,
      gender: form.gender,
      message: form.message
    }])

    if (error) throw error

    // 2. EmailJS se email bhejein
    await emailjs.send(
      '@ABDvilliers',      // Step 2 wala Service ID
      'template_lejpqsq',     // Step 3 wala Template ID
      { ...form, form_type: 'Parent Request' },
      'j9ZVzJ1i3qe68UrIf'       // Step 4 wali Public Key
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
        <h1 style={{ fontSize: '2rem', marginBottom: 15, color: '#1a2b5c' }}>Request Submitted!</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Thank you for contacting <strong>TutorLink</strong>.<br />
          We have received your request and our team will contact you on WhatsApp shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({}) }}
          className="btn-orange"
          style={{ marginTop: 30, padding: '12px 30px', fontSize: '1rem' }}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  // 📝 FORM
  return (
    <div className="container" style={{ padding: '60px 15px', maxWidth: 800 }}>
      <h1 className="section-title">Find a Tutor</h1>
      <p className="section-subtitle">Tell us about your child and we will match the perfect tutor.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <h4 style={{ marginBottom: 15 }}>Parent Information</h4>
        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="name" placeholder="Parent Name" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="whatsapp" placeholder="WhatsApp Number" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <h4 style={{ marginTop: 20, marginBottom: 15 }}>Student Information</h4>
        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="student_name" placeholder="Student Name" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="class" placeholder="Class" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="area" placeholder="Area" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="subjects" placeholder="Subjects" required onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="timing" placeholder="Preferred Timings" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
          <div className="col-12 col-md-4" style={{ marginBottom: 15 }}>
            <input type="text" name="gender" placeholder="Preferred Tutor Gender" onChange={handleChange} style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6 }} />
          </div>
        </div>

        <h4 style={{ marginTop: 20, marginBottom: 15 }}>Learning Needs</h4>
        <textarea
          name="message"
          placeholder="What difficulties does your child face?"
          rows="4"
          onChange={handleChange}
          style={{ width: '100%', padding: 10, border: '1px solid #cbd5e1', borderRadius: 6, marginBottom: 15 }}
        ></textarea>

        <button type="submit" className="btn-orange" disabled={loading} style={{ padding: '12px 30px', fontSize: '1.05rem' }}>
          {loading ? 'Submitting...' : 'Request a Tutor'}
        </button>
      </form>
    </div>
  )
}