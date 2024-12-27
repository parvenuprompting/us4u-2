import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/AnimatedSection';

export default function EventSecurityPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Evenementenbeveiliging</h1>
            
            <div className="w-full h-[400px] mb-12 overflow-hidden rounded-lg">
              <img
                src="https://i.imgur.com/4fEtlGL.png"
                alt="Evenementenbeveiliging"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="prose prose-lg max-w-none">
            <p>
              Wij van Us4U Security zorgen voor een goede sfeer op grote en kleine evenementen.
            </p>

            <p>
              Samen met u stellen wij de veiligheidsrisico's samen. Ook brengen wij onze expertise in 
              door mee te denken met u zodat een ieder zich veilig voelt, iedereen goed kan werken en 
              de bezoeker een fijne beleving heeft op uw evenement. Onze sleutel tot succes is uw 
              evenement zichtbaar doch onzichtbaar te beveiligen. Dit doormiddel van doorgewinterde 
              beveiligers met een enorme schat aan ervaring in de beveiligingsbranche.
            </p>

            <p>
              Bij onze beveiligers staat gastvrijheid hoog in het vaandel. Ook in het geval van 
              calamiteiten weten wanneer kordaat op te treden en de situatie zodoende te de-escaleren. 
              Er zijn geen evenementen te klein voor Us4U Security.
            </p>

            <p>
              Door dit te hanteren streven wij naar klanttevredenheid en een goede relatie met onze 
              partners.
            </p>

            <p>
              We zijn graag onderdeel van uw succes en dragen daar ook actief aan bij.
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