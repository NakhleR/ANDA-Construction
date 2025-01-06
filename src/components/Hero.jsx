import React from 'react'

const Hero = () => {
    return (
        <section className={`nav-height relative w-full hero-bg`}>
            <div className='flex flex-col w-full h-full p-20 items-start gap-32'>
                <span className='text-accent font-poppins text-sm font-medium'>Innovative Designs</span>
                <h1 className='text-accent font-fraunces text-[63px] font-medium'>Welcome To our firm...</h1>
            </div>
        </section>
    )
}

export default Hero