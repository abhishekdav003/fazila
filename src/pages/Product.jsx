import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CategoryProductRange() {
  // Product data array from your code
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
    },
    {
      id: 13,
      image: "/products/product13.jpg",
      alt: "Chunky Knit Sweater"
    },
    {
      id: 15,
      image: "/products/product15.jpg",
      alt: "Silk Scrunchie Set"
    },
    {
      id: 16,
      image: "/products/product16.jpg",
      alt: "Statement Earrings"
    },
    {
      id: 19,
      image: "/products/product19.jpg",
      alt: "High-Rise Leggings"
    },
    {
      id: 20,
      image: "/products/product20.jpg",
      alt: "Panama Hat"
    },
    {
      id: 21,
      image: "/products/product21.jpg",
      alt: "Slingback Heels"
    },
    {
      id: 22,
      image: "/products/product22.jpg",
      alt: "Linen Shirt Dress"
    },
    {
      id: 23,
      image: "/products/product23.jpg",
      alt: "Slim Fit Chinos"
    },
    {
      id: 24,
      image: "/products/product24.jpg",
      alt: "Beaded Bracelet Set"
    },
    {
      id: 25,
      image: "/products/product25.jpg",
      alt: "Textured Hair Clip"
    },
    {
      id: 26,
      image: "/products/product26.jpg",
      alt: "Printed Midi Dress"
    },
    {
      id: 27,
      image: "/products/product27.jpg",
      alt: "Cropped Denim Jacket"
    },
    {
      id: 28,
      image: "/products/product28.jpg",
      alt: "Platform Sandals"
    },
    {
      id: 29,
      image: "/products/product29.jpg",
      alt: "Cashmere Beanie"
    },
    {
      id: 30,
      image: "/products/product30.jpg",
      alt: "Sequin Evening Clutch"
    },
    {
      id: 31,
      image: "/products/product31.jpg",
      alt: "Ruffled Blouse"
    },
    {
      id: 32,
      image: "/products/product32.jpg",
      alt: "Straight Leg Trousers"
    },
    {
      id: 33,
      image: "/products/product33.jpg",
      alt: "Cat-Eye Reading Glasses"
    },
    {
      id: 34,
      image: "/products/product34.jpg",
      alt: "Quilted Crossbody Bag"
    },
    {
      id: 35,
      image: "/products/product35.jpg",
      alt: "Tie-Dye T-Shirt"
    },
    {
      id: 36,
      image: "/products/product36.jpg",
      alt: "Linen Blend Shorts"
    },
    {
      id: 37,
      image: "/products/product37.jpg",
      alt: "Tortoiseshell Headband"
    },
    {
      id: 38,
      image: "/products/product38.jpg",
      alt: "Suede Ankle Boots"
    },
    {
      id: 39,
      image: "/products/product39.jpg",
      alt: "Polka Dot Blouse"
    },
    {
      id: 40,
      image: "/products/product40.jpg",
      alt: "Tailored Shorts"
    },
    {
      id: 41,
      image: "/products/product41.jpg",
      alt: "Woven Straw Hat"
    },
    {
      id: 42,
      image: "/products/product42.jpg",
      alt: "Velvet Hair Scrunchie"
    }
  ];

  // Product categories
  const categories = [
    { id: "women", name: "Women Wear", description: "Premium Ladies Dresses: Comfort, Style, and Performance Combined" },

  ];

  const [currentCategory, setCurrentCategory] = useState(0);

  // First carousel states
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [autoplay, setAutoplay] = useState(true);

  // Second carousel states
  const [showcaseActiveSlide, setShowcaseActiveSlide] = useState(0);
  const [showcaseVisibleProducts, setShowcaseVisibleProducts] = useState([]);
  const [showcaseAutoplay, setShowcaseAutoplay] = useState(true);

  // Number of visible products based on screen size
  const getNumVisibleProducts = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm and below
    }
    return 4; // Default for initial render
  };

  // Initial setup
  useEffect(() => {
    const handleResize = () => {
      updateVisibleProducts(activeSlide);
      updateShowcaseVisibleProducts(showcaseActiveSlide);
    };

    window.addEventListener('resize', handleResize);
    updateVisibleProducts(0);
    updateShowcaseVisibleProducts(0);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Autoplay functionality for first carousel
  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeSlide, autoplay]);

  // Autoplay functionality for showcase carousel
  useEffect(() => {
    let interval;

    if (showcaseAutoplay) {
      interval = setInterval(() => {
        nextShowcaseSlide();
      }, 3000); // Different timing for variety
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showcaseActiveSlide, showcaseAutoplay]);

  // Update visible products based on active slide
  const updateVisibleProducts = (startIndex) => {
    const visibleCount = getNumVisibleProducts();
    let newVisibleProducts = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % products.length;
      newVisibleProducts.push(products[index]);
    }

    setVisibleProducts(newVisibleProducts);
  };

  // Update visible showcase products
  const updateShowcaseVisibleProducts = (startIndex) => {
    const visibleCount = getNumVisibleProducts() * 2; // Show more products in showcase
    let newVisibleProducts = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % products.length;
      newVisibleProducts.push(products[index]);
    }

    setShowcaseVisibleProducts(newVisibleProducts);
  };

  // Navigation functions for first carousel
  const nextSlide = () => {
    const newActiveSlide = (activeSlide + 1) % products.length;
    setActiveSlide(newActiveSlide);
    updateVisibleProducts(newActiveSlide);
  };

  const prevSlide = () => {
    const newActiveSlide = (activeSlide - 1 + products.length) % products.length;
    setActiveSlide(newActiveSlide);
    updateVisibleProducts(newActiveSlide);
  };

  // Navigation functions for showcase carousel
  const nextShowcaseSlide = () => {
    const newActiveSlide = (showcaseActiveSlide + 1) % products.length;
    setShowcaseActiveSlide(newActiveSlide);
    updateShowcaseVisibleProducts(newActiveSlide);
  };

  const prevShowcaseSlide = () => {
    const newActiveSlide = (showcaseActiveSlide - 1 + products.length) % products.length;
    setShowcaseActiveSlide(newActiveSlide);
    updateShowcaseVisibleProducts(newActiveSlide);
  };

  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Pause showcase autoplay when hovering
  const handleShowcaseMouseEnter = () => {
    setShowcaseAutoplay(false);
  };

  const handleShowcaseMouseLeave = () => {
    setShowcaseAutoplay(true);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4">Category Product Range</h2>
            <div className="flex justify-center gap-8 mt-8">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`text-lg font-medium px-4 py-2 border-b-2 transition-all ${currentCategory === index
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  onClick={() => setCurrentCategory(index)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="text-5xl font-medium text-gray-900 mb-6">
                  {categories[currentCategory].name}
                </h3>
                <p className="text-xl text-gray-600">
                  {categories[currentCategory].description}
                </p>
              </div>

              <div
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative carousel-container h-130">
                  <div className="flex transition-all duration-500 h-full">
                    {visibleProducts.map((product) => (
                      <div key={product.id} className="w-full h-full flex-shrink-0 px-2">
                        <div className="relative h-full">
                          <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-full object-cover object-center rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevSlide();
                    }}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-900 shadow-md transition-all duration-200 z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextSlide();
                    }}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-900 shadow-md transition-all duration-200 z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product showcase carousel */}
          <div className="mt-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">Featured Products</h2>

            <div
              className="relative overflow-hidden pb-8"
              onMouseEnter={handleShowcaseMouseEnter}
              onMouseLeave={handleShowcaseMouseLeave}
            >
              <div className="relative carousel-container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
                  {showcaseVisibleProducts.map((product) => (
                    <div key={product.id} className="group transform transition-transform duration-200 hover:scale-105">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    prevShowcaseSlide();
                  }}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-900 shadow-md transition-all duration-200 z-10"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextShowcaseSlide();
                  }}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-gray-900 shadow-md transition-all duration-200 z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(5)].map((_, index) => {
                  const isActive = (Math.floor(showcaseActiveSlide / 8) % 5) === index;
                  return (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${isActive ? 'w-6 bg-black' : 'w-2 bg-gray-300'}`}
                      onClick={() => {
                        const newIndex = index * 8;
                        setShowcaseActiveSlide(newIndex);
                        updateShowcaseVisibleProducts(newIndex);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}