import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import ChatLayout from '../components/CustomerChats/ChatLayout'



export default function CustomersChatsPage() {
  return (
    <div >
      <Navbar/>

      <ChatLayout/>
      
      <Footer/>
    </div>
  )
}
