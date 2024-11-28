import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import ProfileCard from '../components/ProfileCard'; // Import the ProfileCard component
import Form from "../components/Form";

const profilesData = [
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    {
        name: "John Doe",
        role: "Professor",
        location: "Noida, India",
        image: "/src/assets/profile2.jpg",
        email: "john.doe@example.com"
    },
    // Add more profiles as needed
];

const Directory = () => {

    const [showForm, setShowForm] = useState(false);

    const postFormConfig = {
        title: "Upload Directory",
        fields: [
            { name: "image", label: "Upload Image", type: "file", required: true },
            { name: "Name", label: "Name", type: "text", required: true },
            { name: "Role", label: "Role", type: "text", required: true },
            { name: "Location", label: "Location", type: "text", required: true },
            { name: "Email", label: "Email", type: "email", required: true },
        ],
        onSubmit: (formData) => {
            console.log("Form Submitted:", formData);
            setShowForm(false); // Close the form after submission
        },
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8 bg-gradient-to-b from-blue-50 to-gray-200 min-h-screen">
                <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse">Directory</h2>
                <div className="flex">
                    <aside className="w-1/4 p-6 bg-white rounded-lg shadow-lg mr-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Search Jobs</h3>
                        <input type="text" placeholder="Search by title..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Location..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Email" className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300 mb-4">Search</button>
                        <button onClick={() => setShowForm(!showForm)} className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300">Upload Directory</button>

                        {showForm && (
                            <Form
                                title={postFormConfig.title}
                                fields={postFormConfig.fields}
                                onSubmit={postFormConfig.onSubmit}
                            />
                        )}

                    </aside>
                    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profilesData.map((profile, index) => (
                            <ProfileCard
                                key={index}
                                name={profile.name}
                                role={profile.role}
                                location={profile.location}
                                image={profile.image}
                                email={profile.email}
                                className="bg-gradient-to-r from-blue-200 to-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Directory;
