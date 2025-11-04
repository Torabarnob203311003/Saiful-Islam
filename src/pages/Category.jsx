import CategorySection from "../components/Category/CategorySection";
import RecommendedSection from "../components/Category/RecommendedSection";
import TopSellerSection from "../components/Category/TopSellerSection";
import Pagination from "../components/Category/Pagination";
import HeroSection from "../components/Category/HeroSection";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { useParams } from "react-router-dom";

// Main App Component
export default function Category() {
  const {category}=useParams();

  



  return (
    <div>
      <Navbar />
      <HeroSection category={category}/>
      <CategorySection />
      <RecommendedSection />
      <TopSellerSection />
      <Pagination />
      <Footer />
    </div>
  );
}
