import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <a href="/" className="flex items-center">
            <img 
              src="/sustain.jpeg" 
              alt="Sonu Exim Pvt Ltd" 
              className="h-12 w-12"
            />
          </a>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#about-us" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                About Us
              </a>
            </li>
            <li>
              <a href="#client" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Client
              </a>
            </li>
            <li>
              <a href="/product" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Products
              </a>
            </li>
            <li>
              <a href="#infrastructure" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Infrastructure
              </a>
            </li>
            <li>
              <a href="#sustainability" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Sustainability
              </a>
            </li>
            <li>
              <a href="#career" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Career
              </a>
            </li>
            <li>
              <a href="#contact-us" className={`hover:opacity-75 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;