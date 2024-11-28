import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Post from '../components/Post';

const samplePosts = [
    {
        image: '/src/assets/profile2.jpg',
        uploader: 'John Doe',
        details: 'Had a great time at the college festival!',
        postImage: '/src/assets/Front.jpeg',
        likes: 34,
        comments: [
            { user: 'Jane Smith', comment: 'Looks fun!' },
            { user: 'Mike Brown', comment: 'Wish I could have been there!' }
        ]
    },
    {
        image: '/src/assets/profile2.jpg',
        uploader: 'Jane Smith',
        details: 'Just completed my final project! So relieved!',
        postImage: '/src/assets/Front.jpeg',
        likes: 45,
        comments: [
            { user: 'John Doe', comment: 'Congrats!' },
            { user: 'Emily White', comment: 'Well done!' }
        ]
    },
    {
        image: '/src/assets/profile2.jpg',
        uploader: 'John Doe',
        details: 'Had a great time at the college festival!',
        postImage: '/src/assets/Front.jpeg',
        likes: 34,
        comments: [
            { user: 'Jane Smith', comment: 'Looks fun!' },
            { user: 'Mike Brown', comment: 'Wish I could have been there!' }
        ]
    },
    {
        image: '/src/assets/profile2.jpg',
        uploader: 'Jane Smith',
        details: 'Just completed my final project! So relieved!',
        postImage: '/src/assets/Front.jpeg',
        likes: 45,
        comments: [
            { user: 'John Doe', comment: 'Congrats!' },
            { user: 'Emily White', comment: 'Well done!' }
        ]
    },
    // Add more sample posts as needed
];

const Posts = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-gray-200 min-h-screen">
                <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 animate-pulse">User Posts</h2>
                <div className="flex flex-wrap -mx-4">
                    {samplePosts.map((post, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Posts;
