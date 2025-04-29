import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import { getProjects } from '../lib/api';
import { Project } from '../data/projectsData';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Une erreur est survenue lors du chargement des projets. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6 sm:py-8 md:py-12 flex-grow"
      >
        <ScrollAnimation>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mb-6 sm:mb-8 text-center sm:text-left">
            Réalisations
          </h1>
        </ScrollAnimation>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-anda-blue"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1}>
                <ProjectCard {...project} />
              </ScrollAnimation>
            ))}
          </div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Projects;
