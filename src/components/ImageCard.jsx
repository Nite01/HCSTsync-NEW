import React from 'react';

const ImageCard = ({ uploader, location, date, caption, image }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={image} alt={caption} className="w-full h-64 object-cover rounded-lg mb-4" />
            <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{uploader}</h3>
                <p className="text-gray-700"><strong>Location:</strong> {location}</p>
                <p className="text-gray-700"><strong>Date:</strong> {date}</p>
                <p className="text-gray-700"><strong>Caption:</strong> {caption}</p>
            </div>
        </div>
    );
};

export default ImageCard;
