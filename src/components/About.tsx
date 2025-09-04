// src/components/About.tsx
import React, { useEffect } from 'react';
import AboutBio from './AboutBio';
import CTARow from './CTARow';

const About: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'About Chad Thomas — Chad Thomas';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Founder of Pryima and full-stack AI/ML practitioner focused on safe, production-grade systems.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Founder of Pryima and full-stack AI/ML practitioner focused on safe, production-grade systems.';
      document.head.appendChild(meta);
    }

    // Add JSON-LD structured data
    const personJsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Chad Thomas",
      "jobTitle": "Founder & CEO of Pryima; AI/ML Engineer",
      "url": window.location.origin,
      "sameAs": [
        "https://www.linkedin.com/in/albert-charles-thomas-iii/",
        "https://github.com/chadthomas"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(personJsonLd);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
          About Chad Thomas
        </h1>
        
        <AboutBio />
        
        <CTARow />
      </div>
    </section>
  );
};

export default About;
