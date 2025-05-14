import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="flex items-center">
            <img 
              src="/sustain.jpeg" 
              alt="Sonu Exim Pvt Ltd" 
              className="h-12 w-12 rounded-full shadow-sm"
            />
            <span className={`ml-2 font-bold text-lg hidden sm:block transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Falilat Enterprises
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={`font-medium hover:text-blue-600 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`font-medium hover:text-blue-600 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className={`font-medium hover:text-blue-600 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className={`font-medium hover:text-blue-600 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`font-medium hover:text-blue-600 transition-all ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X className="w-6 h-6" /> : 
            <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <nav>
              <ul className="space-y-3 py-3">
                <li>
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/product" 
                    className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/sustainability" 
                    className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;