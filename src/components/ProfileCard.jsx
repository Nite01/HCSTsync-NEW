import React from 'react';

const ProfileCard = ({ name, role, location, image, email }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-t-4 border-indigo-500">
            <img src={image} alt={`${name}'s profile`} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2 text-center">{name}</h3>
            <p className="text-gray-700 text-center"><strong>Role:</strong> {role}</p>
            <p className="text-gray-700 text-center"><strong>Location:</strong> {location}</p>
            <p className="text-gray-700 text-center"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-700 transition duration-300">{email}</a></p>
        </div>
    );
};

export default ProfileCard;
