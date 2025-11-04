
// components/JobListingSection.jsx
import React from 'react';
import JobCard from './JobCard';

function JobListingSection() {
  const jobs = [
    {
      id: 1,
      title: "UX/UI Designer",
      location: "Montreal, Onsite",
      remote: false,
      category: "Design"
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Montreal, Onsite",
      remote: false,
      category: "Development"
    },
    {
      id: 3,
      title: "Frontend Developer",
      location: "Remote, Onsite",
      remote: true,
      category: "Development"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote, Onsite",
      remote: true,
      category: "Development"
    }
  ];

  return (
    <section className="bg-gray-50 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <React.Fragment key={index}>
              {index === 0 ||
                job.category !== jobs[index - 1].category ? (
                <h3 className="text-2xl font-bold my-4">{job.category}</h3>
              ) : null}
              <JobCard 
                key={index}
                id={job.id}
                title={job.title}
                location={job.location}
                remote={job.remote}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListingSection;
