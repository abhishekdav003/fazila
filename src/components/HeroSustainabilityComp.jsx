import React from 'react';

const SustainabilitySection = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background image */}
      <div 
  className="absolute top-0 left-9 right- w-full h-full bg-left bg-no-repeat bg-fit"
  style={{
    backgroundImage: 'url("/sustain.jpeg")',  // ✅ must use url()
  }}
></div>

      
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-end">
          {/* Content box with semi-transparent background */}
          <div className="w-full md:w-1/2 lg:w-5/12 bg-gray-900 bg-opacity-75 p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6">Sustainability</h2>
            <h3 className='text-xl font-semibold mb-2'>A Cutting-Edge Design Studio Mastering Fashion's Evolution</h3>
            
            <p className="mb-6">
              At our design studio, we blend creativity with craftsmanship to stay ahead in the fast-paced world of fashion. Specializing in intricate embroidery and exquisite beadwork, we bring timeless artistry to contemporary designs. Our teams consists of top-tier designers and highly skilled artisans, ensuring every piece reflects precision, innovation, and unparalleled quality.
            </p>
            <p>From concept of creation, we transform visions into wearable masterpieces.</p>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;