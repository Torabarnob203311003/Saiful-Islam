import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import PrivacyPolicyPage from '../components/PrivacyPolicy/PrivacyPolicyPage'

export default function PrivacyPolicy() {
  return (
    <div>
       <Navbar />
        <PrivacyPolicyPage/>
        <Footer/>
    </div>
  )
}
