import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GroupCard from '../components/GroupCard';

const activeGroups = [
    {
        name: 'Block Chain Club',
        description: 'Dive into the world of blockchain technology, explore its applications, and work on innovative projects.',
        dates: 'Every Saturday, 10 AM - 12 PM',
        image: '/src/assets/Images/Block Chain.jpg'
    },
    {
        name: 'Web Development Club',
        description: 'Join us to build exciting web applications, share knowledge, and learn the latest web technologies.',
        dates: 'Every Wednesday, 4 PM - 6 PM',
        image: '/src/assets/Images/Web Development.jpeg'
    },
    {
        name: 'Game Development Club',
        description: 'Collaborate with fellow enthusiasts to develop your own games, from concept to completion.',
        dates: 'Every Monday, 8 AM - 9 AM',
        image: '/src/assets/Images/Game dev.jpeg'
    },
    {
        name: 'Robotics Club',
        description: 'Get hands-on experience with building and programming robots, and participate in robotics competitions.',
        dates: 'Every Friday, 3 PM - 5 PM',
        image: '/src/assets/Images/Robotics.jpeg'
    },
    {
        name: 'Music Club',
        description: 'Join fellow music lovers to learn, play, and perform various musical genres and instruments.',
        dates: 'Every Thursday, 5 PM - 7 PM',
        image: '/src/assets/Images/Music.jpeg'
    },
    {
        name: 'Art and Craft Club',
        description: 'Unleash your creativity with various art and craft activities, including painting, sketching, and DIY projects.',
        dates: 'Every Tuesday, 2 PM - 4 PM',
        image: '/src/assets/Images/Art and Craft.jpeg'
    }
];


const Groups = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-gray-200 min-h-screen">
                <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 animate-pulse">Active Activity Groups</h2>
                <div className="flex flex-wrap -mx-4">
                    {activeGroups.map((group, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <GroupCard group={group} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Groups;
