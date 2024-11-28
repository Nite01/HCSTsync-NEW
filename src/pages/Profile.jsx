import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const userProfile = {
    image: '/src/assets/profile2.jpg', // Path to user's profile picture
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 12345 67890',
    address: '123 College St, Etmadpur, Uttar Pradesh, India',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eget urna ullamcorper viverra.'
};

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-gray-200 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">User Profile</h2>
                    <div className="flex flex-col items-center mb-6">
                        <img src={userProfile.image} alt={userProfile.name} className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">{userProfile.name}</h3>
                        <p className="text-gray-600">{userProfile.email}</p>
                    </div>
                    <div className="text-left mt-4 space-y-4">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Contact Information</h4>
                            <p className="text-gray-600"><strong>Phone:</strong> {userProfile.phone}</p>
                            <p className="text-gray-600"><strong>Address:</strong> {userProfile.address}</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Bio</h4>
                            <p className="text-gray-600">{userProfile.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
