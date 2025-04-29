import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import { projectsData } from '../data/projectsData';

const Index = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Get featured projects (just the first 3)
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[120%] top-[-10%]"
          style={{
            y,
            backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6"
            >
              ANDA Construction, Votre vision, notre expertise !
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8"
            >
              Spécialistes des maisons individuelles, immeubles résidentiels et hangars industriels
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="inline-block bg-white text-text-dark px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-opacity-90 transition-colors duration-200">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-16 bg-sand">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center max-w-3xl mx-auto">
              Spécialistes des maisons individuelles, immeubles résidentiels et hangars industriels, nous transformons vos idées en constructions durables et sur mesure.
            </h2>
          </ScrollAnimation>

          <div className="divider mx-auto max-w-xs"></div>

          <ScrollAnimation delay={0.2}>
            <p className="text-center text-text-medium max-w-3xl mx-auto text-sm sm:text-base">
              Grâce à plus de 10 ans d'expertise, nous garantissons qualité, fiabilité et respect des délais. Faites confiance à ANDA Construction pour donner vie à vos projets et bâtir un avenir solide.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-text-dark mb-8 sm:mb-12 text-center">
              Pourquoi nous choisir ?
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-anda-blue bg-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-anda-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 font-serif">Excellence et Qualité</h3>
                <p className="text-text-medium text-sm">Nous garantissons des standards élevés à chaque étape de votre projet de construction.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-anda-blue bg-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-anda-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 font-serif">Respect des Délais</h3>
                <p className="text-text-medium text-sm">Nous livrons toujours vos projets dans les délais convenus, sans compromis sur la qualité.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-anda-blue bg-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-anda-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 font-serif">Sur Mesure</h3>
                <p className="text-text-medium text-sm">Chaque projet est unique. Nous vous proposons des solutions personnalisées adaptées à vos besoins.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-anda-blue bg-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-anda-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 font-serif">Innovation</h3>
                <p className="text-text-medium text-sm">Nous intégrons les dernières technologies et techniques pour des constructions durables et efficaces.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 sm:py-16 bg-sand">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mt-4 sm:mt-8 mb-4 sm:mb-6 text-center sm:text-left">
              Nos Services
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="service-card">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Construction de maisons individuelles"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-medium mb-2">Construction de maisons individuelles</h3>
                <p className="text-text-medium mb-4 text-sm sm:text-base">
                  In the realm of modern architecture, corporate buildings stand as breathtaking examples of architectural mastery.
                </p>
                <Link to="/services" className="text-anda-blue hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="service-card">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Construction d'immeubles résidentiels"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-medium mb-2">Construction d'immeubles résidentiels</h3>
                <p className="text-text-medium mb-4 text-sm sm:text-base">
                  When it comes to creating corporate spaces that inspire innovation and productivity, the design of the office...
                </p>
                <Link to="/services" className="text-anda-blue hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="service-card sm:col-span-2 lg:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1631467946253-f516ffa585c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                  alt="Construction de hangars industriels"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-medium mb-2">Construction de hangars industriels</h3>
                <p className="text-text-medium mb-4 text-sm sm:text-base">
                  Welcome to our showcase of projects by a prestigious corporate architecture firm that focuses on innovative...
                </p>
                <Link to="/services" className="text-anda-blue hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-text-dark mb-4 sm:mb-0">
                Projets récents
              </h2>
              <Link to="/projects" className="btn-primary">
                Voir tous les projets
              </Link>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                  onClick={() => window.location.href = `/projects/${project.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                      <span className="text-xs text-white bg-anda-blue px-2 py-1 rounded">{project.category}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-medium mb-2">{project.title}</h3>
                    <div className="flex justify-between text-text-medium text-xs sm:text-sm mb-3">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-text-medium text-sm line-clamp-2 mb-3">{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="text-anda-blue text-sm hover:underline inline-flex items-center">
                      En savoir plus
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-sand">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-text-dark mb-8 sm:mb-12 text-center">
              Ce que disent nos clients
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="text-anda-blue absolute -top-4 left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9167 15.8333C14.1667 15.8333 15.25 16.2917 16.1667 17.2083C17.0833 18.125 17.5417 19.2083 17.5417 20.4583C17.5417 21.9583 16.9583 23.3333 15.7917 24.5833C14.625 25.8333 13.125 26.6667 11.2917 27.0833L10.625 25.75C12.125 25.0833 13.2917 24.2083 14.125 23.125C14.9583 22.0417 15.375 20.9167 15.375 19.75C15.0417 19.9167 14.5833 20 14 20C13.0833 20 12.2917 19.6667 11.625 19C10.9583 18.3333 10.625 17.5417 10.625 16.625C10.625 15.7083 10.9583 14.9167 11.625 14.25C12.2917 13.5833 13.0833 13.25 14 13.25L12.9167 15.8333ZM25.4167 15.8333C26.6667 15.8333 27.75 16.2917 28.6667 17.2083C29.5833 18.125 30.0417 19.2083 30.0417 20.4583C30.0417 21.9583 29.4583 23.3333 28.2917 24.5833C27.125 25.8333 25.625 26.6667 23.7917 27.0833L23.125 25.75C24.625 25.0833 25.7917 24.2083 26.625 23.125C27.4583 22.0417 27.875 20.9167 27.875 19.75C27.5417 19.9167 27.0833 20 26.5 20C25.5833 20 24.7917 19.6667 24.125 19C23.4583 18.3333 23.125 17.5417 23.125 16.625C23.125 15.7083 23.4583 14.9167 24.125 14.25C24.7917 13.5833 25.5833 13.25 26.5 13.25L25.4167 15.8333Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-text-medium mb-4 mt-4 text-sm sm:text-base italic">
                  "ANDA Construction a réalisé notre maison de rêve avec un professionnalisme exemplaire. De la conception à la livraison, leur équipe a su nous écouter et répondre à nos attentes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden mr-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jean Dupont" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Jean Dupont</p>
                    <p className="text-text-light text-xs">Rouen, France</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="text-anda-blue absolute -top-4 left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9167 15.8333C14.1667 15.8333 15.25 16.2917 16.1667 17.2083C17.0833 18.125 17.5417 19.2083 17.5417 20.4583C17.5417 21.9583 16.9583 23.3333 15.7917 24.5833C14.625 25.8333 13.125 26.6667 11.2917 27.0833L10.625 25.75C12.125 25.0833 13.2917 24.2083 14.125 23.125C14.9583 22.0417 15.375 20.9167 15.375 19.75C15.0417 19.9167 14.5833 20 14 20C13.0833 20 12.2917 19.6667 11.625 19C10.9583 18.3333 10.625 17.5417 10.625 16.625C10.625 15.7083 10.9583 14.9167 11.625 14.25C12.2917 13.5833 13.0833 13.25 14 13.25L12.9167 15.8333ZM25.4167 15.8333C26.6667 15.8333 27.75 16.2917 28.6667 17.2083C29.5833 18.125 30.0417 19.2083 30.0417 20.4583C30.0417 21.9583 29.4583 23.3333 28.2917 24.5833C27.125 25.8333 25.625 26.6667 23.7917 27.0833L23.125 25.75C24.625 25.0833 25.7917 24.2083 26.625 23.125C27.4583 22.0417 27.875 20.9167 27.875 19.75C27.5417 19.9167 27.0833 20 26.5 20C25.5833 20 24.7917 19.6667 24.125 19C23.4583 18.3333 23.125 17.5417 23.125 16.625C23.125 15.7083 23.4583 14.9167 24.125 14.25C24.7917 13.5833 25.5833 13.25 26.5 13.25L25.4167 15.8333Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-text-medium mb-4 mt-4 text-sm sm:text-base italic">
                  "Nous avons fait appel à ANDA Construction pour notre immeuble résidentiel de 8 appartements. Leur expertise et leur capacité à gérer un projet de cette envergure nous ont impressionnés."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden mr-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Marie Leroy" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Marie Leroy</p>
                    <p className="text-text-light text-xs">Lyon, France</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow relative">
                <div className="text-anda-blue absolute -top-4 left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9167 15.8333C14.1667 15.8333 15.25 16.2917 16.1667 17.2083C17.0833 18.125 17.5417 19.2083 17.5417 20.4583C17.5417 21.9583 16.9583 23.3333 15.7917 24.5833C14.625 25.8333 13.125 26.6667 11.2917 27.0833L10.625 25.75C12.125 25.0833 13.2917 24.2083 14.125 23.125C14.9583 22.0417 15.375 20.9167 15.375 19.75C15.0417 19.9167 14.5833 20 14 20C13.0833 20 12.2917 19.6667 11.625 19C10.9583 18.3333 10.625 17.5417 10.625 16.625C10.625 15.7083 10.9583 14.9167 11.625 14.25C12.2917 13.5833 13.0833 13.25 14 13.25L12.9167 15.8333ZM25.4167 15.8333C26.6667 15.8333 27.75 16.2917 28.6667 17.2083C29.5833 18.125 30.0417 19.2083 30.0417 20.4583C30.0417 21.9583 29.4583 23.3333 28.2917 24.5833C27.125 25.8333 25.625 26.6667 23.7917 27.0833L23.125 25.75C24.625 25.0833 25.7917 24.2083 26.625 23.125C27.4583 22.0417 27.875 20.9167 27.875 19.75C27.5417 19.9167 27.0833 20 26.5 20C25.5833 20 24.7917 19.6667 24.125 19C23.4583 18.3333 23.125 17.5417 23.125 16.625C23.125 15.7083 23.4583 14.9167 24.125 14.25C24.7917 13.5833 25.5833 13.25 26.5 13.25L25.4167 15.8333Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-text-medium mb-4 mt-4 text-sm sm:text-base italic">
                  "ANDA Construction a construit notre hangar industriel en respectant parfaitement les délais et le budget. Leur équipe technique a su s'adapter à nos besoins spécifiques."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden mr-3">
                    <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Philippe Martin" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Philippe Martin</p>
                    <p className="text-text-light text-xs">Bordeaux, France</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 relative bg-anda-blue">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-white mb-4 sm:mb-6">
                Prêt à donner vie à votre projet ?
              </h2>
              <p className="text-white opacity-90 mb-8 sm:mb-10 text-sm sm:text-base">
                Contactez-nous dès aujourd'hui pour discuter de votre vision et obtenir un devis personnalisé.
                Notre équipe d'experts se fera un plaisir de vous accompagner à chaque étape.
              </p>
              <Link to="/contact" className="inline-block bg-white text-anda-blue px-8 py-3 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 font-medium">
                Demander un devis gratuit
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
