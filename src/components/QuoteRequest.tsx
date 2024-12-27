import React, { useState } from 'react';
import { Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function QuoteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    attachment: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      attachment: null
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        attachment: fileInput.files ? fileInput.files[0] : null
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2B3377]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Maatwerk in Beveiliging
              </h2>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Bij Us4U Security begrijpen we dat elk beveiligingsvraagstuk uniek is. 
                Of het nu gaat om een eenmalig evenement, doorlopende objectbeveiliging 
                of een combinatie van diensten - wij denken graag met u mee over de 
                beste oplossing.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Onze ervaren adviseurs staan klaar om uw specifieke situatie te 
                analyseren en een passend beveiligingsplan op te stellen. We kijken 
                niet alleen naar de directe beveiligingsbehoeften, maar ook naar 
                kostenefficiëntie en toekomstbestendigheid.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Vul het formulier in en ontvang binnen 24 uur een vrijblijvende 
                offerte op maat. Liever direct contact? Bel ons op of stuur een 
                e-mail.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
                alt="Professionele beveiliging"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Neem contact op</h2>
            <h3 className="text-4xl font-bold text-white mb-4">Vraag een offerte aan</h3>
            <p className="text-gray-200">
              Heeft u een beveiligingsvraagstuk waar u oplossingen voor nodig heeft?
              Wij informeren u graag over de mogelijkheden!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Voor- en achternaam"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>
            
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Bedrijfsnaam (Optioneel)"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email adres"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefoonnummer"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Stel hier uw vraag"
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            <div>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-white file:text-[#2B3377] hover:file:bg-gray-100"
              />
            </div>

            <div className="flex justify-between items-center">
              <a
                href="mailto:info@us4usec.com"
                className="text-white hover:text-gray-200 flex items-center gap-2"
              >
                info@us4usec.com
              </a>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#2B3377] rounded-md font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Versturen
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}