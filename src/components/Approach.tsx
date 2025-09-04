import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Database, Cpu, Bot, ArrowRight, RefreshCw } from 'lucide-react';

const Approach: React.FC = () => {
  const stages = [
    {
      id: 1,
      title: 'Problem Definition & Requirements',
      icon: Clipboard,
      description: 'Business need translation to ML solutions',
      details: [
        'Business need translation to ML solutions',
        'Success metrics specification',
        'Stakeholder collaboration'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Data Engineering',
      icon: Database,
      description: 'Data acquisition & processing pipeline',
      details: [
        'Data acquisition & ingestion',
        'Exploration & profiling',
        'Cleaning & preprocessing'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Model Development',
      icon: Cpu,
      description: 'AI/ML model creation & optimization',
      details: [
        'Feature engineering & selection',
        'Architecture design & implementation',
        'Training & optimization'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      title: 'Deployment & Maintenance',
      icon: Bot,
      description: 'Production deployment & monitoring',
      details: [
        'Model deployment & integration',
        'Performance monitoring',
        'Continuous improvement'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            My Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic workflow that transforms business challenges into intelligent solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Connecting Arrow */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 z-10"
                    />
                  )}
                  
                  {/* Circular Arrow for last stage */}
                  {index === stages.length - 1 && (
                    <motion.div
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      className="absolute -top-8 -right-8 w-16 h-16 border-2 border-primary-500 rounded-full border-t-transparent"
                    />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass p-8 rounded-2xl h-full group cursor-pointer"
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <stage.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {stage.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {stage.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {stage.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + detailIndex * 0.1 }}
                          className="text-sm text-gray-400 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Connecting Line */}
                {index < stages.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-700" />
                )}
                
                {/* Circular Arrow for last stage */}
                {index === stages.length - 1 && (
                  <motion.div
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute left-6 top-16 w-4 h-4 border-2 border-primary-500 rounded-full border-t-transparent"
                  />
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-2xl group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <stage.icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                        {stage.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-3 text-sm">
                        {stage.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {stage.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + detailIndex * 0.1 }}
                            className="text-xs text-gray-400 flex items-center"
                          >
                            <div className="w-1 h-1 bg-primary-500 rounded-full mr-2" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Flow Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <RefreshCw size={20} className="text-primary-400 animate-spin" />
            <span className="text-gray-300 font-medium">Continuous Improvement Cycle</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
