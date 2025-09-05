// src/components/Research.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, X, Maximize2 } from 'lucide-react';

interface ResearchDocument {
  id: number;
  title: string;
  type: 'research-paper';
  description: string;
  image: string;
  pages: string[];
  downloadUrl: string;
  isComingSoon?: boolean;
}

const Research: React.FC = () => {
  const [expandedDoc, setExpandedDoc] = useState<number | null>(null);

  const researchDocuments: ResearchDocument[] = [
    {
      id: 1,
      title: 'Pryima Intelligence',
      type: 'research-paper',
      description: 'Executive research paper discussing Pryima\'s next level Intelligence integration, exploring advanced AI methodologies and their applications in health technology and bioinformatics. We argue that vanilla Transformer LLMs—while fluent—are structurally insufficient for regulated, high-stakes healthcare and propose a post-Transformer systems blueprint that blends neuro-symbolic reasoning, causal world models, typed tool use, and safety-by-construction governance to achieve reliable, auditable decisions.',
      image: '/Pryima Intelligence-1.png',
      pages: [
        '/Pryima Intelligence-1.png',
        '/Pryima Intelligence-2.png',
        '/Pryima Intelligence-3.png',
        '/Pryima Intelligence-4.png',
        '/Pryima Intelligence-5.png',
        '/Pryima Intelligence-6.png',
        '/Pryima Intelligence-7.png'
      ],
      downloadUrl: '/Pryima Intelligence.pdf'
    },
    {
      id: 2,
      title: 'Pryima Intelligence II',
      type: 'research-paper',
      description: 'Executive-focused research paper articulating the latter discussion Pryima\'s AGI blueprint for clinically reliable general intelligence—defining AGI operationally and detailing a post-Transformer architecture that combines risk-aware routing (fast vs. deliberate), world-model-in-the-loop planning, neuro-symbolic verification with a typed DSL, and conformal abstention. It maps provenance-first governance (PCCP/NIST/EU AI Act) and EHR-native deployment (SMART on FHIR/CDS Hooks) to auditable, human-in-the-loop decisions and safe, continuous adaptation in healthcare.',
      image: '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-1.png',
      pages: [
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-1.png',
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-2.png',
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-3.png',
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-4.png',
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-5.png',
        '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-6.png'
      ],
      downloadUrl: '/research%20papers/Pryima%20Intelligence%20II/Pryima%20Intelligence%20II%20(no%20diagram)-1.png'
    },
    {
      id: 3,
      title: 'MCP for Pryima: A Governance-Ready Protocol for Safe, Auditable Tool Use in Precision Health',
      type: 'research-paper',
      description: 'Coming Soon - Advanced research paper on Model Context Protocol (MCP) implementation for Pryima, focusing on governance-ready protocols for safe and auditable tool use in precision health applications.',
      image: '/research%20papers/Pryima%20MCP%20Teaser/Pryima%20MCP%20Teaser.pdf',
      pages: [
        '/research%20papers/Pryima%20MCP%20Teaser/Pryima%20MCP%20Teaser.pdf'
      ],
      downloadUrl: '/research%20papers/Pryima%20MCP%20Teaser/Pryima%20MCP%20Teaser.pdf',
      isComingSoon: true
    }
  ];

  const handleDocumentClick = (docId: number) => {
    setExpandedDoc(expandedDoc === docId ? null : docId);
  };

  const handleDownload = (downloadUrl: string, title: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title.toLowerCase().replace(' ', '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Research Publications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my research papers and publications in AI, machine learning, and bioinformatics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {researchDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: doc.isComingSoon ? 1 : 1.02, y: doc.isComingSoon ? 0 : -5 }}
                className={`glass p-6 rounded-2xl ${doc.isComingSoon ? 'cursor-default' : 'cursor-pointer group'}`}
                onClick={() => !doc.isComingSoon && handleDocumentClick(doc.id)}
              >
                {/* Document Preview */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNjAgODBIMjQwVjE3NkgxNjBWODBaIiBmaWxsPSIjOUI1Q0Y2IiBvcGFjaXR5PSIwLjIiLz4KPHN2ZyB4PSIxNzAiIHk9IjkwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNCAySDZBMiAyIDAgMCAwIDQgNFYyMEEyIDIgMCAwIDAgNiAyMkgxOEEyIDIgMCAwIDAgMjAgMjBWOEwxNCAyWiIgZmlsbD0iIzlCNUNGNiIvPgo8cGF0aCBkPSJNMTQgMlY4SDIwIiBmaWxsPSIjOUI1Q0Y2Ii8+Cjwvc3ZnPgo8L3N2Zz4=';
                    }}
                  />
                  
                  {/* Coming Soon Overlay */}
                  {doc.isComingSoon && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 rounded-lg mb-4 transform -rotate-2">
                          <p className="text-white font-bold text-lg">COMING SOON</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <p className="text-white text-sm font-medium">Research in Progress</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Regular Overlay */}
                  {!doc.isComingSoon && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Maximize2 size={48} className="text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">Click to Expand</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Document Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4">
                      <FileText size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">
                      {doc.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Download Button */}
                  {doc.isComingSoon ? (
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600 rounded-lg font-semibold text-white cursor-not-allowed opacity-60">
                      <Download size={20} />
                      <span>Coming Soon</span>
                    </div>
                  ) : (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(doc.downloadUrl, doc.title);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold text-white hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                    >
                      <Download size={20} />
                      <span>Download Paper</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Document Modal */}
      <AnimatePresence>
        {expandedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setExpandedDoc(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              {/* Document Pages */}
              <div className="relative max-h-[80vh] overflow-y-auto">
                <div className="p-4 space-y-4">
                  {researchDocuments.find(doc => doc.id === expandedDoc)?.pages.map((page, index) => (
                    <div key={index} className="relative">
                      <img
                        src={page}
                        alt={`${researchDocuments.find(doc => doc.id === expandedDoc)?.title} - Page ${index + 1}`}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        Page {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Download Button Overlay */}
                <div className="sticky bottom-4 left-4 p-4">
                  <motion.button
                    onClick={() => {
                      const doc = researchDocuments.find(doc => doc.id === expandedDoc);
                      if (doc) {
                        handleDownload(doc.downloadUrl, doc.title);
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-lg font-semibold text-white hover:bg-primary-600 transition-all duration-300"
                  >
                    <Download size={16} />
                    <span>Download Full PDF</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
