import { useState } from 'react';
import { ChevronRight, Users, Sparkles, Scissors } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SonuEximManufacturing() {
  const [activeTab, setActiveTab] = useState('designing');

  const tabs = [
    {
      id: 'designing',
      label: 'Designing',
      icon: <Sparkles className="w-6 h-6" />,
      content: {
        title: 'Thoughtful Design Process',
        description: 'Our manufacturing journey begins with thoughtful brainstorming sessions, where our team of expert designers conceptualizes garment layouts and styles. We specialize in creating innovative designs in womenswear.',
        image: '/design.jpg'
      }
    },
    {
      id: 'embroidery',
      label: 'Hand Embroidery',
      icon: <Scissors className="w-6 h-6" />,
      content: {
        title: 'Exquisite Hand Embroidery',
        description: 'Exquisite hand embroidery is one of the key strengths of Fazilat enterprises. Our skilled artisans use needles, threads, beads, and sequins to create intricate and captivating designs across a variety of fabrics. They are proficient in a wide range of embroidery styles, including open work, outline work, counted thread work, and void work. Each technique brings a unique aesthetic, adding depth, elegance, and visual appeal to every garment we produce.',
        image: '/exquit.jpg'
      }
    },
    {
      id: 'sewing',
      label: 'Sewing Lines',
      icon: <Users className="w-6 h-6" />,
      content: {
        title: 'Advanced Sewing Production',
        description: 'Our sewing production unit is equipped with intelligent and digitized systems that enable real-time monitoring of both production and quality. These advanced technologies significantly enhance efficiency and consistency.',
        image: '/sewing.jpg'
      }
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <>
      <Header />
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-neutral-100 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-indigo-600">Fazilat Enterprises</span>
              <span className="block mt-2">Manufacturing Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              At Sonu Exim, we firmly believe that our people are invaluable assets that drive our successes. Our approach cultivates a secure and thriving atmosphere for our employees.
            </p>
            <div className="mt-8 flex justify-center">
              
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Manufacturing Infrastructure</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on maintaining state-of-the-art facilities that combine traditional craftsmanship with modern technology.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto py-2 space-x-8 mb-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {activeContent && (
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900">{activeContent.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{activeContent.description}</p>
              <div className="mt-6">
                
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Facilities</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We employ the best talent in the country across several disciplines and departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Corporate HQ</h3>
                <p className="mt-2 text-gray-600">
                  Our corporate offices in Bengaluru and Delhi NCR offer a progressive work environment where we encourage and support personal initiative and innovation.
                </p>
              </div>
            </div>

            {/* Production */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Production Units</h3>
                <p className="mt-2 text-gray-600">
                  Equipped with intelligent and digitized systems that enable real-time monitoring of both production and quality to enhance efficiency.
                </p>
              </div>
            </div>

            {/* Human Rights */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Human Rights</h3>
                <p className="mt-2 text-gray-600">
                  We strongly emphasize equitable employment practices and have launched numerous initiatives designed to empower our employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      </div>
      <Footer />
      </>
  );
}