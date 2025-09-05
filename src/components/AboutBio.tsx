// src/components/AboutBio.tsx
import React from 'react';
import Badge from './Badge';

const AboutBio: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main Bio */}
      <div className="space-y-4 leading-relaxed text-gray-300">
        <p>
          <strong className="text-white">Chad Thomas</strong> is the founder of <strong className="text-white">Pryima</strong> and a full-stack AI/ML practitioner who designs systems that survive real users. Pryima fuses <strong className="text-white">genetics, dynamic blood biomarkers, microbiome data, CGM, wearables, EMG, and cardiovascular load</strong> into a unified <strong className="text-white">AI health operating system</strong>—shipping first as an <strong className="text-white">8-week, 5-user pilot</strong> and scaling to a <strong className="text-white">500-user Austin cohort</strong>.
        </p>
        
        <p>
          <strong className="text-white">Founder DNA.</strong> Chad built Pryima because he strongly believes that health shouldn't be a maze. He operates with the understanding that if a person owns a smartphone, they should have an intelligent coach that turns genetics, labs, and wearables into one clear daily decision. He is actively designing for the <strong className="text-white">Austin 5 → 500 → global arc</strong>—proving outcomes with small, measurable slices, then scaling access so anyone, anywhere, can improve their health with the phone in their hand.
        </p>
        
        <p>
          Chad's track record: <strong className="text-white">data ingestion at scale</strong>, schema-wise <strong className="text-white">feature engineering</strong>, <strong className="text-white">RAG with guardrails</strong> (PII redaction, injection filters, domain allowlists), <strong className="text-white">evaluation harnesses</strong> for grounding/latency/CTR, and crisp front-ends that make complex models legible. He builds small, measurable slices, proves lift with metrics, and iterates quickly—favoring <strong className="text-white">determinism, testability, and safety</strong> over hype. He works best with teams that want the science right and the product shipped.
        </p>
      </div>

      {/* At a glance section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white mb-4">At a glance</h2>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-primary-400 mt-1">•</span>
            <span className="text-gray-300">Founder & CEO of Pryima — AI Health OS</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary-400 mt-1">•</span>
            <span className="text-gray-300">End-to-end systems: ingestion → feature store → modeling/RAG → evaluation → UI</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary-400 mt-1">•</span>
            <span className="text-gray-300">Privacy-first guardrails: PII scrubbing, injection filters, allowlists</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary-400 mt-1">•</span>
            <span className="text-gray-300">Evaluation harnesses for grounding, latency, CTR</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary-400 mt-1">•</span>
            <span className="text-gray-300">Builds small, measures lift, iterates fast</span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white mb-4">Education</h2>
        <div className="flex flex-wrap items-center gap-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <img
              src="/Education/NYU-Logo.png"
              alt="New York University"
              className="h-8 w-auto object-contain filter brightness-0 invert"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                               target.style.display = 'none';
              }}
            />
            <span className="text-gray-300 text-sm">New York University</span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/Education/Stanford-Emblem.png"
              alt="Stanford University"
              className="h-8 w-auto object-contain filter brightness-0 invert"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <span className="text-gray-300 text-sm">Stanford University</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
