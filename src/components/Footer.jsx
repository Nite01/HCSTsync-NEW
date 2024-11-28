import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white p-8">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-bold">College Details</h3>
                    <img src="\src\assets\LOGO-WITH-NAAC.png" alt="College Image" className="w-[329px] h-[73px] object-cover rounded-lg mb-4 mx-auto" />
                    <p>123 College St, Etmadpur, Uttar Pradesh, India</p>
                    <p>Phone: +91 12345 67890</p>
                    <p>Email: info@hcstsync.com</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">About Us</h3>
                    <p>Learn more about our mission, vision, and values.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                    <p>Have questions? Reach out to us anytime!</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
