import React from 'react';

const services = [
    {
        title: 'Design Consultation',
        price: '200 $US'
    },
    {
        title: 'Site Analysis',
        price: '300 $US'
    },
    {
        title: 'Project Planning Workshop',
        price: '400 $US'
    }
];

const Services = () => {
    return (
        <section className="bg-accent text-accent2 p-32">
            <h1 className="text-5xl font-fraunces font-bold mb-10">Services</h1>
            <hr className="border-t-2 border-accent2 my-4" />
            <div>
                {services.map((service, index) => (
                    <>
                        <div key={index} className="flex justify-between items-center py-6">
                            <h2 className="text-2xl">{service.title}</h2>
                            <button className="border border-accent2 font-avenir px-6 py-2 text-accent2 hover:bg-accent3 transition-all">
                                Book Now
                            </button>

                        </div>
                        <hr className="border-t- border-accent2 my-4" />
                    </>
                ))}
            </div>
        </section>
    );
}

export default Services;
