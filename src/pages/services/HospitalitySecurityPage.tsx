import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/AnimatedSection';

export default function HospitalitySecurityPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link
            to="/services"
            className="inline-flex items-center text-gray-600 hover:text-brand mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Terug naar diensten
          </Link>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Horecabeveiliging</h1>
            
            <div className="w-full h-[400px] mb-12 overflow-hidden rounded-lg">
              <img
                src="https://i.imgur.com/lWkskog.png"
                alt="Horecabeveiliging"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="prose prose-lg max-w-none">
            <p>
              Vriendelijkheid, betrouwbaarheid, assertiviteit en een verzorgd voorkomen staan bij 
              Us4U Security centraal bij het optreden als gastheer.
            </p>
            
            <p>
              Wij zijn ons ervan bewust dat wij het eerste gezicht zijn bij de beleving van de bezoeker. 
              Hierbij is verantwoordelijkheidsgevoel van ons naar u als klant van toepassing om uw 
              doelstellingen waar te maken. Tevens ontzorgen wij u, zodat u zich kunt focussen op uw 
              primaire bedrijfsvoering.
            </p>
            
            <p>
              Ervaring in dit vakgebied maakt dat wij een brede kennis hebben van conflicten die kunnen 
              voorkomen. Hierdoor kunnen wij ons goed inleven in de betrokkenen en zodoende de situatie 
              op een respectvolle manier afhandelen.
            </p>
            
            <p>
              Us4U Security beveiligt horeca in de breedste zin des woords. Benieuwd of wij iets voor 
              uw etablissement kunnen betekenen? Schroom niet om contact op te nemen. Met onze ervaring 
              kunnen wij uw beveiligingsvraagstuk uit handen nemen en oplossen. Doordat wij uw taken 
              uit handen nemen kunt u zich volledig richten op hetgeen voor u het belangrijkste is, 
              namelijk het leiden van uw onderneming.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90"
            >
              Offerte aanvragen
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}