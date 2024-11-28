import React from 'react';

const JobCard = ({ title, company, experience, salary, location, time, venue, contact, link }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-t-4 border-green-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">{title}</h3>
            <p className="text-gray-800 mb-1"><strong>Company:</strong> {company}</p>
            <p className="text-gray-800 mb-1"><strong>Experience:</strong> {experience}</p>
            <p className="text-gray-800 mb-1"><strong>Salary:</strong> {salary}</p>
            <p className="text-gray-800 mb-1"><strong>Location:</strong> {location}</p>
            <p className="text-gray-800 mb-1"><strong>Time and Venue:</strong> {time}, {venue}</p>
            <p className="text-gray-800"><strong>Contact:</strong> {contact}</p>
            <a href={link} className="text-white bg-green-600 hover:bg-green-700 mt-4 inline-block rounded-full px-4 py-2 transition duration-300 shadow-lg">Apply Now</a>
        </div>
    );
};

export default JobCard;
