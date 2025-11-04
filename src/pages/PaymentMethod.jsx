import React from 'react'
import Header from '../components/PaymentMethod/Header'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import ServiceProvider from '../components/PaymentMethod/ServiceProvider'
import Calendar from '../components/PaymentMethod/Calendar'
import DateTimePicker from '../components/PaymentMethod/DateTimePicker'
import PaymentForm from '../components/PaymentMethod/PaymentForm'
import TimeBox from '../components/PaymentMethod/TimeBox'

export default function PaymentMethod() {
  return (
    <div>
        <Navbar />

      <Header />
      <ServiceProvider />
      <DateTimePicker />
      <Calendar />
      <TimeBox />
      <PaymentForm />


      <Footer />
    </div>
  )
}
