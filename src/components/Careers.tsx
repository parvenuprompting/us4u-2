import React from 'react';
import { Send } from 'lucide-react';
import JobCard from './JobCard';
import { jobs } from '../data/jobs';
import AnimatedSection from './AnimatedSection';

export default function Careers() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      motivation: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gastheer/Beveiliger gezocht bij Us4U Security
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Ben jij een gediplomeerde beveiliger met een passie voor gastvrijheid? Dan hebben wij een unieke kans voor jou!
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Wij zoeken enthousiaste beveiligers die bezoekers verwelkomen bij een bijzondere expositie in de Noorderkerk, gelegen tussen Amsterdam Centraal Station en het Anne Frank Huis.
              </p>
            </div>
            <div>
              <img
                src="https://i.imgur.com/mm25qTD.png"
                alt="Team van beveiligers"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat ga je doen?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Deze indrukwekkende expositie combineert de werken van Van Gogh en Rembrandt met 360° bewegende beelden, geprojecteerd door de gehele kerk.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Toezicht houden op bezoekers bij aankomst.</li>
              <li>Tascontrole uitvoeren bij grote tassen.</li>
              <li>Van tijd tot tijd de expositiezaal controleren.</li>
              <li>Ingrijpen bij calamiteiten (hoewel deze nauwelijks worden verwacht).</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wanneer werk je?</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Werkdagen: maandag tot en met zaterdag.</li>
              <li>Werktijden: tussen 9.30 en 20.30 uur.</li>
              <li>Vaste werkdagen en tijden worden in overleg vastgesteld.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat ga je verdienen?</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>ZZP-tarief: minimaal €17,50 per uur (onderhandelbaar).</li>
              <li>Tarieven zijn afhankelijk van leeftijd, werkervaring en type werk.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat bieden wij?</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Een unieke en leuke opdracht in een historische locatie.</li>
              <li>Werk in een vaste periode van februari tot en met oktober.</li>
              <li>Inclusief lunch tijdens je werkdag.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Werken bij Us4U Security</h3>
            <p className="text-lg text-gray-600 mb-4">
              Welkom bij Us4U Security, waar professionaliteit en persoonlijke ontwikkeling samenkomen. Wij zijn een dynamische organisatie die altijd op zoek is naar gemotiveerde professionals om ons diverse team van beveiligingsexperts te versterken.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat maakt werken bij Us4U Security uniek?</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Je werkt in een afwisselende omgeving met mogelijkheden in evenementen-, horeca-, object- en winkelbeveiliging.</li>
              <li>Je krijgt uitgebreide trainingsmogelijkheden om je talenten verder te ontwikkelen.</li>
              <li>Wij bieden flexibele werkuren die passen bij jouw leven.</li>
              <li>Uitstekende doorgroeimogelijkheden binnen ons bedrijf.</li>
            </ul>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Zelfs als er momenteel geen specifieke vacature aansluit bij jouw profiel, nodigen we je uit om contact met ons op te nemen. Wij geloven in het ontwikkelen van talent en kijken ernaar uit om jou te helpen groeien in jouw carrière.
          </p>

          <p className="text-xl font-bold text-gray-900 mb-8 text-center">
            Sluit je aan bij Us4U Security en ontdek een werkomgeving waar jouw expertise en inzet het verschil maken!
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Interesse? Laat van je horen!
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                required
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                required
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                Motivatie
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                CV Uploaden
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-brand file:text-white hover:file:bg-brand/90"
                required
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-brand text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-brand/90 transition-colors"
              >
                Sollicitatie versturen
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}