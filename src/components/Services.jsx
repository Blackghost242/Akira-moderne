import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-pencil-alt',
      title: 'Logo & identité visuelle',
      description: 'Création de logos uniques et développement d\'identités visuelles complètes qui représentent parfaitement votre marque.'
    },
    {
      icon: 'fas fa-newspaper',
      title: 'Affiches & flyers',
      description: 'Conception de supports print percutants pour promouvoir vos événements, produits ou services efficacement.'
    },
    {
      icon: 'fas fa-share-alt',
      title: 'Design réseaux sociaux',
      description: 'Création de visuels adaptés aux plateformes sociales pour booster votre présence digitale et engager votre audience.'
    },
    {
      icon: 'fas fa-laptop',
      title: 'Maquettes web',
      description: 'Design d\'interfaces utilisateur intuitives et esthétiques pour sites web et applications mobiles.'
    }
  ]

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-4 animate-slide-up">
          Mes Services
        </h2>
        <p className="text-lg text-center text-text-color mb-16 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Des solutions créatives adaptées à vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-4">{service.title}</h3>
              <p className="text-text-color leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
