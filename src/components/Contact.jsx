import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Logic to handle email submission
    };

    return (
        <section
            ref={ref}
            id="contact"
            className="min-h-screen px-4 sm:px-6 py-12 md:px-24 w-full bg-accent"
        >
            <div>
                {/* Heading */}
                <motion.h2
                    className="text-accent2 font-fraunces font-bold text-2xl sm:text-3xl md:text-[35px] text-center sm:text-left"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Looking Forward to working with you
                </motion.h2>

                {/* Content */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-8 mt-10 mb-10">
                    {/* Form Section */}
                    <motion.div
                        className="w-full sm:w-[50%]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                            {/* Input Fields */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nom"
                                        name="user_nom"
                                        required
                                        className="flex-1 w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Prénom"
                                        name="user_prenom"
                                        required
                                        className="flex-1 w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Adresse"
                                        name="user_adresse"
                                        required
                                        className="flex-1 w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Ville"
                                        name="user_ville"
                                        required
                                        className="flex-1 w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="user_email"
                                    required
                                    className="w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3"
                                />
                                <textarea
                                    type="text"
                                    name="project_description"
                                    placeholder="Petite description de votre projet (dites nous plus sur votre projet)"
                                    required
                                    className="w-full bg-accent border focus:rounded-none placeholder-accent2 focus:border-accent2 focus:outline-accent2 text-accent2 font-avenir border-accent2 p-3 h-40"
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="border mt-4 border-accent2 font-avenir px-4 sm:px-6 py-2 text-sm sm:text-base text-accent2 hover:bg-accent3 transition-all w-auto sm:w-auto"
                                initial={{ y: 10, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Send
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Adjacent Div */}
                    <motion.div
                        className="w-full sm:w-[50%] p-4 sm:p-0 rounded-md text-center sm:text-left"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-accent2 font-avenir">
                            Hello! We’d love to hear from you. Please fill out the form, and we’ll get back to you as
                            soon as possible.
                        </p>
                        <div className='flex flex-col w-full h-full items-center justify-center'>
                            <motion.img
                                width={400}
                                src='/assets/images/contact.png'
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
