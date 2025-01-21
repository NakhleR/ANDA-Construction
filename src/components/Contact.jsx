import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Logic to handle email submission
    };

    return (
        <section id="contact" className="min-h-screen px-4 sm:px-6 py-12 md:px-24 w-full bg-accent">
            <div>
                {/* Heading */}
                <h2 className="text-accent2 font-fraunces font-bold text-2xl sm:text-3xl md:text-[35px] text-center sm:text-left">
                    Looking Forward to working with you
                </h2>
                {/* Content */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-8 mt-10 mb-10">
                    {/* Form Section */}
                    <div className="w-full sm:w-[50%]">
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
                            <button
                                type="submit"
                                className="border mt-4 border-accent2 font-avenir px-4 sm:px-6 py-2 text-sm sm:text-base text-accent2 hover:bg-accent3 transition-all w-auto sm:w-auto"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Adjacent Div */}
                    <div className="w-full sm:w-[50%] p-4 sm:p-6 rounded-md text-center sm:text-left">
                        <p className="text-accent2 font-avenir">
                            Hello! We’d love to hear from you. Please fill out the form, and we’ll get back to you as
                            soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
