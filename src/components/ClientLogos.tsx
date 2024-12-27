import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Heineken Music Hall',
    url: 'https://images.unsplash.com/photo-1577512544122-d95c39ecaf6d?auto=format&fit=crop&q=80&w=200&h=100'
  },
  {
    name: 'Ziggo Dome',
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=200&h=100'
  },
  {
    name: 'RAI Amsterdam',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200&h=100'
  },
  {
    name: 'Johan Cruijff Arena',
    url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=200&h=100'
  },
  {
    name: 'Rotterdam Ahoy',
    url: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=200&h=100'
  }
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">Vertrouwd door toonaangevende bedrijven</h2>
          <p className="mt-4 text-lg text-gray-600">
            Wij zijn trots op onze samenwerkingen met deze gerenommeerde organisaties
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex space-x-12 animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-32 w-48 bg-white rounded-lg shadow-sm flex items-center justify-center p-6"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}