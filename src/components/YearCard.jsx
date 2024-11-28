import React from 'react';

const YearCard = ({ year, members }) => {
    return (
        <div className="bg-green-500 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-2">Class Of {year}</h3>
            <p className="text-white"><strong>{members}</strong> Members</p>
        </div>
    );
};

export default YearCard;
