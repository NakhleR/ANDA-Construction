import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.footer
            ref={ref}
            className="bg-accent text-accent2 px-6 py-12 sm:px-14 md:px-24"
        >
            {/* Top Border */}
            <motion.div
                className="border-t border-accent2 mb-8"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
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
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                </motion.div>

                {/* Address */}
                <motion.div
                    className="font-avenir"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p>500 Terry Francine Street,</p>
                    <p>6th Floor, San Francisco,</p>
                    <p>CA 94158</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
