import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Filter, X } from "lucide-react";

export default function ProductPage() {
  // Full product data array as provided
  const products = [
    {
      id: 1,
      name: "Satin Cami Top",
      price: 49.99,
      description: "Elegant satin camisole with adjustable straps, perfect for layering or wearing alone.",
      image: "./products/product1.jpg",
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
    },
    // Adding more products to reach 42 total
    {
      id: 13,
      name: "Chunky Knit Sweater",
      price: 69.99,
      description: "Cozy chunky knit sweater perfect for layering during cold weather seasons.",
      image: "/products/product13.jpg",
      alt: "Chunky Knit Sweater"
    },
    {
      id: 14,
      name: "Faux Leather Jacket",
      price: 99.99,
      description: "Edgy faux leather jacket with zipper details for an effortlessly cool look.",
      image: "/products/product14.jpg",
      alt: "Faux Leather Jacket"
    },
    {
      id: 15,
      name: "Silk Scrunchie Set",
      price: 19.99,
      description: "Set of three silk scrunchies that are gentle on hair and add a touch of elegance.",
      image: "/products/product15.jpg",
      alt: "Silk Scrunchie Set"
    },
    {
      id: 16,
      name: "Statement Earrings",
      price: 28.99,
      description: "Bold statement earrings to elevate any outfit from casual to glamorous.",
      image: "/products/product16.jpg",
      alt: "Statement Earrings"
    },
    {
      id: 17,
      name: "Canvas Tote Bag",
      price: 39.99,
      description: "Spacious canvas tote bag with inner pockets, perfect for everyday use.",
      image: "/products/product17.jpg",
      alt: "Canvas Tote Bag"
    },
    {
      id: 18,
      name: "Ribbed Tank Top",
      price: 24.99,
      description: "Classic ribbed tank top that forms the foundation of countless outfits.",
      image: "/products/product18.jpg",
      alt: "Ribbed Tank Top"
    },
    {
      id: 19,
      name: "High-Rise Leggings",
      price: 49.99,
      description: "Comfortable high-rise leggings perfect for workouts or casual wear.",
      image: "/products/product19.jpg",
      alt: "High-Rise Leggings"
    },
    {
      id: 20,
      name: "Panama Hat",
      price: 45.99,
      description: "Classic panama hat for stylish sun protection during warm weather.",
      image: "/products/product20.jpg",
      alt: "Panama Hat"
    },
    {
      id: 21,
      name: "Slingback Heels",
      price: 89.99,
      description: "Elegant slingback heels with a comfortable block heel for all-day wear.",
      image: "/products/product21.jpg",
      alt: "Slingback Heels"
    },
    {
      id: 22,
      name: "Linen Shirt Dress",
      price: 79.99,
      description: "Breezy linen shirt dress, perfect for hot summer days and vacation getaways.",
      image: "/products/product22.jpg",
      alt: "Linen Shirt Dress"
    },
    {
      id: 23,
      name: "Slim Fit Chinos",
      price: 59.99,
      description: "Versatile slim fit chinos that transition seamlessly from work to weekend.",
      image: "/products/product23.jpg",
      alt: "Slim Fit Chinos"
    },
    {
      id: 24,
      name: "Beaded Bracelet Set",
      price: 23.99,
      description: "Set of three beaded bracelets that can be worn together or separately.",
      image: "/products/product24.jpg",
      alt: "Beaded Bracelet Set"
    },
    {
      id: 25,
      name: "Textured Hair Clip",
      price: 15.99,
      description: "Statement textured hair clip that adds interest to any hairstyle.",
      image: "/products/product25.jpg",
      alt: "Textured Hair Clip"
    },
    {
      id: 26,
      name: "Printed Midi Dress",
      price: 85.99,
      description: "Flowing midi dress with a vibrant print, perfect for special occasions.",
      image: "/products/product26.jpg",
      alt: "Printed Midi Dress"
    },
    {
      id: 27,
      name: "Cropped Denim Jacket",
      price: 75.99,
      description: "Versatile cropped denim jacket that pairs perfectly with dresses and high-waisted bottoms.",
      image: "/products/product27.jpg",
      alt: "Cropped Denim Jacket"
    },
    {
      id: 28,
      name: "Platform Sandals",
      price: 69.99,
      description: "Trendy platform sandals that add height while remaining comfortable for all-day wear.",
      image: "/products/product28.jpg",
      alt: "Platform Sandals"
    },
    {
      id: 29,
      name: "Cashmere Beanie",
      price: 42.99,
      description: "Luxuriously soft cashmere beanie to keep you stylish and warm during cold weather.",
      image: "/products/product29.jpg",
      alt: "Cashmere Beanie"
    },
    {
      id: 30,
      name: "Sequin Evening Clutch",
      price: 55.99,
      description: "Elegant sequin clutch bag that adds sparkle to any evening ensemble.",
      image: "/products/product30.jpg",
      alt: "Sequin Evening Clutch"
    },
    {
      id: 31,
      name: "Ruffled Blouse",
      price: 52.99,
      description: "Feminine blouse with ruffle details for a romantic and sophisticated look.",
      image: "/products/product31.jpg",
      alt: "Ruffled Blouse"
    },
    {
      id: 32,
      name: "Straight Leg Trousers",
      price: 65.99,
      description: "Classic straight leg trousers with a flattering fit for professional settings.",
      image: "/products/product32.jpg",
      alt: "Straight Leg Trousers"
    },
    {
      id: 33,
      name: "Cat-Eye Reading Glasses",
      price: 35.99,
      description: "Stylish cat-eye reading glasses that make a fashion statement while being functional.",
      image: "/products/product33.jpg",
      alt: "Cat-Eye Reading Glasses"
    },
    {
      id: 34,
      name: "Quilted Crossbody Bag",
      price: 59.99,
      description: "Chic quilted crossbody bag with a chain strap for hands-free convenience.",
      image: "/products/product34.jpg",
      alt: "Quilted Crossbody Bag"
    },
    {
      id: 35,
      name: "Tie-Dye T-Shirt",
      price: 32.99,
      description: "Vibrant tie-dye t-shirt that adds a playful pop of color to your wardrobe.",
      image: "/products/product35.jpg",
      alt: "Tie-Dye T-Shirt"
    },
    {
      id: 36,
      name: "Linen Blend Shorts",
      price: 48.99,
      description: "Breathable linen blend shorts with an elastic waistband for ultimate comfort.",
      image: "/products/product36.jpg",
      alt: "Linen Blend Shorts"
    },
    {
      id: 37,
      name: "Tortoiseshell Headband",
      price: 22.99,
      description: "Classic tortoiseshell headband that adds polish to any hairstyle.",
      image: "/products/product37.jpg",
      alt: "Tortoiseshell Headband"
    },
    {
      id: 38,
      name: "Suede Ankle Boots",
      price: 95.99,
      description: "Versatile suede ankle boots with a comfortable block heel for everyday wear.",
      image: "/products/product38.jpg",
      alt: "Suede Ankle Boots"
    },
    {
      id: 39,
      name: "Polka Dot Blouse",
      price: 45.99,
      description: "Playful polka dot blouse with a tie neck detail for vintage-inspired charm.",
      image: "/products/product39.jpg",
      alt: "Polka Dot Blouse"
    },
    {
      id: 40,
      name: "Tailored Shorts",
      price: 55.99,
      description: "Sophisticated tailored shorts that can be dressed up for work or casual events.",
      image: "/products/product40.jpg",
      alt: "Tailored Shorts"
    },
    {
      id: 41,
      name: "Woven Straw Hat",
      price: 38.99,
      description: "Wide-brimmed woven straw hat providing stylish sun protection for beach days.",
      image: "/products/product41.jpg",
      alt: "Woven Straw Hat"
    },
    {
      id: 42,
      name: "Velvet Hair Scrunchie",
      price: 12.99,
      description: "Luxurious velvet scrunchie that adds texture while being gentle on hair.",
      image: "/products/product42.jpg",
      alt: "Velvet Hair Scrunchie"
    }
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-low") {
      return b.price - a.price;
    } else if (sortOption === "name-a-z") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-z-a") {
      return b.name.localeCompare(a.name);
    }
    return 0; // Default: featured
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle wishlist toggle
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Handle add to cart
  const addToCart = (productId) => {
    setCart([...cart, productId]);
    setShowCartNotification(true);
    setTimeout(() => {
      setShowCartNotification(false);
    }, 2000);
  };

  // Effect for pagination reset on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">FAZILAT ENTERPRISES</h1>
              </div>
            </div>
            
          </div>
        </div>
      </nav>

    

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>

            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Filter panel (mobile) */}
        {showFilters && (
          <div className="bg-white p-4 rounded-md shadow-md mb-8 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            {/* Filter options would go here */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100">Under $25</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100">$25 - $50</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100">$50 - $100</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100">$100+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <button 
                  onClick={() => toggleWishlist(product.id)} 
                  className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all duration-300"
                >
                  <Heart 
                    className={`h-5 w-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="py-2.5 px-5 bg-white text-gray-900 font-medium rounded-full m-4 hover:bg-gray-100 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
                <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              
              {[...Array(totalPages).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border ${
                    currentPage === number + 1
                      ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  } text-sm font-medium`}
                >
                  {number + 1}
                </button>
              ))}
              
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </nav>
          </div>
        )}
      </div>

     


    </div>
  );
} 