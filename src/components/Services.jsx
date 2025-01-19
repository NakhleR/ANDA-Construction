import React from 'react';

const services = [
    {
        title: 'Design Consultation',
        price: '200 $US',
    },
    {
        title: 'Site Analysis',
        price: '300 $US',
    },
    {
        title: 'Project Planning Workshop',
        price: '400 $US',
    },
];

const Services = () => {
    return (
        <section className="bg-accent text-accent2 px-6 py-12 sm:px-14 md:px-24">
            {/* Section Header */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-fraunces font-bold mb-6 sm:mb-10 text-left">
                Services
            </h1>
            <hr className="border-t-2 border-accent2 my-4 w-full" />

            {/* Services List */}
            <div>
                {services.map((service, index) => (
                    <React.Fragment key={index}>
                        <div className="flex justify-between items-center py-6">
                            {/* Service Title */}
                            <h2 className="text-xl sm:text-2xl font-avenir">{service.title}</h2>

                            {/* Book Now Button */}
                            <button className="border border-accent2 font-avenir px-4 sm:px-6 py-2 text-sm sm:text-base text-accent2 hover:bg-accent3 transition-all">
                                Book Now
                            </button>
                        </div>
                        <hr className="border-t border-accent2 my-4" />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Services;
