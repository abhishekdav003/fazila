import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronRight, Leaf, Users, Building } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function SustainabilitySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('planet');
  const videoRef = useRef(null);

  // Add effect to handle video state changes and errors
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = (e) => {
      console.error("Video error:", e);
      setIsPlaying(false);
    };
    
    // Add event listeners
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('error', handleError);
    
    // Clean up event listeners
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('error', handleError);
    };
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Add a promise to handle autoplay restrictions
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              setIsPlaying(true);
            })
            .catch(error => {
              // Auto-play was prevented
              console.error("Playback prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  const tabs = [
    { id: 'planet', label: 'For Planet', icon: <Leaf className="w-5 h-5" /> },
    { id: 'people', label: 'For People', icon: <Users className="w-5 h-5" /> },
    { id: 'responsibility', label: 'Corporate Responsibility', icon: <Building className="w-5 h-5" /> },
  ];

  const tabContent = {
    planet: {
      title: "Our Commitment to the Environment",
      description: "We believe in responsible business growth by integrating environmental sustainability into the heart of our operations at all stages of production. Through innovative practices and dedicated initiatives, we continuously strive to minimize our ecological footprint.",
      stats: [
        { value: "40%", label: "Reduction in water usage since 2022" },
        { value: "60%", label: "Energy from renewable sources" },
        { value: "85%", label: "Recycled materials in packaging" },
      ],
      initiatives: [
        { title: "Zero Waste Production", description: "Implementing closed-loop manufacturing systems to eliminate waste" },
        { title: "Carbon Neutrality", description: "On track to become carbon neutral across all operations by 2026" },
        { title: "Sustainable Sourcing", description: "Partnerships with eco-certified suppliers and materials" },
      ]
    },
    people: {
      title: "Empowering Our Communities",
      description: "Our commitment to people extends beyond our workforce to the communities where we operate. We believe in fair wages, safe working conditions, and investing in skills development for all our employees.",
      stats: [
        { value: "100%", label: "Fair wage certification across factories" },
        { value: "5,000+", label: "Local artisans employed globally" },
        { value: "12,000", label: "Training hours provided annually" },
      ],
      initiatives: [
        { title: "Artisan Support Program", description: "Preserving traditional craft techniques while providing sustainable livelihoods" },
        { title: "Educational Partnerships", description: "Offering scholarships and apprenticeships in local communities" },
        { title: "Health & Wellbeing", description: "Comprehensive healthcare programs for all employees and their families" },
      ]
    },
    responsibility: {
      title: "Setting Industry Standards",
      description: "As industry leaders, we recognize our responsibility to drive positive change throughout the fashion ecosystem. Our corporate responsibility framework ensures accountability, transparency, and continuous improvement.",
      stats: [
        { value: "A+", label: "Rating from Fashion Transparency Index" },
        { value: "15+", label: "Industry partnerships for sustainability" },
        { value: "100%", label: "Supply chain traceability" },
      ],
      initiatives: [
        { title: "Ethical Governance", description: "Rigorous standards and third-party verification of our practices" },
        { title: "Transparency Reporting", description: "Annual sustainability reports with measurable goals and progress" },
        { title: "Innovation Incubator", description: "Funding for startups developing sustainable fashion technologies" },
      ]
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <>
      <Header />
    <div className="w-full py-10 ">
      {/* Sustainability Hero Section */}
      <div className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Sustainability <span className="font-medium">by Design</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            More than a commitment, sustainability is woven into every thread of our operation.
            We're reimagining fashion with purpose—for the planet, for people, and for the future.
          </p>
        </div>
      </div>

      {/* Video Feature Section */}
      <div className="w-full bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Our Sustainable <span className="font-medium">Manufacturing</span></h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We conduct in-house manufacturing with meticulous attention to every finished garment. 
              Our facilities combine state-of-the-art technology with traditional craftsmanship, 
              creating a balanced approach that honors both innovation and heritage.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-white" />
                </div>
                <p className="ml-4 text-gray-200">Five eco-certified production facilities worldwide</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-white" />
                </div>
                <p className="ml-4 text-gray-200">Water recycling systems in all manufacturing plants</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-white" />
                </div>
                <p className="ml-4 text-gray-200">Zero landfill waste policy across production</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-0 pb-[56.25%] md:pb-0 md:h-auto md:aspect-square overflow-hidden rounded-lg shadow-xl order-1 md:order-2">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              
              loop
              muted
              playsInline
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <button 
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black opacity-10 hover:bg-opacity-20 transition-all"
              onClick={handleVideoToggle}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="h-20 w-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-gray-900" />
                ) : (
                  <Play className="h-8 w-8 text-gray-900 ml-1" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-4 mb-12 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-lg font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'text-indigo-600 border-b-2 border-indigo-600 -mb-px' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="py-8">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">{activeContent.title}</h2>
            <p className="text-lg text-gray-600 max-w-4xl mb-12 leading-relaxed">{activeContent.description}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {activeContent.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all"
                >
                  <p className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Initiatives */}
            <h3 className="text-2xl font-medium mb-8 text-gray-800">Key Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeContent.initiatives.map((initiative, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <Leaf className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-medium mb-3 text-gray-800">{initiative.title}</h4>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  );
}