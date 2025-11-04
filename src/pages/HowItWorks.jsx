import React from "react";
import FirstSection from "../components/HowItWorks/FirstSection";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import ImageViewer from "../components/HowItWorks/VideoSection";

export default function HowItWorks() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <ImageViewer />
      <Footer />
    </div>
  );
}
