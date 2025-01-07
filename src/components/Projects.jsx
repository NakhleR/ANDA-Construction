import React from 'react'
import { projectImg1, projectImg2, projectImg3 } from '../utils'

const projects = [
    {
        image: projectImg1,
        title: 'Modern Corporate Buildings: Architecture',
        description: 'In the realm of modern architecture, corporate buildings stand as breathtaking examples of architectural mastery.',
    },
    {
        image: projectImg2,
        title: 'Innovative Design Solutions for Corporate Spaces',
        description: 'When it comes to creating corporate spaces that inspire innovation and productivity, the design of the office...',
    },
    {
        image: projectImg3,
        title: 'Corporate Architecture Firm: Portfolio Showcase',
        description: 'Welcome to our showcase of projects by a prestigious corporate architecture firm that focuses on innovative...',
    }
];

const Projects = () => {

    return (
        <section className='min-h-[100vh] p-32 w-full bg-accent'>
            <h1 className='text-accent2 text-5xl font-fraunces font-bold'>Projects</h1>
            <hr className="border-t-2 border-accent2 my-4" />
            <div className="grid grid-cols-1 mt-11 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-avenir font-semibold text-accent2">{project.title}</h2>
                            <p className="text-accent2 font-avenir mt-2">{project.description}</p>
                        </div>
                        <div className="flex justify-end items-center p-6 border-t">
                            <div className="flex items-center space-x-2">
                                <span className="text-accent2">Learn more</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects