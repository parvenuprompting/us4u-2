import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <section id="about" className="pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Over Us4U Security
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Uw vertrouwde partner in professionele beveiliging sinds 2015
          </p>
        </motion.div>

        <motion.div 
          className="prose prose-lg mx-auto text-gray-500"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp} className="mb-12">
            Us4U Security is een beveiligingsbedrijf gespecialiseerd in evenementen- en 
            objectbeveiliging. Wij staan er zowel voor u om uw project in goede banen te leiden 
            als ook voor uw bezoekers, zodat zij zich welkom en veilig voelen. Dit doen we door 
            zichtbaar, maar vooral ook onzichtbaar te beveiligen.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="mb-12">
            Us4U Security is altijd op de hoogte van de huidige standaard in de beveiliging sector 
            en maakt gebruik van de nieuwste technieken in de markt. Met een flinke dosis hospitality, 
            bekwame, professionele en gekwalificeerde beveiligingsmedewerkers zorgen wij ervoor dat 
            uw vraagstuk een succes wordt.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="mb-12">
            Onze aanpak kenmerkt zich door een perfecte balans tussen professionaliteit en persoonlijke 
            aandacht. We begrijpen dat elk beveiligingsvraagstuk uniek is en vereist daarom een 
            oplossing op maat. Of het nu gaat om een groot evenement, een winkelcentrum of een 
            bedrijfspand - wij zorgen voor een veilige omgeving waar mensen zich prettig voelen.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="mb-12">
            Bij Us4U Security staat kwaliteit voorop. Dit uit zich in onze zorgvuldige selectie van 
            personeel, continue bijscholing en het gebruik van moderne beveiligingstechnieken. Onze 
            beveiligers worden niet alleen getraind in veiligheidsprocedures, maar ook in 
            klantvriendelijkheid en communicatie. Zo creëren we een optimale balans tussen veiligheid 
            en gastvrijheid.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="mb-12">
            Transparantie en betrouwbaarheid zijn kernwaarden binnen onze organisatie. We communiceren 
            helder over onze diensten en tarieven, en staan altijd klaar om uw vragen te beantwoorden. 
            Door korte lijnen en een persoonlijke aanpak bent u verzekerd van snelle actie wanneer 
            dat nodig is.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
              alt="Professionele beveiliging"
              className="w-24 h-24 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Professioneel</h3>
            <p className="mt-2 text-base text-gray-500">
              Altijd up-to-date met de laatste ontwikkelingen en technieken in de beveiligingssector
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500"
              alt="Hospitality service"
              className="w-24 h-24 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Hospitality</h3>
            <p className="mt-2 text-base text-gray-500">
              Focus op gastvrijheid en klantvriendelijkheid bij al onze diensten
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=500"
              alt="Gekwalificeerd team"
              className="w-24 h-24 object-cover rounded-lg shadow-md mb-4"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Gekwalificeerd</h3>
            <p className="mt-2 text-base text-gray-500">
              Bekwame en gecertificeerde beveiligingsmedewerkers voor elk project
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}