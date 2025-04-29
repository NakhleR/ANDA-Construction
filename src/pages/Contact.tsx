import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    address: '',
    city: '',
    email: '',
    projectDescription: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show success toast
    toast({
      title: "Formulaire envoyé",
      description: "Nous vous contacterons dès que possible.",
    });

    // Reset form
    setFormData({
      lastName: '',
      firstName: '',
      address: '',
      city: '',
      email: '',
      projectDescription: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text-dark mb-6 sm:mb-8 text-center sm:text-left">Looking Forward to working with you</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="lastName" className="block text-text-medium text-sm sm:text-base">Nom</label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="firstName" className="block text-text-medium text-sm sm:text-base">Prénom</label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="address" className="block text-text-medium text-sm sm:text-base">Adresse</label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                    placeholder="Votre adresse"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="city" className="block text-text-medium text-sm sm:text-base">Ville</label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-text-light/30 p-2 rounded text-sm sm:text-base"
                    placeholder="Votre ville"
                  />
                </div>
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
                <label htmlFor="projectDescription" className="block text-text-medium text-sm sm:text-base">
                  Petite description de votre projet (dites nous plus sur votre projet)
                </label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
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
            <div>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center lg:text-left">
                Hello! We'd love to hear from you. Please fill out the form, and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
