import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id='accueil'
            className="nav-height mt-[60px] relative w-full max-h-[80vh] hero-bg"
        >
            <div className="flex flex-col w-full items-start justify-center sm:items-start sm:justify-start h-full px-6 py-12 sm:p-20 gap-10 sm:gap-20">
                {/* Tagline */}
                <motion.span
                    className="text-accent font-avenir text-lg sm:text-xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    ANDA Construction, Votre vision, notre expertise !
                </motion.span>

                {/* Hero Text */}
                <motion.h1
                    className="text-accent w-full sm:w-[70%] font-fraunces text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed sm:leading-snug"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Spécialistes des maisons individuelles, immeubles résidentiels et hangars industriels, nous transformons vos idées en constructions durables et sur mesure. Grâce à plus de 10 ans d’expertise, nous garantissons qualité, fiabilité et respect des délais.
                    Faites confiance à ANDA Construction pour donner vie à vos projets et bâtir un avenir solide.
                </motion.h1>
            </div>
        </section>
    );
};

export default Hero;
