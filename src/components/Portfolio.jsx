import React, { useState } from 'react'

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const portfolioItems = [
    {
      id: 1,
      image: '/images/whatsapp-image-2025-09-19-at-04-39-46.jpeg',
      title: 'Identité visuelle',
      description: 'Logo et charte graphique'
    },
    {
      id: 2,
      image: '/images/Becky-brithday.png',
      title: 'Affiche anniversaire',
      description: 'Design print'
    },
    {
      id: 3,
      image: '/images/Aki2.jpg',
      title: 'Design réseaux sociaux',
      description: 'Campagne digitale'
    },
    {
      id: 4,
      image: '/images/Lylie-cuistot.jpg',
      title: 'Packaging',
      description: 'Design produit'
    },
    {
      id: 5,
      image: '/images/IMG-20250523-WA0098.jpg',
      title: 'Illustration',
      description: 'Création artistique'
    },
    {
      id: 6,
      image: '/images/zikzone.jpeg',
      title: 'Maquette web',
      description: 'Design d\'interface'
    }
  ]

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return

    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowRight':
        nextImage()
        break
      case 'ArrowLeft':
        prevImage()
        break
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id="portfolio" className="py-24 bg-light-gray scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-4 animate-slide-up">
          Mon Portfolio
        </h2>
        <p className="text-lg text-center text-text-color mb-16 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
          Découvrez une sélection de mes réalisations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md animate-zoom-in"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors z-10"
            >
              ×
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-primary transition-colors"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-primary transition-colors"
            >
              ›
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {portfolioItems.length}
            </div>

            {/* Main image */}
            <img
              src={portfolioItems[currentImageIndex].image}
              alt={portfolioItems[currentImageIndex].title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              <h3 className="text-lg font-bold">{portfolioItems[currentImageIndex].title}</h3>
              <p className="text-sm">{portfolioItems[currentImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
