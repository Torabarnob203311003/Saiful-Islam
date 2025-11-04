import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import VideoHeroSection from '../components/Investors/VideoHeroSection'
import BusinessModelSection from '../components/Investors/BusinessModelSection'
import OverviewSection from '../components/Investors/OverviewSection'
import ContactSection from '../components/Investors/ContactSection'

export default function Investors() {
  return (
    <div>
       <Navbar />
        <VideoHeroSection />
        <BusinessModelSection />
        <OverviewSection />
        <ContactSection />
        <Footer/>
    </div>
  )
}
