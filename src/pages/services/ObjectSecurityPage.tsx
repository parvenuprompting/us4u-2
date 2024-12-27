import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ObjectSecurityPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Objectbeveiliging</h1>
          
          <div className="w-full h-[400px] mb-12 overflow-hidden rounded-lg">
            <img
              src="https://i.imgur.com/mr97Me9.png"
              alt="Objectbeveiliging"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Us4U Security biedt en staat voor integriteit in de diensten die wij leveren.
            </p>
            
            <p>
              Wij vinden het van belang om fatsoenlijk en betrouwbaar te werk te gaan, met de waarden 
              die u ons toevertrouwt. Hierbij gaan wij punctueel te werk, door duidelijk en 
              overzichtelijk de afspraken die met u gemaakt zijn na te komen.
            </p>
            
            <p>
              Samen met u bedenken wij de beste manier om onze diensten op uw object af te stemmen, 
              zodat wij u wensen naar behoren kunnen uitvoeren.
            </p>
            
            <p>
              Wij beveiliging uw object tijdens- en buiten kantooruren. Zo kunt u 24 uur per dag met 
              een vertrouwd gevoel uw object in ons beheer laten.
            </p>
            
            <p>
              Heeft u specifieke wensen? Receptiediensten, toegangscontrole, controlerondes? Samen 
              bekijken we de beste mogelijkheden voor uw beveiligingsvraagstukken.
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