import React, { useState, useEffect, useRef } from 'react';

const ProductSection = () => {
  // Product data with product images
  const products = [
    {
      id: 1,
      image: "/products/product1.jpg",
      alt: "Satin Cami Top"
    },
    {
      id: 2,
      image: "/products/product2.jpg",
      alt: "Embroidered Shirt"
    },
    {
      id: 3,
      image: "/products/product3.jpg",
      alt: "Wide Leg Jeans"
    },
    {
      id: 4,
      image: "/products/product4.jpg",
      alt: "Denim Shorts"
    },
    {
      id: 5,
      image: "/products/product5.jpg",
      alt: "Leather Belt"
    },
    {
      id: 6,
      image: "/products/product6.jpg",
      alt: "Casual Boat Shoes"
    },
    {
      id: 7,
      image: "/products/product7.jpg",
      alt: "Lightweight Scarf"
    },
    {
      id: 8,
      image: "/products/product8.jpg",
      alt: "Structured Blazer"
    },
    {
      id: 9,
      image: "/products/product9.jpg",
      alt: "Graphic Print T-Shirt"
    },
    {
      id: 10,
      image: "/products/product10.jpg",
      alt: "Pleated Midi Skirt"
    },
    {
      id: 11,
      image: "/products/product11.jpg",
      alt: "Oversized Sunglasses"
    },
    {
      id: 12,
      image: "/products/product12.jpg",
      alt: "Minimalist Watch"
    }
  ];

  // State for controlling the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);
  const totalImages = products.length;
  const displayCount = 2; // Number of images to show at once

  // Auto-slide function
  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages - 1));
    }, 2000);
    
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [totalImages]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/3 mb-12 md:mb-0 pr-0 md:pr-6">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-6">Product Range</h2>
          <p className="text-gray-600 mb-10">
            Fashion evolves at lightning speed, and style knows no limits. While trends come 
            and go like the seasons, we ensure you stay effortlessly ahead. Our collections 
            are crafted to match the ever-changing demands of the fashion world, delivering 
            not just what's in vogue—but what truly deserves a place in your wardrobe.
          </p>
          <a 
            href="/product" 
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded transition-colors hover:bg-gray-700"
          >
            VIEW ALL
          </a>
        </div>
        
        {/* Right Side - Image Slideshow */}
        <div className="w-full md:w-2/3 relative overflow-hidden">
          <div 
            className="flex transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-1/2 flex-shrink-0 px-2">
                <div className="overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalImages - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;