import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import ProfilePage from '../components/ProviderProfile/ProfilePage';

export default function ProviderProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfilePage />
      <Footer />
    </div>
  );
}

