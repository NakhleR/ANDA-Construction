import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projectsData';
import { BsArrowLeft, BsBuilding, BsCalendar, BsColumns } from 'react-icons/bs';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projectsData.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-2xl font-serif">Project Not Found</h2>
                    <button
                        onClick={() => navigate('/projects')}
                        className="mt-4 inline-flex items-center px-4 py-2 bg-anda-blue text-white rounded-md hover:bg-blue-700"
                    >
                        <BsArrowLeft className="mr-2" /> Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center px-4 py-2 bg-anda-blue text-white rounded-md hover:bg-blue-700"
            >
                <BsArrowLeft className="mr-2" /> Back
            </button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl md:text-4xl font-serif mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6 text-text-medium">
                    <div className="flex items-center">
                        <BsBuilding className="mr-1" /> {project.client}
                    </div>
                    <div className="flex items-center">
                        <BsCalendar className="mr-1" /> {project.year}
                    </div>
                    <div className="flex items-center">
                        <BsColumns className="mr-1" /> {project.category}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif mb-4">Project Overview</h2>
                        <p className="text-text-medium mb-4">{project.description}</p>
                        <div className="mb-4">
                            <h3 className="font-medium text-lg mb-2">Location</h3>
                            <p className="text-text-medium">{project.location}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-medium text-lg mb-2">Scope</h3>
                            <p className="text-text-medium">{project.scope}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-serif mb-3">Challenge</h2>
                        <p className="text-text-medium">{project.challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-serif mb-3">Solution</h2>
                        <p className="text-text-medium">{project.solution}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-serif mb-3">Result</h2>
                        <p className="text-text-medium">{project.result}</p>
                    </div>
                </div>

                {project.images && project.images.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-serif mb-6">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.images.map((img, index) => (
                                <div key={index} className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={img}
                                        alt={`${project.title} - image ${index + 1}`}
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow hover:shadow-md transition-shadow"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ProjectDetail; 