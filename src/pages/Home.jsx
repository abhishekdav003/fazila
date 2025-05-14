import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero'
import HeroAboutUsSection from '../components/HeroAbout'
import SustainabilitySection from '../components/HeroSustainabilityComp'
import ProductSlideshow from '../components/HeroProduct'

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroAboutUsSection />
      <SustainabilitySection />
      <ProductSlideshow />
      
      <Footer />
    </>
  )
}

export default Home
