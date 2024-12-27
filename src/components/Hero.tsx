import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import HeroSlideshow from './HeroSlideshow';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden h-[600px]">
      <HeroSlideshow />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 h-[600px] flex items-center">
          <main className="w-full">
            <div className="max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-8 text-center lg:text-left space-y-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-white">Veiligheid staat bij ons altijd</span>
                <span className="block text-white">op de eerste plaats.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-white">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Zichtbaar onzichtbaar aanwezig
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Geen opdracht te klein
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Inzetbaar in heel nederland
                </div>
              </div>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Heeft u een beveiligingsvraagstuk waar u oplossingen voor nodig heeft?
                Wij informeren u graag over de mogelijkheden!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/quote"
                    className="w-full flex items-center justify-center px-8 py-3 bg-brand border-2 border-brand text-base font-medium rounded-md text-white hover:bg-white hover:text-brand hover:border-brand transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Offerte aanvragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}