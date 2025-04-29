import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <ScrollAnimation>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mb-6 sm:mb-8 text-center sm:text-left">
            À propos de nous
          </h1>
        </ScrollAnimation>

        <div className="divider"></div>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
              Bienvenue chez ANDA Construction, Qui sommes-nous ?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-text-medium mb-4 sm:mb-6">
              Depuis 15 ans, nous transformons des terrains en véritables espaces de vie et de travail, en offrant des solutions de construction sur mesure. Spécialisés dans les maisons individuelles, les immeubles résidentiels et les hangars industriels en clos et couvert, nous faisons de chaque projet une référence de qualité et de durabilité.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg text-text-medium mb-4 sm:mb-6">
              Grâce à notre savoir-faire éprouvé, notre équipe vous accompagne à chaque étape, de la conception à la livraison, avec une approche centrée sur vos besoins. Que vous imaginiez un lotissement moderne, un immeuble aux lignes élégantes ou une structure industrielle robuste, ANDA Construction est votre partenaire de confiance où vos projets prennent vie ! Faites appel à notre expertise et construisons ensemble votre vision de demain !
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12">
            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Notre mission</h3>
                <p className="text-text-medium text-sm sm:text-base">
                  Chez ANDA Construction, notre mission est de transformer vos idées en réalités architecturales exceptionnelles, en alliant innovation, qualité et respect de l'environnement. Nous nous engageons à créer des espaces qui répondent parfaitement à vos besoins tout en vous offrant une expérience de construction sans stress.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Nos valeurs</h3>
                <p className="text-text-medium text-sm sm:text-base">
                  L'excellence, l'intégrité et la durabilité sont au cœur de tout ce que nous faisons. Nous croyons en la transparence totale avec nos clients, l'attention méticuleuse aux détails et l'utilisation de pratiques de construction responsables. Notre équipe s'engage à maintenir les plus hauts standards de qualité et de service.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="bg-sand p-4 sm:p-6 md:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Notre équipe</h3>
              <p className="text-text-medium mb-3 sm:mb-4 text-sm sm:text-base">
                ANDA Construction est composée de professionnels passionnés et expérimentés dans tous les aspects de la construction et de l'architecture. Notre équipe multidisciplinaire comprend des architectes, des ingénieurs, des chefs de projet et des artisans qualifiés, tous unis par la passion de créer des espaces exceptionnels.
              </p>
              <p className="text-text-medium text-sm sm:text-base">
                Chaque membre de notre équipe apporte son expertise unique et son engagement envers l'excellence, garantissant que votre projet est entre les meilleures mains du début à la fin.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
