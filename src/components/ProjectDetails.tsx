import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Project } from '../data/projectsData';
import Navbar from './Navbar';
import Footer from './Footer';
import { getProjectById } from '../lib/api';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!id) {
          setProject(null);
          return;
        }

        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        console.error('Error fetching project details:', err);
        setError('Une erreur est survenue lors du chargement des détails du projet. Veuillez réessayer plus tard.');
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-anda-blue mb-4" />
          <p className="text-text-medium">Chargement du projet...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif mb-4">Erreur</h2>
          <p className="mb-6 text-red-600">{error}</p>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-text-medium hover:text-text-dark mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif mb-4">Projet non trouvé</h2>
          <p className="mb-6 text-text-medium">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-text-medium hover:text-text-dark mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6 sm:py-8"
      >
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-text-medium hover:text-text-dark mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Retour aux projets
        </button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium">{project.title}</h1>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-text-medium text-sm sm:text-base">
                  <span className="font-medium">Catégorie</span>
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center justify-between text-text-medium text-sm sm:text-base">
                  <span className="font-medium">Localisation</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center justify-between text-text-medium text-sm sm:text-base">
                  <span className="font-medium">Année</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center justify-between text-text-medium text-sm sm:text-base">
                  <span className="font-medium">Client</span>
                  <span>{project.client}</span>
                </div>
              </div>
              <p className="text-text-medium leading-relaxed text-sm sm:text-base">{project.description}</p>

              {/* Display scope if available */}
              {project.scope && project.scope.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Portée du projet:</h3>
                  <ul className="list-disc pl-5 text-text-medium text-sm sm:text-base">
                    {project.scope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Challenge, Solution, Result Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-serif mb-3">Challenge</h3>
              <p className="text-text-medium text-sm sm:text-base">{project.challenge}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-serif mb-3">Solution</h3>
              <p className="text-text-medium text-sm sm:text-base">{project.solution}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-serif mb-3">Résultat</h3>
              <p className="text-text-medium text-sm sm:text-base">{project.result}</p>
            </div>
          </div>

          {/* Gallery Section */}
          {project.images && project.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-serif mb-6">Galerie du projet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((img, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <img
                      src={img}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
