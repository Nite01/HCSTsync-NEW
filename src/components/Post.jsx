import React from "react";

const Post = ({ post }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg mb-4 bg-white">
            <div className="flex items-center mb-2">
                <img src={post.image} alt={post.uploader} className="w-10 h-10 rounded-full mr-2" />
                <span className="font-bold text-gray-800">{post.uploader}</span>
            </div>
            <p className="text-gray-700">{post.details}</p>
            {post.postImage && (
                <img src={post.postImage} alt="Post Content" className="max-w-full h-auto rounded-lg mt-4" style={{ maxHeight: '300px', objectFit: 'cover' }} />
            )}
            <div className="mt-4 flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                    <i className="fas fa-thumbs-up mr-2"></i> {post.likes}
                </span>
                <span className="flex items-center">
                    <i className="fas fa-comment mr-2"></i> {post.comments.length}
                </span>
            </div>
        </div>
    );
};

export default Post;
