import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
        setVideoError(true);
      });
    }
    
    // Check if video loads correctly
    const video = videoRef.current;
    if (video) {
      // Listen for error events
      const handleError = () => {
        console.error("Video failed to load");
        setVideoError(true);
      };
      
      video.addEventListener('error', handleError);
      
      // Clean up
      return () => {
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Using video from public folder */}
          <source src="/video.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback background if video fails
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gray-800"
          style={{
            backgroundImage: "url(/public/sustain.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      )}

      {/* Overlay to make text more readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>


      {/* Content Container */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            FAZILAT ENTERPRISES
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Innovative & MODERN FASHION SOLUTIONS
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;