import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RetailSecurityPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center text-gray-600 hover:text-brand mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Terug naar diensten
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Winkelbeveiliging</h1>
          
          <div className="w-full h-[400px] mb-12 overflow-hidden rounded-lg">
            <img
              src="https://i.imgur.com/otlm7Ml.png"
              alt="Winkelbeveiliging"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Het inzetten van een beveiliger heeft vooral bij de retail een preventieve werking.
            </p>
            
            <p>
              Uiteraard dient de beveiliger ook een belangrijk doel voor uw eigen medewerkers, een 
              gevoel van veiligheid die met een digitaal systeem niet ondervangen wordt.
            </p>
            
            <p>
              Voor u als klant is het ook van belang om te weten dat er ook toezicht is op de 
              gedragingen van het eigen personeel om bijvoorbeeld derving te voorkomen. Hebben u of 
              uw medewerkers vervelende ervaringen gehad in het verleden? Of wilt u die juist 
              voorkomen in de toekomst? Aarzel dan niet om contact met ons op te nemen.
            </p>
            
            <p>
              Ook met winkelend publiek heeft Us4U Security de ervaring die nodig is. Ongeacht het 
              type winkel dat beveiligt moet worden, zorgt Us4U Security dat uw eigendom in uw bezit 
              blijft.
            </p>
            
            <p>
              Us4U Security geeft zowel aan medewerkers en het winkelend publiek de zekerheid dat 
              het verdient.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}