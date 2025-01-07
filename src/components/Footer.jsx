import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-accent text-accent2 p-32">
            <div className="border-t border-accent2 mb-8"></div>
            <div className="flex flex-col md:flex-row justify-between items-start">
                <h2 className="text-2xl font-bold font-fraunces">Civil Engineering Firm</h2>

                <div className="mt-6 font-avenir md:mt-0">
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                </div>

                <div className="mt-6 font-avenir md:mt-0">
                    <p>500 Terry Francine Street,</p>
                    <p>6th Floor, San Francisco,</p>
                    <p>CA 94158</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
