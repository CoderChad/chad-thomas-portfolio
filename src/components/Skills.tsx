import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Brain, Database, Cpu, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  color: string;
}

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        {
          name: 'Azure',
          icon: '/skills/azure-icon-svgrepo-com.svg',
          level: 95,
          description: 'Cloud computing platform with expertise in ML services, data lakes, and container orchestration'
        },
        {
          name: 'AWS',
          icon: '/icons/aws.svg',
          level: 90,
          description: 'Amazon Web Services including SageMaker, Lambda, and EC2 for scalable ML deployments'
        },
        {
          name: 'Docker',
          icon: '/icons/docker.svg',
          level: 88,
          description: 'Containerization and orchestration for consistent ML model deployment across environments'
        },
        {
          name: 'Kubernetes',
          icon: '/icons/docker.svg',
          level: 85,
          description: 'Container orchestration for managing ML workloads at scale with auto-scaling capabilities'
        }
      ]
    },
    {
      title: 'AI/ML Tools & Frameworks',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        {
          name: 'PyTorch',
          icon: '/icons/pytorch.svg',
          level: 95,
          description: 'Deep learning framework for research and production with custom model architectures'
        },
        {
          name: 'TensorFlow',
          icon: '/icons/tensorflow.svg',
          level: 92,
          description: 'End-to-end ML platform with TensorFlow Extended (TFX) for production pipelines'
        },
        {
          name: 'ONNX',
          icon: '/icons/onnxai-ar21.svg',
          level: 88,
          description: 'Open Neural Network Exchange for model interoperability and optimization'
        },
        {
          name: 'Scikit-learn',
          icon: '/icons/scikit-learn.svg',
          level: 95,
          description: 'Machine learning library for traditional algorithms and model evaluation'
        },
        {
          name: 'Keras',
          icon: '/icons/keras.svg',
          level: 90,
          description: 'High-level neural networks API for rapid prototyping and experimentation'
        },
        {
          name: 'NumPy',
          icon: '/icons/numpy.svg',
          level: 98,
          description: 'Fundamental package for scientific computing with Python'
        }
      ]
    },
    {
      title: 'Data Engineering',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        {
          name: 'Apache Spark',
          icon: '/icons/apache-spark-svgrepo-com.svg',
          level: 90,
          description: 'Big data processing engine for large-scale data transformation and ML pipelines'
        },
        {
          name: 'Apache Kafka',
          icon: '/icons/apachekafka-svgrepo-com.svg',
          level: 85,
          description: 'Real-time data streaming platform for event-driven ML applications'
        },
        {
          name: 'Pandas',
          icon: '/icons/pandas.svg',
          level: 98,
          description: 'Data manipulation and analysis library for structured data processing'
        },
        {
          name: 'SQL',
          icon: '/icons/sql.svg',
          level: 92,
          description: 'Database querying and optimization for data extraction and transformation'
        },
        {
          name: 'MongoDB',
          icon: '/icons/mongodb.svg',
          level: 85,
          description: 'NoSQL database for flexible document storage and real-time analytics'
        },
        {
          name: 'OpenCV',
          icon: '/icons/opencv.svg',
          level: 88,
          description: 'Computer vision library for image processing and machine learning applications'
        },
        {
          name: 'NLP',
          icon: '/icons/nlp.svg',
          level: 90,
          description: 'Natural Language Processing for text analysis and language understanding'
        }
      ]
    },
    {
      title: 'MLOps & Production',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      skills: [
        {
          name: 'MLflow',
          icon: '/icons/python.svg',
          level: 90,
          description: 'ML lifecycle management including experiment tracking and model registry'
        },
        {
          name: 'Kubeflow',
          icon: '/icons/docker.svg',
          level: 85,
          description: 'Kubernetes-native ML workflow orchestration and pipeline management'
        },
        {
          name: 'Airflow',
          icon: '/icons/apache-airflow-svgrepo-com.svg',
          level: 88,
          description: 'Workflow orchestration for complex ML data pipelines and scheduling'
        },
        {
          name: 'Prometheus',
          icon: '/icons/prometheus-svgrepo-com.svg',
          level: 82,
          description: 'Monitoring and alerting for ML model performance and system metrics'
        },
        {
          name: 'Git',
          icon: '/icons/git.svg',
          level: 95,
          description: 'Version control and collaboration for ML model development and deployment'
        },
        {
          name: 'JavaScript',
          icon: '/icons/javascript.svg',
          level: 85,
          description: 'Web development for ML model deployment and interactive dashboards'
        }
      ]
    },
    {
      title: 'Specialized Analytics',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        {
          name: 'Time Series Analysis',
          icon: '/icons/time-series.svg',
          level: 92,
          description: 'Advanced forecasting and anomaly detection in temporal data'
        },
        {
          name: 'Computer Vision',
          icon: '/icons/opencv.svg',
          level: 88,
          description: 'Image recognition, object detection, and visual pattern analysis'
        },
        {
          name: 'Natural Language Processing',
          icon: '/icons/nlp.svg',
          level: 90,
          description: 'Text mining, sentiment analysis, and language model development'
        }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-5 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive skills across the full AI/ML stack, from data engineering to production deployment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="flip-card h-40"
                  >
                    <div className="flip-card-inner">
                      {/* Front of Card */}
                      <div className="flip-card-front glass p-4 rounded-xl h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-5 h-5"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM5QjVDRjYiLz4KPC9zdmc+';
                                }}
                              />
                            </div>
                            <h4 className="font-semibold text-white text-sm">
                              {skill.name}
                            </h4>
                          </div>
                          
                          <div className="mb-2">
                            <div className="flex justify-between text-xs text-gray-300 mb-1">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                viewport={{ once: true }}
                                className={`h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-400 text-center">
                          Hover to learn more
                        </div>
                      </div>

                      {/* Back of Card */}
                      <div className="flip-card-back glass p-4 rounded-xl h-full flex flex-col justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-6 h-6"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiM5QjVDRjYiLz4KPC9zdmc+';
                              }}
                            />
                          </div>
                          <h4 className="font-bold text-white mb-2 text-sm">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Specializations
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Fine-Tuning LLMs',
              'Reinforcement Learning',
              'Computer Vision',
              'Natural Language Processing',
              'Time Series Analysis',
              'Anomaly Detection',
              'AutoML',
              'Model Optimization',
              'A/B Testing',
              'Statistical Modeling'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-white/90 hover:bg-primary-500/20 hover:border-primary-400 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
