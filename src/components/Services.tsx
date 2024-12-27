import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Onze Diensten
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Professionele beveiligingsoplossingen op maat voor uw situatie
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="mt-6 inline-flex items-center text-sm font-medium text-brand hover:text-brand/80"
                >
                  Meer informatie
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}