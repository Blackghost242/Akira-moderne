import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-light-gray flex items-center justify-center text-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 leading-tight animate-slide-up">
            Transformez vos idées en{' '}
            <span className="text-primary">designs percutants</span>
          </h1>
          <p className="text-lg md:text-xl text-text-color mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Création d'infographies et designs visuels qui captivent et communiquent efficacement
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('portfolio')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-montserrat font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
            style={{animationDelay: '0.4s'}}
          >
            Voir mes réalisations
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
