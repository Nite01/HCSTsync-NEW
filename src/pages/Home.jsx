import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Ensure the Navbar component is imported
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';


const HomePage = () => {

    const [visibleImages, setVisibleImages] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleImages((prev) => (prev < 4 ? prev + 1 : 4));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />

            {/* Video Section with Overlay Text */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/src/assets/Videos/HindustanCampusVideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 text-center">
                    <img src="\src\assets\NAACAlogo.png" alt="Welcome Image" className="mb-4 w-32 h-32 object-cover" />
                    <h1 className="text-4xl font-bold">Welcome to HCSTsync</h1>
                    <p className="mt-4 text-xl">Connecting Our Campus, Empowering Our Future!</p>
                    <p className="mt-4 text-xl">
                        HCSTsync is more than just a social media platform; it's a dedicated space for the HCST community to thrive together. Designed exclusively for students, faculty, and alumni, it bridges the gap between academic and professional worlds. Share your thoughts, showcase your achievements, explore opportunities, and stay connected with the people who matter most in your college journey. With features like personalized profiles, real-time communication, and a job network powered by alumni, HCSTsync is here to nurture connections and build lasting relationships within our campus family.
                    </p>
                </div>
            </section>

            {/* Thought of College Section */}
            <section className="bg-white text-green-600 p-8 text-center relative">
                <div className="absolute inset-0 bg-opacity-20 bg-gray-800 mix-blend-overlay"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-extrabold mb-4">Our Vision</h2>
                    <p className="text-xl italic">
                        "At HCST, we strive to cultivate a learning environment that empowers students to achieve excellence in every endeavor."
                    </p>
                </div>
            </section>


            {/* Image Gallery Section */}
            <section className="relative h-100 overflow-hidden p-8 mt-10 mb-10">
                <Slideshow />
            </section>






            {/* Social Media Links Section */}
            <section className="bg-white text-green-500 p-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Follow Us</h2>

                <div className="mt-4 space-y-6">
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com"
                            className="relative bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fab fa-facebook-f text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                        <a
                            href="https://whatsapp.com"
                            className="relative bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-700 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fab fa-whatsapp text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="relative bg-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-900 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fab fa-linkedin-in text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://instagram.com"
                            className="relative bg-pink-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-700 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fab fa-instagram text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                        <a
                            href="https://twitter.com"
                            className="relative bg-blue-400 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                        <a
                            href="mailto:someone@example.com"
                            className="relative bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <i className="fas fa-envelope text-2xl"></i>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"></div>
                        </a>
                    </div>
                </div>


            </section>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default HomePage;
