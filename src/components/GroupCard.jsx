import React from 'react';

const GroupCard = ({ group }) => {
    return (
        <div className="border p-6 rounded-lg shadow-md bg-white">
            <img src={group.image} alt={group.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-2">{group.name}</h3>
            <p className="text-gray-700 mb-4">{group.description}</p>
            <p className="text-gray-600 mb-2"><strong>Dates:</strong> {group.dates}</p>
            <button className="bg-green-600 text-white rounded-full px-4 py-2 mt-4 hover:bg-green-700 transition duration-300">Join Group</button>
        </div>
    );
};

export default GroupCard;
