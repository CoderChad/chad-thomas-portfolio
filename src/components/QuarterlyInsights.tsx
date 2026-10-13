import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Brain, Zap } from 'lucide-react';

interface Insight {
  id: number;
  title: string;
  date: string;
  quarter: string;
  preview: string;
  category: string;
  icon: React.ComponentType<any>;
  color: string;
}

const QuarterlyInsights: React.FC = () => {
  const insights: Insight[] = [
    {
      id: 1,
      title: 'The Rise of Multimodal AI',
      date: 'March 31, 2024',
      quarter: 'Q1 2024',
      preview: 'Exploring how multimodal AI systems are revolutionizing the way machines understand and process information across different data types, from text and images to audio and video.',
      category: 'AI Research',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'The Evolution of Large Language Models',
      date: 'December 31, 2023',
      quarter: 'Q4 2023',
      preview: 'A comprehensive analysis of how LLMs have evolved from simple text generators to sophisticated reasoning systems capable of complex problem-solving and creative tasks.',
      category: 'NLP',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'MLOps: Bridging the Gap Between Research and Production',
      date: 'September 30, 2023',
      quarter: 'Q3 2023',
      preview: 'Deep dive into modern MLOps practices, tools, and strategies for deploying machine learning models at scale with reliability and efficiency.',
      category: 'MLOps',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'The Future of Computer Vision',
      date: 'June 30, 2023',
      quarter: 'Q2 2023',
      preview: 'Examining the latest breakthroughs in computer vision, from transformer-based architectures to real-time object detection and scene understanding.',
      category: 'Computer Vision',
      icon: Brain,
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
            Quarterly Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Short takes on the trends shaping AI and machine learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {insights.map((insight) => (
            <motion.article
              key={insight.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${insight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <insight.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary-400">
                      {insight.quarter}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Calendar size={12} />
                      <span>{insight.date}</span>
                    </div>
                  </div>
                </div>
                
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                  {insight.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {insight.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {insight.preview}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default QuarterlyInsights;
