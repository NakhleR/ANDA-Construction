import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Helmet>
        <title>Entreprise de construction à Rouen | Nos services | ANDA Construction</title>
        <meta name="description" content="Services de construction à Rouen: maisons individuelles, immeubles résidentiels, hangars industriels, rénovation et réhabilitation. Qualité, délais, durabilité." />
        <meta name="keywords" content="services construction Rouen, constructeur maison, immeuble résidentiel, hangar industriel, rénovation, entreprise BTP Normandie" />
        <link rel="canonical" href="https://anda-construction.fr/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos services de construction | ANDA Construction" />
        <meta property="og:description" content="Maisons, immeubles, hangars industriels et rénovation à Rouen." />
        <meta property="og:url" content="https://anda-construction.fr/services" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Nos services de construction | ANDA Construction" />
        <meta name="twitter:description" content="Maisons, immeubles, hangars industriels et rénovation à Rouen." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Construction et rénovation',
            serviceType: 'Maisons individuelles, immeubles résidentiels, hangars industriels, rénovation',
            areaServed: { '@type': 'Place', name: 'Rouen, Normandie' },
            provider: { '@type': 'Organization', name: 'ANDA Construction', url: 'https://anda-construction.fr' }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <ScrollAnimation>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mb-6 sm:mb-8 text-center sm:text-left">
            Nos Services
          </h1>
        </ScrollAnimation>

        <div className="divider"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-6 sm:py-8">
          <ScrollAnimation delay={0.1}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Construction de maisons individuelles"
                className="w-full h-56 sm:h-64 md:h-80 object-cover mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-4">Construction de maisons individuelles</h2>
              <p className="text-text-medium text-sm sm:text-base">
                Dans le domaine de l'architecture moderne, les maisons individuelles représentent l'expression parfaite de votre personnalité et de vos besoins. ANDA Construction vous accompagne dans la réalisation de votre projet sur-mesure, alliant esthétique, fonctionnalité et durabilité. Notre équipe d'experts vous guide à chaque étape, de la conception à la livraison, pour créer un espace de vie qui vous ressemble.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Construction d'immeubles résidentiels"
                className="w-full h-56 sm:h-64 md:h-80 object-cover mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-4">Construction d'immeubles résidentiels</h2>
              <p className="text-text-medium text-sm sm:text-base">
                Lorsqu'il s'agit de créer des espaces résidentiels qui inspirent bien-être et confort, la conception de l'immeuble joue un rôle crucial. Chez ANDA Construction, nous concevons et réalisons des immeubles résidentiels qui allient élégance architecturale, fonctionnalité des espaces et respect des normes environnementales. Notre expertise nous permet de mener à bien des projets résidentiels de toute envergure.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-6 sm:py-8">
          <ScrollAnimation delay={0.3}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Construction de hangars industriels"
                className="w-full h-56 sm:h-64 md:h-80 object-cover mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-4">Construction de hangars industriels</h2>
              <p className="text-text-medium text-sm sm:text-base">
                Bienvenue dans notre univers de projets industriels, où nous mettons en œuvre des solutions architecturales innovantes pour répondre aux besoins spécifiques de votre activité. Que vous ayez besoin d'un hangar de stockage, d'un atelier de production ou d'un espace logistique, ANDA Construction vous propose des structures fonctionnelles, robustes et adaptées à vos contraintes opérationnelles.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Rénovation et réhabilitation"
                className="w-full h-56 sm:h-64 md:h-80 object-cover mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-4">Rénovation et réhabilitation</h2>
              <p className="text-text-medium text-sm sm:text-base">
                Donner une nouvelle vie à des bâtiments existants est l'une de nos spécialités. ANDA Construction met son expertise au service de vos projets de rénovation et de réhabilitation, qu'il s'agisse de maisons anciennes, d'appartements ou de locaux professionnels. Nous préservons le charme de l'existant tout en apportant les améliorations nécessaires en termes de confort, de performance énergétique et de fonctionnalité.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
