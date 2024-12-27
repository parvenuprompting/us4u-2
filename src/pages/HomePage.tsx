import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AnimatedSection from '../components/AnimatedSection';
import ClientLogos from '../components/ClientLogos';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <ClientLogos />
    </>
  );
}