// ProfilePage.jsx
import React from 'react';
import ProfileHeader from './ProfileHeader';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WorkingHoursSection from './WorkingHoursSection';
import ExperienceSection from './ExperienceSection';

const ProfilePage = () => {
  // Sample data (would normally come from props or API)
  const profileData = {
    name: "Seint Josef",
    avatar: "/api/placeholder/100/100",
    rating: 4.0,
    email: "example@gmail.com",
    location: "Dhaka, Bangladesh",
    about: "Lorem ipsum dolor sit amet consectetur. Congue adipiscing nulla justo ac mi metus. At quis aliquam semper egestas. Turpis viverra varius sociis metus lectus tristique. Dolor sed ut sagittis volutpat integer nibh. Commodo massa velit facilisis in sit mauris. Vel commodo nunc ullamcorper interdum mauris nisl est interdum. Cras sed pellentesque bibendum diam dictum. Tortor viverra id et amet dignissim sodaleesque. Facilisis ut volutpat et eget morbibus elementum et convallis. Ultricies pretium libero faucibus sollicitudin sem penatibus. Sagittis nunc lorem facilisis ultramurabi placerat nisi. Bibendum non tempor nibh nec. Iaculis iaculis donec in nunc ad. Facilisi erat semper tellus condimentum facilisis eget. Non facilisis diam tincidunt in lectus. Sed volutpat interdum fermentum donec nisi id.",
    services: ["Cleaning", "Cooking", "Baby sitting", "Pet services"],
    schedule: {
      weeklyDays: 6,
      days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
      dailyHours: 10,
      timeSlots: ["8am - 1pm", "2pm - 7pm"]
    },
    experiences: [
      {
        title: "Business Development Executive",
        company: "Daffodil IT LTD",
        type: "On-site",
        period: "Dec 2020 - June 2023"
      },
      {
        title: "Business Development Executive",
        company: "Daffodil IT LTD",
        type: "On-site",
        period: "Dec 2020 - June 2023"
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 min-h-screen">
      <ProfileHeader profile={profileData} />
      <AboutSection about={profileData.about} />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="md:w-1/2">
          <ServicesSection services={profileData.services} />
        </div>
        <div className="md:w-1/2">
          <WorkingHoursSection schedule={profileData.schedule} />
        </div>
      </div>
      <ExperienceSection experiences={profileData.experiences} />
    </div>
  );
};

export default ProfilePage;