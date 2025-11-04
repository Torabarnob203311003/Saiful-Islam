// File: src/components/FundraisingEventsSection.jsx
import React from 'react';
import EventCard from './EventCard';
import img1 from '../../assets/Rectangle 1349.png';
import img2 from '../../assets/Rectangle 1347.png';
import img3 from '../../assets/Rectangle 1345.png';

const FundraisingEventsSection = () => {
  const events = [
    {
      id: 1,
      date: '14',
      month: 'Jan',
      year: '2025',
      image: img1,
      title: 'Lorem ipsum dolor sit amet consectetur. At aliquam tristique',
      time: '10:00am',
      duration: '01:00pm',
      location: 'New York',
      dateStyle: 'right-4 top-4'
    },
    {
      id: 2,
      date: '14',
      month: 'Jan',
      year: '2025',
      image: img2,
      title: 'Lorem ipsum dolor sit amet consectetur. At aliquam tristique',
      time: '10:00am',
      duration: '01:00pm',
      location: 'New York',
      dateStyle: 'right-4 top-4'
    },
    {
      id: 3,
      date: '14',
      month: 'Jan',
      year: '2025',
      image: img3,
      title: 'Lorem ipsum dolor sit amet consectetur. At aliquam tristique',
      time: '10:00am',
      duration: '01:00pm',
      location: 'New York',
      dateStyle: 'right-4 top-4'
    }
  ];
  
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Fund raising Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundraisingEventsSection;

