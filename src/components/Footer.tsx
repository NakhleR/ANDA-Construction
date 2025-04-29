import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream py-8 sm:py-12 border-t border-text-light/20 relative">
      <div className="container mx-auto px-4">
        <div className="divider"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-serif font-medium text-lg sm:text-xl mb-3 sm:mb-4">ANDA Construction</h3>
          </div>

          <div className="text-text-medium text-sm sm:text-base">
            <p>+33 6 64 28 36 23</p>
            <p>hussein.wehbe@anda-construction.fr</p>
          </div>

          <div className="text-text-medium text-sm sm:text-base">
            <p>Hangar 105</p>
            <p>105 Allée François Mitterrand</p>
            <p>Rouen 76100</p>
            <p className="mt-3 sm:mt-4">4 Allée du Coucou</p>
            <p>Louviers 27400</p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center text-text-light text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} ANDA Construction. Tous droits réservés.</p>

          <a href='https://nexusco.fr' target='_blank' className='mt-4 inline-block cursor-pointer'>
            <span className='flex items-center justify-center'>
              Created by <img src='/images/logo.svg' className='ml-2' width={100} height={30} alt="Logo" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
