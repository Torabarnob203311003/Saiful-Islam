import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import ServiceDetails from '../components/Service/ServiceDetails'

export default function ServiceDetailsPage() {
  return (
    <div>
      <Navbar/>
        <ServiceDetails/>
      <Footer/>
    </div>
  )
}
