// File: src/components/UserProfile.jsx
import React, { useContext, useState } from 'react';
import AccountDetailsForm from '../components/UserProfile/AccountDetailsForm';
import PasswordChangeForm from '../components/UserProfile/PasswordChangeForm';
import OrderHistoryTable from '../components/UserProfile/OrderHistoryTable';
import ProfileContent from '../components/UserProfile/ProfileContent';
import ProfileHeader from '../components/UserProfile/ProfileHeader';
import LogoutButton from '../components/UserProfile/LogoutButton';
import TabsNavigation from '../components/UserProfile/TabsNavigation';
import Navbar from '../components/Home/Navbar';
import { AuthContext } from '../context/AuthContext';


const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const { user } = useContext(AuthContext);



  // Handle tab change from TabsNavigation component
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Render the appropriate component based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountDetailsForm user={user}/>;
      case 'password':
        return <PasswordChangeForm />;
      case 'orders':
        return <OrderHistoryTable />;
      // case 'medals':
      //   return <ProfileContent contentType="medals" />;
      default:
        return <AccountDetailsForm />;
    }
  };

  return (
    <div className=" ">
      <Navbar />
      <ProfileHeader user={user}/>
      
      {/* Tab Navigation */}
      <TabsNavigation onTabChange={handleTabChange} />
      
      {/* Tab Content Container */}
      <div className="bg-white p-6 rounded-lg shadow-sm mx-32 mb-12">
        {renderTabContent()}
      </div>
      
      {/* Footer with logout button */}
      {/* <div className="mt-6 flex justify-end">
        <LogoutButton />
      </div> */}
    </div>
  );
};

export default UserProfile;