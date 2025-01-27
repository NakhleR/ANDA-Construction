import React from 'react'

const About = () => {
    return (
        <section id='a-propos' className="min-h-[90vh] px-6 py-12 sm:px-14 md:px-24 w-full bg-accent">
            <h1 className="text-accent2 text-3xl sm:text-4xl md:text-5xl font-fraunces font-bold text-left">
                À propos de nous
            </h1>
            <hr className="border-t-2 border-accent2 my-4 mx-auto w-full" />
            <div className='size-full mt-32 flex-col flex items-center justify-center text-center'>
                <p className="text-sm font-bold sm:text-lg font-avenir mb-11 text-accent2">
                    Bienvenue chez ANDA Construction, Qui sommes-nous ?
                </p>
                <p className="text-sm sm:text-lg font-avenir mb-11 text-accent2">
                    Bienvenue chez ANDA Construction, Qui sommes-nous ?
                    Depuis 15 ans, nous transformons des terrains en véritables espaces de vie et de travail, en offrant des solutions de construction sur mesure. Spécialisés dans les maisons individuelles, les immeubles résidentiels et les hangars industriels en clos et couvert, nous faisons de chaque projet une référence de qualité et de durabilité.
                    Grâce à notre savoir-faire éprouvé, notre équipe vous accompagne à chaque étape, de la conception à la livraison, avec une approche centrée sur vos besoins.
                    Que vous imaginiez un lotissement moderne, un immeuble aux lignes élégantes ou une structure industrielle robuste, ANDA Construction est votre partenaire de confiance où vos projets prennent vie !

                    Faites appel à notre expertise et construisons ensemble votre vision de demain !
                </p>
            </div>
        </section>
    )
}

export default About