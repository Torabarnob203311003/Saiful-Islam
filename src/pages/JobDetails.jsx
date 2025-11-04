import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

const jobDescriptions = [
    {
        id: 1,
        title: "UX/UI Designer",
        description: "We are looking for a skilled UX/UI Designer to join our team. The ideal candidate will have a strong portfolio that showcases their ability to design visually appealing and user-friendly interfaces."
    },
    {
        id: 2,
        title: "Backend Developer",
        description: "We are seeking a highly skilled Backend Developer to join our team. The ideal candidate will have experience with Node.js, Express, and MongoDB."
    },
    {
        id: 3,
        title: "Frontend Developer",
        description: "We are looking for a skilled Frontend Developer to join our team. The ideal candidate will have experience with React, Redux, and CSS."
    },
    {
        id: 4,
        title: "DevOps Engineer",
        description: "We are seeking a highly skilled DevOps Engineer to join our team. The ideal candidate will have experience with Docker, Kubernetes, and Jenkins."
    },
    {
        id: 5,
        title: "Full Stack Developer",
        description: "We are looking for a skilled Full Stack Developer to join our team. The ideal candidate will have experience with Node.js, Express, MongoDB, React, and Redux."
    }
]

export default function JobDetails() {
    const {jobId} = useParams();
    const jobDescription = jobDescriptions.find(job => job.id === parseInt(jobId));

    return (
        <div>
            <Navbar />
           <div className='py-6 px-32'>
           <h1>{jobDescription.title}</h1>
           <p>{jobDescription.description}</p>
           </div>
            <Footer />
        </div>
    )

}

