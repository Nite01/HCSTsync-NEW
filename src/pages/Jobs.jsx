import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar'; // Ensure the path is correct
import Form from "../components/Form";

const jobData = [
    {
        title: 'Graphic Designer',
        company: 'ASV Consulting Services',
        experience: '0 - 3 years',
        salary: '50,000 - 2 Lacs P.A.',
        location: 'Noida, Ghaziabad',
        time: '17th October - 21st October, 12.30 PM - 4.30 PM',
        venue: '#B06, H-169, Sector-63, Noida',
        contact: 'Pawan ( 9315652636 )',
        link: 'https://example.com/apply/graphic-designer'
    },
    {
        title: 'Graphic Designer',
        company: 'ASV Consulting Services',
        experience: '0 - 3 years',
        salary: '50,000 - 2 Lacs P.A.',
        location: 'Noida, Ghaziabad',
        time: '17th October - 21st October, 12.30 PM - 4.30 PM',
        venue: '#B06, H-169, Sector-63, Noida',
        contact: 'Pawan ( 9315652636 )',
        link: 'https://example.com/apply/graphic-designer'
    },
    // Add more job data as needed
];

const Jobs = () => {

    const [showForm, setShowForm] = useState(false);

    const postFormConfig = {
        title: "Upload Job",
        fields: [
            { name: "jobTitle", label: "Job Title", type: "text", required: true },
            { name: "Company", label: "Company Name", type: "text", required: true },
            { name: "Experience", label: "Experience", type: "text", required: true },
            { name: "Salary", label: "Salary", type: "text", required: true },
            { name: "Location", label: "Location", type: "text", required: true },
            { name: "Time and Venue", label: "Time and Venue", type: "text", required: true },
            { name: "Contact", label: "Contact", type: "text", required: true },
        ],
        onSubmit: (formData) => {
            console.log("Form Submitted:", formData);
            setShowForm(false); // Close the form after submission
        },
    };

    return (
        <div>
            <Navbar /> {/* Added Navbar component */}
            <div className="container mx-auto p-6 bg-gradient-to-b from-blue-50 to-gray-200 min-h-screen">
                <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse">Available Jobs</h2>
                <div className="flex">
                    <aside className="w-1/4 p-6 bg-white rounded-lg shadow-lg mr-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Search Jobs</h3>
                        <input type="text" placeholder="Search by title..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Location..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <select className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Experience</option>
                            <option>0-1 years</option>
                            <option>1-3 years</option>
                            <option>3-5 years</option>
                            <option>5+ years</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300 mb-4">Search</button>
                        <button onClick={() => setShowForm(!showForm)} className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300">Upload Job</button>

                        {showForm && (
                            <Form
                                title={postFormConfig.title}
                                fields={postFormConfig.fields}
                                onSubmit={postFormConfig.onSubmit}
                            />
                        )}

                    </aside>
                    <div className="w-3/4 space-y-6">
                        {jobData.map((job, index) => (
                            <JobCard
                                key={index}
                                title={job.title}
                                company={job.company}
                                experience={job.experience}
                                salary={job.salary}
                                location={job.location}
                                time={job.time}
                                venue={job.venue}
                                contact={job.contact}
                                link={job.link}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Jobs;
