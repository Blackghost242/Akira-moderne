import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitMessage('Merci pour votre message ! Je vous répondrai très bientôt.')
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      setSubmitMessage('Une erreur s\'est produite. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-light-gray scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-4 animate-slide-up">
          Contactez-moi
        </h2>
        <p className="text-lg text-center text-text-color mb-16 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Discutons de votre projet
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-2 animate-slide-right">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('Merci') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.name ? 'top-0 text-sm text-primary' : 'top-3 text-gray-500'}`}
                >
                  Nom complet
                </label>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.email ? 'top-0 text-sm text-primary' : 'top-3 text-gray-500'}`}
                >
                  Adresse email
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.message ? 'top-0 text-sm text-primary' : 'top-3 text-gray-500'}`}
                >
                  Votre message
                </label>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex-1 animate-slide-left">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Suivez-moi</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565792021505"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://wa.me/069666582"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/akiradesign242/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://vm.tiktok.com/ZMSGePh5q/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
