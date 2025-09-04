// src/components/CTARow.tsx
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const CTARow: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <a
        href="mailto:appsforchad@gmail.com"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
      >
        <Mail size={16} />
        Email
      </a>
      
      <a
        href="https://www.linkedin.com/in/chad-thomas-/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
      >
        <Linkedin size={16} />
        LinkedIn
      </a>
      
      <a
        href="https://github.com/CoderChad"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
      >
        <Github size={16} />
        GitHub
      </a>
    </div>
  );
};

export default CTARow;
