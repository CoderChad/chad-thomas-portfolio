import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, X, Maximize2, Minimize2 } from 'lucide-react';

interface Document {
  id: number;
  title: string;
  type: 'resume' | 'cover-letter';
  description: string;
  image: string;
  downloadUrl: string;
}

const Resume: React.FC = () => {
  const [expandedDoc, setExpandedDoc] = useState<number | null>(null);

  const documents: Document[] = [
    {
      id: 1,
      title: 'Resume',
      type: 'resume',
      description: 'Professional resume showcasing my experience in AI/ML, data science, and bioinformatics across various startups and research roles.',
      image: '/images/AlbertThomasResume (1)-1.png',
      downloadUrl: '/documents/resume.pdf'
    },
    {
      id: 2,
      title: 'Cover Letter',
      type: 'cover-letter',
      description: 'Personal statement and research interests highlighting my vision for the future of human performance through AI and bioinformatics.',
      image: '/images/ACTIII_CV (1)-1.png',
      downloadUrl: '/documents/cover-letter.pdf'
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
            Professional Documents
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my resume and cover letter to learn more about my background, experience, purpose, and vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-6 rounded-2xl cursor-pointer group"
                onClick={() => handleDocumentClick(doc.id)}
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
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Maximize2 size={48} className="text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">Click to Expand</p>
                    </div>
                  </div>
                </div>

                {/* Document Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-400 capitalize">
                        {doc.type.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(doc.downloadUrl, doc.title);
                    }}
                    className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                  >
                    <Download size={20} className="text-white" />
                  </motion.button>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {doc.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center justify-center h-12 w-32">
              <img
                src="/Company Logos/Bank-of-America-Logo.png"
                alt="Bank of America"
                className="h-8 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center justify-center h-12 w-32">
              <img
                src="/Company Logos/Blackstone-Logo.png"
                alt="Blackstone"
                className="h-8 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center justify-center h-12 w-32">
              <img
                src="/Company Logos/Font-Goldman-Sachs-Logo.jpg"
                alt="Goldman Sachs"
                className="h-8 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>

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
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      <FileText size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {documents.find(doc => doc.id === expandedDoc)?.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Click outside to close
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDownload(
                        documents.find(doc => doc.id === expandedDoc)?.downloadUrl || '',
                        documents.find(doc => doc.id === expandedDoc)?.title || ''
                      )}
                      className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                    >
                      <Download size={20} className="text-white" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setExpandedDoc(null)}
                      className="p-2 glass rounded-lg hover:bg-red-500/20 transition-all duration-300"
                    >
                      <X size={20} className="text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
                  <img
                    src={documents.find(doc => doc.id === expandedDoc)?.image}
                    alt={documents.find(doc => doc.id === expandedDoc)?.title}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCA4MDAgMTAwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwSDYwMFY3NTBIMjAwVjE1MFoiIGZpbGw9IiM5QjVDRjYiIG9wYWNpdHk9IjAuMiIvPgo8c3ZnIHg9IjMwMCIgeT0iNDAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTE0IDJINkEyIDIgMCAwIDAgNCA0VjIwQTIgMiAwIDAgMCA2IDIySDE4QTIgMiAwIDAgMCAyMCAyMFY4TDE0IDJaIiBmaWxsPSIjOUI1Q0Y2Ii8+CjxwYXRoIGQ9Ik0xNCAyVjhIMjAiIGZpbGw9IiM5QjVDRjYiLz4KPC9zdmc+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;
