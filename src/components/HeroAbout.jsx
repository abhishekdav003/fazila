import React from 'react';

const HeroAboutUsSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 px-8 py-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About us</h2>
          
          <p className="text-gray-600 mb-4">
            As trends evolve, so do the techniques to execute them. Fazilat Enterprises's embroidery division is equipped with modern sampling machines, skilled hand embroiderers, and Adda embroidery workers.
          </p>
          
          <p className="text-gray-600 mb-4">
            For computerized embroidery, we have established partnerships with various setups to ensure efficient sampling and production output.
          </p>
          
          <p className="text-gray-600 mb-6">
            Our designers and illustrators employ innovative thinking to create exquisite and sophisticated patterns. We utilize advanced design systems to achieve the desired results effectively.
          </p>
          
          {/* <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 uppercase text-sm tracking-wider transition-all">
            Explore More
          </button> */}
        </div>
        
        {/* Right Column - Circular Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="relative">
            {/* Main circular image */}
            <div className="w-64 h-64 rounded-full bg-center bg-no-repeat bg-cover"
                 style={{
                   backgroundImage: 'url(/about.jpg)',
                 }}>
            </div>
            
            {/* Smaller circular images (positioned absolutely) */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-center bg-no-repeat bg-cover opacity-50"
                 style={{
                   backgroundImage: 'url(/about2.jpg)',
                 }}>
            </div>
            
            <div className="absolute -bottom-8 -right-16 w-40 h-40 rounded-full bg-center bg-no-repeat bg-cover opacity-60"
                 style={{
                  backgroundImage: 'url(/about3.jpg)',
                 }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUsSection;