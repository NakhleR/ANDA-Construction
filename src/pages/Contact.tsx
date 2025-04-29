import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_elf1txq', // Your service ID
        'template_wuczske', // Your template ID
        form.current,
        'nvEDXXYt9td8A2x8K' // Your public key
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);

          toast({
            title: "Formulaire envoyé",
            description: "Nous vous contacterons dès que possible.",
          });

          // Reset form
          setFormData({
            title: '',
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          console.error('Email sending failed:', error.text);

          toast({
            title: "Erreur",
            description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
            variant: "destructive"
          });
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mb-6 sm:mb-8 text-center sm:text-left">Contactez-nous</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="title" className="block text-text-medium text-sm sm:text-base">Sujet</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="name" className="block text-text-medium text-sm sm:text-base">Nom complet</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="block text-text-medium text-sm sm:text-base">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="message" className="block text-text-medium text-sm sm:text-base">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-text-light/30 p-2 rounded min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-text-dark text-white px-6 sm:px-8 py-2 rounded hover:bg-text-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Envoyer
              </Button>
            </form>
          </div>

          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="w-full">
              <p className="text-base sm:text-lg mb-6 text-center lg:text-left">
                Nous sommes à votre écoute. Remplissez le formulaire et nous vous recontacterons dans les plus brefs délais.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="text-text-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-dark">Adresse</h3>
                    <p className="text-text-medium mt-1">Hangar 105<br />105 Allée François Mitterrand<br />76100 Rouen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-text-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-dark">Email</h3>
                    <p className="text-text-medium mt-1">hussein.wehbe@anda-construction.fr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-text-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-dark">Téléphone</h3>
                    <p className="text-text-medium mt-1">+33 6 64 28 36 23</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
