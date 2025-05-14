import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlideshow = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Satin Cami Top",
      price: 49.99,
      description: "Elegant satin camisole with adjustable straps, perfect for layering or wearing alone.",
      image: "/products/product1.jpg",
      alt: "Satin Cami Top"
    },
    {
      id: 2,
      name: "Floral Embroidered Shirt",
      price: 65.99,
      description: "Yellow short-sleeve shirt with beautiful floral embroidery details.",
      image: "/products/product2.jpg",
      alt: "Embroidered Shirt"
    },
    {
      id: 3,
      name: "Wide Leg Jeans",
      price: 79.99,
      description: "Classic wide-leg jeans with a high waist for a retro-inspired silhouette.",
      image: "/products/product3.jpg",
      alt: "Wide Leg Jeans"
    },
    {
      id: 4,
      name: "Relaxed Denim Shorts",
      price: 45.99,
      description: "Comfortable denim shorts with a relaxed fit, perfect for casual summer days.",
      image: "/products/product4.jpg",
      alt: "Denim Shorts"
    },
    {
      id: 5,
      name: "Classic Leather Belt",
      price: 35.99,
      description: "Timeless leather belt with a vintage-inspired buckle, a versatile accessory.",
      image: "/products/product5.jpg",
      alt: "Leather Belt"
    },
    {
      id: 6,
      name: "Casual Boat Shoes",
      price: 59.99,
      description: "Comfortable boat shoes with leather uppers, perfect for casual everyday wear.",
      image: "/products/product6.jpg",
      alt: "Casual Boat Shoes"
    },
    {
      id: 7,
      name: "Lightweight Scarf",
      price: 29.99,
      description: "Elegant lightweight scarf that adds a touch of drama and style to any outfit.",
      image: "/products/product7.jpg",
      alt: "Lightweight Scarf"
    },
    {
      id: 8,
      name: "Structured Blazer",
      price: 89.99,
      description: "Tailored blazer with a structured silhouette, perfect for professional or casual looks.",
      image: "/products/product8.jpg",
      alt: "Structured Blazer"
    },
    {
      id: 9,
      name: "Graphic Print T-Shirt",
      price: 25.99,
      description: "Casual t-shirt featuring a unique graphic print design for a stylish statement.",
      image: "/products/product9.jpg",
      alt: "Graphic Print T-Shirt"
    },
    {
      id: 10,
      name: "Pleated Midi Skirt",
      price: 55.99,
      description: "Elegant pleated midi skirt that creates a feminine silhouette for any occasion.",
      image: "/products/product10.jpg",
      alt: "Pleated Midi Skirt"
    },
    {
      id: 11,
      name: "Oversized Sunglasses",
      price: 32.99,
      description: "Trendy oversized sunglasses with UV protection for a fashionable summer look.",
      image: "/products/product11.jpg",
      alt: "Oversized Sunglasses"
    },
    {
      id: 12,
      name: "Minimalist Watch",
      price: 75.99,
      description: "Elegant minimalist watch with a leather strap, the perfect accessory for any outfit.",
      image: "/products/product12.jpg",
      alt: "Minimalist Watch"
    }
  ];

  // State for controlling the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slideIntervalRef = useRef(null);
  const productsToShow = 4;
  const totalSlides = Math.ceil(products.length / productsToShow);

  // Handle prev/next navigation
  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : products.length - productsToShow
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex < products.length - productsToShow ? prevIndex + 1 : 0
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * productsToShow);
  };

  // Set up auto-slide
  useEffect(() => {
    if (!isHovering) {
      slideIntervalRef.current = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isHovering]);

  // Product card component
  const ProductCard = ({ product }) => (
    <div className="flex-none w-64 mx-2 bg-white rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
        <p className="text-red-500 font-semibold mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <a href="#" className="inline-block bg-gray-800 text-white py-2 px-4 rounded text-sm transition-colors hover:bg-gray-600">
          View Details
        </a>
      </div>
    </div>
  );

  // Get current active dot index
  const activeDotIndex = Math.floor(currentIndex / productsToShow);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium text-gray-800 mb-3">Product Range</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Fashion is changing fast and style is unlimited. It gets very difficult to keep up with the latest trend. 
          Fashion is transient as it changes like season. But we make sure that you get what you deserve.
        </p>
      </div>
      
      {/* Slideshow Container */}
      <div 
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Products */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 17}rem)` }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-gray-600 focus:outline-none"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-gray-600 focus:outline-none"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              index === activeDotIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-10">
        <a href="#" className="inline-block bg-gray-800 text-white py-3 px-8 rounded font-medium transition-colors hover:bg-gray-600">
          VIEW ALL
        </a>
      </div>
    </div>
  );
};

export default ProductSlideshow;