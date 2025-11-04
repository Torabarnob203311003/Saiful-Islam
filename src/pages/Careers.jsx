import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import HeroSection from '../components/Career/HeroSection'
import FutureWorksSection from '../components/Career/FutureWorksSection'
import ValuesSection from '../components/Career/ValuesSection'
import EnvironmentSection from '../components/Career/EnvironmentSection'
import WorkGroupsSection from '../components/Career/WorkGroupsSection'
import JobListingSection from '../components/Career/JobListingSection'
import CareerOpportunitiesSection from '../components/Career/CareerOpportunitiesSection'
import NewsletterSection from '../components/Career/NewsletterSection'
import FaqSection from '../components/Career/FaqSection'

export default function Careers() {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <FutureWorksSection />
        <ValuesSection />
        <EnvironmentSection />
        <WorkGroupsSection />
        <CareerOpportunitiesSection />
        <JobListingSection />
        <NewsletterSection />
        <FaqSection />
      <Footer/>
    </div>
  )
}
