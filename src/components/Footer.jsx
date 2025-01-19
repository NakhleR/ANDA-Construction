import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-accent text-accent2 px-6 py-12 sm:px-14 md:px-24">
            {/* Top Border */}
            <div className="border-t border-accent2 mb-8"></div>

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Company Name */}
                <h2 className="text-xl sm:text-2xl font-bold font-fraunces">
                    Civil Engineering Firm
                </h2>

                {/* Contact Info */}
                <div className="font-avenir">
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                </div>

                {/* Address */}
                <div className="font-avenir">
                    <p>500 Terry Francine Street,</p>
                    <p>6th Floor, San Francisco,</p>
                    <p>CA 94158</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
