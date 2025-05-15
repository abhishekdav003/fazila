import { useState, useEffect } from 'react';
import { ArrowRight, Check, Globe, Factory, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
    <section className=" py-20  overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* About Header */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
            About <span className="text-indigo-600">Fazilat Enterprises</span>
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 text-gray-600 italic">
            Your Trusted Partner in Fashion & Apparel Manufacturing
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-indigo-500">
              <p className="text-gray-700 mb-6">
                Welcome to <span className="font-semibold">Fazilat Enterprises</span>, a leading 
                <span className="font-semibold"> apparel manufacturing and export company</span> dedicated to delivering 
                <span className="font-semibold"> high-quality fashion products</span> to clients worldwide. With years of expertise in the industry, 
                we specialize in <span className="font-semibold">designing, manufacturing, and exporting</span> premium garments, 
                textiles, and fashion accessories to global markets.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Who We Are
              </h3>
              <p className="text-gray-700 mb-6">
                Founded with a vision to <span className="font-semibold">blend tradition with innovation</span>, Fazilat Enterprises has grown into a trusted name 
                in the fashion and textile industry. Our commitment to <span className="font-semibold">excellence, sustainability, and ethical manufacturing</span> sets 
                us apart, making us a preferred partner for brands and retailers across 
                <span className="font-semibold"> North America, Europe, the Middle East, and beyond</span>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                What We Offer
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-indigo-600 flex-shrink-0">
                    <Check size={18} />
                  </span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Custom Apparel Manufacturing</span> – From concept to creation, we bring your designs to life with precision.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-indigo-600 flex-shrink-0">
                    <Check size={18} />
                  </span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Private Label & White Label Solutions</span> – Tailored fashion solutions for brands looking to expand their collections.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-indigo-600 flex-shrink-0">
                    <Check size={18} />
                  </span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Sustainable & Ethical Production</span> – Eco-friendly fabrics and responsible manufacturing practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-indigo-600 flex-shrink-0">
                    <Check size={18} />
                  </span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Global Export Expertise</span> – Seamless logistics and compliance with international standards.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Building Image */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/comp.jpg" 
                  alt="Fazilat Enterprises Headquarters" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg md:max-w-xs">
                <p className="text-sm font-light mb-1">MONTHLY PRODUCTION</p>
                <p className="text-2xl font-bold">500,000+ Pieces</p>
                <p className="text-xs opacity-75 mt-1">Expanding infrastructure yearly</p>
              </div>
            </div>

            <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-indigo-500">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Why Choose Fazilat Enterprises?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Award className="text-indigo-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Rigorous quality checks at every stage</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Clock className="text-indigo-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fast Turnaround</h4>
                    <p className="text-sm text-gray-600">Efficient production & on-time delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Factory className="text-indigo-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Competitive Pricing</h4>
                    <p className="text-sm text-gray-600">Cost-effective without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <Globe className="text-indigo-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Footprint</h4>
                    <p className="text-sm text-gray-600">Serving fashion brands worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-indigo-700 hover:shadow-lg"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <p className="mt-2 text-sm text-gray-600">Let's create fashion that inspires!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <Footer />
      </>
  );
}