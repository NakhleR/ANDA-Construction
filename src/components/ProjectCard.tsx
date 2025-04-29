import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '../data/projectsData';

interface ProjectCardProps extends Partial<Project> {
  id: string;
  title: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category = 'Projet',
  location = 'Non spécifié',
  year = '',
  image,
  description = ''
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/600x400?text=Image+non+disponible';
          }}
        />
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <span className="text-xs sm:text-sm text-anda-blue font-medium">{category}</span>
        <h3 className="text-base sm:text-lg md:text-xl font-serif font-medium mt-1 mb-1 sm:mb-2">{title}</h3>
        <div className="flex justify-between text-text-medium text-xs sm:text-sm mb-2 sm:mb-4">
          <span>{location}</span>
          <span>{year}</span>
        </div>
        <p className="text-text-medium text-xs sm:text-sm md:text-base line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
