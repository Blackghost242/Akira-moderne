import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-16 relative animate-slide-up">
          À propos de moi
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></div>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <div className="flex-1 animate-slide-right">
            <img
              src="/images/Akilogo.png"
              alt="Mon portrait"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 animate-slide-left">
            <div className="space-y-6">
              <p className="text-lg text-text-color leading-relaxed">
                Je suis un infographiste passionné dans la création de designs visuels percutants. Mon expertise couvre la conception d'identités visuelles, d'affiches, de supports digitaux et bien plus.
              </p>
              <p className="text-lg text-text-color leading-relaxed">
                Ma philosophie de design repose sur l'équilibre entre esthétisme et fonctionnalité. Chaque élément que je crée a un objectif précis : communiquer votre message de manière claire et mémorable.
              </p>
              <p className="text-lg text-text-color leading-relaxed">
                Travaillons ensemble pour donner vie à vos idées à travers des créations visuelles qui marquent les esprits et atteignent vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
