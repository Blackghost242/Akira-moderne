import React from 'react'

const Header = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" onClick={() => scrollToSection('hero')}>
            <img
              src="/images/Akilogo.png"
              alt="Logo Infographie"
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-dark-gray transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-gray transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-gray transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col space-y-4 pt-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300 block w-full text-left"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300 block w-full text-left"
              >
                À propos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300 block w-full text-left"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300 block w-full text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-dark-gray font-montserrat font-semibold text-lg hover:text-primary transition-colors duration-300 block w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
