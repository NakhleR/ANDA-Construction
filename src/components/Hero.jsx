import React from 'react'

const Hero = () => {
    return (
        <section className={`nav-height relative w-full max-h-[80vh] hero-bg`}>
            <div className='flex flex-col w-full h-full p-20 items-start gap-20'>
                <span className='text-accent font-avenir text-xl font-medium'>Innovative Designs</span>
                <h1 className='text-accent w-[70%] font-fraunces text-3xl font-medium'>
                    Welcome to our architecture firm, where creativity meets functionality. We specialize in crafting innovative architectural solutions that cater to our clients' needs and exceed their expectations.
                </h1>
            </div>
        </section>
    )
}

export default Hero