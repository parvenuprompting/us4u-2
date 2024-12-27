import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Careers from '../components/Careers';

export default function CareersPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-brand"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Terug naar home
        </Link>
      </div>
      <Careers />
    </>
  );
}