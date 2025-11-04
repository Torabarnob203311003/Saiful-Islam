import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import Notifications from '../components/Notifications/NotificationsList'




export default function CustomersChatsPage() {
  return (
    <div >
      <Navbar/>
      <Notifications/>
      <Footer/>
    </div>
  )
}

