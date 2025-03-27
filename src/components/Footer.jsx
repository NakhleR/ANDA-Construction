import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.footer
            ref={ref}
            className="bg-accent text-accent2 px-6 py-12 sm:px-14 md:px-24 relative"
        >
            {/* Top Border */}
            <motion.div
                className="border-t border-accent2 mb-8"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Footer Content */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                {/* Company Name */}
                <motion.h2
                    className="text-xl sm:text-2xl font-bold font-fraunces"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    ANDA Construction
                </motion.h2>

                {/* Contact Info */}
                <motion.div
                    className="font-avenir"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p>+33 7 78 78 62 79</p>
                    <p>hussein.wehbe@anda-construction.fr</p>
                </motion.div>

                {/* Address */}
                <motion.div
                    className="font-avenir"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p>Hangar 105</p>
                    <p>105 Allée Francois Mitterand</p>
                    <p>Rouen 76100</p><br />
                    <p>4 Allée du Coucou</p>
                    <p>Louviers 27400</p>
                </motion.div>
            </div>

            {/* Logo at the bottom center */}
            <a href='https://nexusco.fr' target='_blank' className='absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 mt-4 mb-4 cursor-pointer'>
                <span className='flex items-center justify-center'>
                    Created by <img src='/assets/images/logo.svg' className='ml-2' width={120} height={120} alt="Logo" />
                </span>
            </a>
        </motion.footer>
    );
};

export default Footer;
