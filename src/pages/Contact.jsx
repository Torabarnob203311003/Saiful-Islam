import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import ContactHero from '../components/Contact/ContactHero'
import SupportTeam from '../components/Contact/SupportTeam'

export default function Contact() {
  return (
    <div >
      <Navbar/>
      <ContactHero/>
      <SupportTeam/>

      <Footer/>
    </div>
  )
}
