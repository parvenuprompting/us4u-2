import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{job.type}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600">{job.description}</p>
      
      <a
        href="#contact"
        className="mt-6 inline-flex items-center text-brand hover:text-brand/80"
      >
        Direct solliciteren
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}