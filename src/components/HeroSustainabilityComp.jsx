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
            
            <p className="mb-6">
              We have full-fledged design studio which stays up-to-date with the rapidly changing fashion world and specializes in embroidery and bead work. We make sure that we have the best designers and skilled or semi-skilled workers working with us.
            </p>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;