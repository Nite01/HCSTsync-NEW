import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-green-600 p-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <img src="\src\assets\THIS.jpg" alt="HCSTsync Logo" className="h-10 w-40 mr-3" />
            </div>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-white text-lg font-bold">
                <li><a href="/" className="hover:text-green-300">Home</a></li>
                <li><a href="/posts" className="hover:text-green-300">Posts</a></li>
                <li><a href="/groups" className="hover:text-green-300">Groups</a></li>
                <li><a href="/jobs" className="hover:text-green-300">Jobs</a></li>
                <li><a href="/directory" className="hover:text-green-300">Directory</a></li>
                <li><a href="/yearbook" className="hover:text-green-300">YearBook</a></li>
                <li><a href="/gallery" className="hover:text-green-300">Gallery</a></li>
            </ul>

            {/* Profile Image */}
            <div>
                <a href="/profile">
                    <img src="\src\assets\profile2.jpg" alt="Profile" className="h-10 w-10 rounded-full" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
