import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import ImageCard from '../components/ImageCard'; // Import the ImageCard component
import Form from "../components/Form";

const imagesData = [
    {
        uploader: "John Doe",
        location: "Noida, India",
        date: "2024-10-17",
        caption: "Amazing view from my trip!",
        image: "/src/assets/Front.jpeg"
    },
    {
        uploader: "Jane Smith",
        location: "New York, USA",
        date: "2024-09-21",
        caption: "A memorable sunset.",
        image: "/src/assets/Front.jpeg"
    },
    {
        uploader: "Jane Smith",
        location: "New York, USA",
        date: "2024-09-21",
        caption: "A memorable sunset.",
        image: "/src/assets/Front.jpeg"
    },
    {
        uploader: "Jane Smith",
        location: "New York, USA",
        date: "2024-09-21",
        caption: "A memorable sunset.",
        image: "/src/assets/Front.jpeg"
    },
    {
        uploader: "Jane Smith",
        location: "New York, USA",
        date: "2024-09-21",
        caption: "A memorable sunset.",
        image: "/src/assets/Front.jpeg"
    },
    {
        uploader: "Jane Smith",
        location: "New York, USA",
        date: "2024-09-21",
        caption: "A memorable sunset.",
        image: "/src/assets/Front.jpeg"
    },
    // Add more images as needed
];

const Gallery = () => {

    const [showForm, setShowForm] = useState(false);

    const postFormConfig = {
        title: "Upload Image",
        fields: [
            { name: "image", label: "Upload Image", type: "file", required: true },
            { name: "Name", label: "Name", type: "text", required: true },
            { name: "Location", label: "Location", type: "text", required: true },
            { name: "Date", label: "Date", type: "date", required: true },
            { name: "Caption", label: "Caption", type: "text", required: true },
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
                <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse">Gallery</h2>
                <div className="flex">
                    <aside className="w-1/4 p-6 bg-white rounded-lg shadow-lg mr-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Search Jobs</h3>
                        <input type="text" placeholder="Search by title..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Location..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Date" className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300 mb-4">Search</button>
                        <button onClick={() => setShowForm(!showForm)} className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-full hover:shadow-lg transition duration-300">Upload Image</button>

                        {showForm && (
                            <Form
                                title={postFormConfig.title}
                                fields={postFormConfig.fields}
                                onSubmit={postFormConfig.onSubmit}
                            />
                        )}

                    </aside>
                    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {imagesData.map((image, index) => (
                            <ImageCard
                                key={index}
                                uploader={image.uploader}
                                location={image.location}
                                date={image.date}
                                caption={image.caption}
                                image={image.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
