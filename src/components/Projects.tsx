import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metric: string;
  metricValue: string;
  link: string;
  category: string;
}

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Breast Cancer Detection',
      description: 'A deep learning framework for breast cancer detection using mammography images with CNNs, transformers, and federated learning.',
      image: '/images/breast.png',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Deep Learning', 'Medical Imaging'],
      metric: 'Accuracy',
      metricValue: '92%',
      link: 'https://github.com/CoderChad/breast-cancer-detection',
      category: 'Medical AI'
    },
    {
      id: 2,
      title: 'Apple Watch Sleep Score',
      description: 'Machine learning model to classify sleep stages using heart rate and acceleration data from Apple Watch wearables.',
      image: '/images/watch.png',
      technologies: ['Python', 'Machine Learning', 'Time Series', 'Wearables'],
      metric: 'Classification Accuracy',
      metricValue: '89%',
      link: 'https://github.com/CoderChad/apple-watch-sleep-score',
      category: 'Health Tech'
    },
    {
      id: 3,
      title: 'Pneumonia Classification',
      description: 'Convolutional neural network to detect pneumonia from chest X-ray images with high accuracy for medical diagnosis.',
      image: '/images/pnuemonia.png',
      technologies: ['Python', 'Deep Learning', 'Medical Imaging', 'CNN'],
      metric: 'Accuracy',
      metricValue: '95%',
      link: 'https://github.com/CoderChad/pneumonia-classification',
      category: 'Medical AI'
    },
    {
      id: 4,
      title: 'Histopathology Cancer Detection',
      description: 'Advanced CNN-based system for detecting metastatic cancer in lymph node sections from breast cancer patients with ~98% accuracy using ResNet, DenseNet, and EfficientNet architectures on histopathology images.',
      image: '/images/h.png',
      technologies: ['Python', 'CNN', 'Deep Learning', 'Medical Imaging', 'ResNet', 'DenseNet', 'EfficientNet'],
      metric: 'Accuracy',
      metricValue: '98%',
      link: 'https://github.com/CoderChad/Histopathology-Cancer-Detection-with-CNN-Architectures',
      category: 'Medical AI'
    },
    {
      id: 5,
      title: 'Genomic OCR Bioinformatics',
      description: 'Using natural language processing and optical character recognition techniques to analyze genomic data for bioinformatics research.',
      image: '/images/ocr.png',
      technologies: ['Python', 'Bioinformatics', 'NLP', 'OCR', 'Genomics'],
      metric: 'Processing Accuracy',
      metricValue: '94%',
      link: 'https://github.com/CoderChad/genomic-ocr-bioinformatics',
      category: 'Bioinformatics'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-16 px-5 bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Advanced AI and machine learning solutions in medical imaging, health tech, and bioinformatics
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Project Carousel */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="glass p-6 h-full flex flex-col lg:flex-row gap-6">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full rounded-xl overflow-hidden group">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiM5QjVDRjYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBmaWxsPSIjOUI1Q0Y2IiBvcGFjaXR5PSIwLjMiLz4KPHN2ZyB4PSIyNzAiIHk9IjE3MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJTNi40OCAyMiAxMiAyMlMyMiAxNy41MiAyMiAxMlMxNy41MiAyIDEyIDJaTTEzIDE3SDExVjE1SDEzVjE3Wk0xMyAxM0gxMVY3SDEzVjEzWiIgZmlsbD0iIzlCNUNGNiIvPgo8L3N2Zz4KPC9zdmc+';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary-500/80 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                          {currentProject.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-3">
                        {currentProject.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {currentProject.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-base font-semibold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metric and Link */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="flex items-center space-x-2">
                            <TrendingUp size={20} className="text-primary-400" />
                            <span className="text-sm text-gray-400">{currentProject.metric}</span>
                          </div>
                          <div className="text-2xl font-bold gradient-text">
                            {currentProject.metricValue}
                          </div>
                        </div>
                      </div>

                      <motion.a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold text-white hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </motion.button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
