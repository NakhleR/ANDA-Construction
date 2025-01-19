import React from 'react';

const Hero = () => {
    return (
        <section className="nav-height mt-[60px] relative w-full max-h-[80vh] hero-bg">
            <div className="flex flex-col w-full items-start justify-center sm:items-start sm:justify-start h-full px-6 py-12 sm:p-20 gap-10 sm:gap-20">
                {/* Tagline */}
                <span className="text-accent font-avenir text-lg sm:text-xl font-medium">
                    Innovative Designs
                </span>

                {/* Hero Text */}
                <h1 className="text-accent w-full sm:w-[70%] font-fraunces text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed sm:leading-snug">
                    Welcome to our architecture firm, where creativity meets functionality. We specialize in crafting
                    innovative architectural solutions that cater to our clients' needs and exceed their expectations.
                </h1>
            </div>
        </section>
    );
};

export default Hero;
