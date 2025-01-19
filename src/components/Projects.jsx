import React from 'react';
import { projectImg1, projectImg2, projectImg3 } from '../utils';

const projects = [
    {
        image: projectImg1,
        title: 'Modern Corporate Buildings: Architecture',
        description:
            'In the realm of modern architecture, corporate buildings stand as breathtaking examples of architectural mastery.',
    },
    {
        image: projectImg2,
        title: 'Innovative Design Solutions for Corporate Spaces',
        description:
            'When it comes to creating corporate spaces that inspire innovation and productivity, the design of the office...',
    },
    {
        image: projectImg3,
        title: 'Corporate Architecture Firm: Portfolio Showcase',
        description:
            'Welcome to our showcase of projects by a prestigious corporate architecture firm that focuses on innovative...',
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen px-6 py-12 sm:px-14 md:px-24 w-full bg-accent">
            {/* Header */}
            <h1 className="text-accent2 text-3xl sm:text-4xl md:text-5xl font-fraunces font-bold text-left">
                Projects
            </h1>
            <hr className="border-t-2 border-accent2 my-4 mx-auto w-full" />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 mt-8 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover"
                        />

                        {/* Project Details */}
                        <div className="p-6">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-avenir font-semibold text-accent2">
                                {project.title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-accent2 font-avenir mt-2">
                                {project.description}
                            </p>
                        </div>

                        {/* Learn More Section */}
                        <div className="flex justify-end items-center p-6 border-t">
                            <button className="text-sm sm:text-base text-accent2 font-semibold hover:underline">
                                Learn more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
