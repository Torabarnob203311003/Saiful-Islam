import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import UserHome from '../pages/Dashboard/User/UserHome';
import SellerHome from '../pages/Dashboard/Seller/SellerHome';
import AdminHome from '../pages/Dashboard/Admin/AdminHome';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';
import AdminRoute from './AdminRoute';
import HowItWorks from '../pages/HowItWorks';
import Service from '../pages/Service';
import About from '../pages/About';
import Contact from '../pages/Contact';
import TermsOfServices from '../pages/TermsOfServices';
import HelpSupport from '../pages/HelpSupport';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Careers from '../pages/Careers';
import Investors from '../pages/Investors';
import Charity from '../pages/Charity';
import Community from '../pages/Community';
import EverydayEssentials from '../pages/EverydayEssentials';
import Household from '../pages/Household';
import Specialized from '../pages/Specialized';
import Professional from '../pages/Professional';
import Education from '../pages/Education';
import Creative from '../pages/Creative';
import Commercial from '../pages/Commercial';
import TawunTailoredServices from '../pages/TawunTailoredServices';
import InformationTechnology from '../pages/InformationTechnology';
import Category from '../pages/Category';
import CustomersChat from '../pages/CustomersChats';
import Userprofile from '../pages/UserProfile';
import NotificationsPage from '../pages/NotificationsPage';
import JobDetails from '../pages/JobDetails';
import JobApplyForm from '../pages/JobApplyForm';
// import JobApplyForm from '../components/Career/JobApply';
import ProviderProfile from '../pages/ProviderProfile';
import PaymentMethod from '../pages/PaymentMethod';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import VerifyCode from '../pages/Auth/VerifyCode';
import ProviderRegister from '../pages/Auth/ProviderRegister';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import ChatPage from '../pages/ChatPage';
import PaymentPage from '../pages/PaymentPage';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/services-details/:id" element={<ServiceDetailsPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/category/:category" element={<Category/>} />
         <Route path="/payment/:serviceId" element={<PaymentPage/>} />
        {/* <Route path="/chat/:sellerId" element={<CustomersChat/>} /> */}
        <Route path="/chat/:sellerId" element={<ChatPage/>} />
        <Route path="/user/dashboard" element={<Userprofile />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/provider-profile" element={<ProviderProfile />} />

        <Route path="/paymentmethod" element={<PaymentMethod />} />
     
        

        


        <Route path='/how-it-works' element={<HowItWorks/>}/>
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/terms-service" element={<TermsOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/apply/job/:jobId" element={<JobApplyForm   />} />

        <Route path="/investors" element={<Investors />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/community" element={<Community />} />
        <Route path="/everyday-essentials" element={<EverydayEssentials />} />
        <Route path="/household" element={<Household />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/education" element={<Education />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/information-technology" element={<InformationTechnology />} />
        <Route path="/specialized" element={<Specialized />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/tawun-tailored-services" element={<TawunTailoredServices />} />
        
        {/* Authentication Routes */}
         {/* <Route path="/login" element={<Login />} /> */}
         {/* <Route path="/register" element={<Register />} /> */}
         {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
         {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
         {/* <Route path="/verify-email/:token" element={<VerifyEmail />} /> */}
         {/* <Route path="/change-password" element={<ChangePassword />} /> */}
         {/* <Route path="/update-profile" element={<UpdateProfile />} /> */}
         {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/user/dashboard" element={<PrivateRoute><UserHome /></PrivateRoute>} /> */}
        {/* <Route path="/seller/dashboard" element={<SellerRoute><SellerHome /></SellerRoute>} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminRoute><AdminHome /></AdminRoute>} /> */}

        {/* Authentication Routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider/register" element={<ProviderRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp/verify/:email" element={<VerifyCode />} />
        {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
        {/* <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}

        <Route path="/user/dashboard" element={<PrivateRoute><UserHome /></PrivateRoute>} />
        <Route path="/seller/dashboard" element={<SellerRoute><SellerHome /></SellerRoute>} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminHome /></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

