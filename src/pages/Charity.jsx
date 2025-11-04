import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import MissionSection from '../components/Charity/MissionSection'
import StatsBar from '../components/Charity/StatsBar'
import FundraisingEventsSection from '../components/Charity/FundraisingEventsSection'
import GallerySection from '../components/Charity/GallerySection'

export default function Charity() {
  return (
    <div>
       <Navbar/>
        <MissionSection/>
        <StatsBar/>
        <FundraisingEventsSection/>
        <GallerySection/>
        <Footer/>
    </div>
  )
}
