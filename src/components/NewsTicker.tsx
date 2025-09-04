import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Brain, Cpu } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  source: string;
  category: 'AI' | 'Tech';
  url: string;
  timestamp: string;
}

const NewsTicker: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock news data - in a real app, this would come from an API
    const mockNews: NewsItem[] = [
      {
        id: '1',
        title: 'OpenAI releases GPT-4 Turbo with improved reasoning capabilities',
        source: 'TechCrunch',
        category: 'AI',
        url: '#',
        timestamp: '2 hours ago'
      },
      {
        id: '2',
        title: 'Google announces breakthrough in quantum computing with 1000-qubit processor',
        source: 'Wired',
        category: 'Tech',
        url: '#',
        timestamp: '4 hours ago'
      },
      {
        id: '3',
        title: 'Microsoft integrates AI-powered coding assistant into Visual Studio',
        source: 'The Verge',
        category: 'AI',
        url: '#',
        timestamp: '6 hours ago'
      },
      {
        id: '4',
        title: 'Tesla unveils new neural network architecture for autonomous driving',
        source: 'Ars Technica',
        category: 'AI',
        url: '#',
        timestamp: '8 hours ago'
      },
      {
        id: '5',
        title: 'Apple introduces M4 chip with dedicated AI processing unit',
        source: 'MacRumors',
        category: 'Tech',
        url: '#',
        timestamp: '10 hours ago'
      },
      {
        id: '6',
        title: 'Meta releases open-source large language model for research',
        source: 'VentureBeat',
        category: 'AI',
        url: '#',
        timestamp: '12 hours ago'
      },
      {
        id: '7',
        title: 'NVIDIA announces next-generation AI supercomputer platform',
        source: 'ZDNet',
        category: 'Tech',
        url: '#',
        timestamp: '14 hours ago'
      },
      {
        id: '8',
        title: 'Anthropic releases Claude 3.5 with enhanced multimodal capabilities',
        source: 'AI News',
        category: 'AI',
        url: '#',
        timestamp: '16 hours ago'
      }
    ];

    // Simulate API call
    const timer = setTimeout(() => {
      setNewsItems(mockNews);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return Brain;
      case 'Tech':
        return Cpu;
      default:
        return TrendingUp;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'text-purple-400';
      case 'Tech':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-500"></div>
            <span className="ml-3 text-gray-400 text-base">Loading latest news...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 py-5 overflow-hidden mt-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-5">
          {/* Ticker Label */}
          <div className="flex items-center space-x-4 bg-primary-500/20 px-5 py-3 rounded-full">
            <Zap size={24} className="text-primary-400" />
            <span className="text-primary-400 font-semibold text-lg whitespace-nowrap">
              LIVE NEWS
            </span>
          </div>

          {/* Scrolling News */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex space-x-10"
              animate={{
                x: [0, -100 * newsItems.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: newsItems.length * 4.8,
                  ease: "linear"
                }
              }}
            >
              {newsItems.map((item, index) => {
                const IconComponent = getCategoryIcon(item.category);
                return (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="flex items-center space-x-5 whitespace-nowrap group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <div className={`flex items-center space-x-2 ${getCategoryColor(item.category)}`}>
                      <IconComponent size={22} />
                      <span className="text-base font-medium uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-white text-lg font-medium group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gray-400 text-base">
                      {item.source} • {item.timestamp}
                    </span>
                  </motion.div>
                );
              })}
              {/* Duplicate for seamless loop */}
              {newsItems.map((item, index) => {
                const IconComponent = getCategoryIcon(item.category);
                return (
                  <motion.div
                    key={`${item.id}-duplicate-${index}`}
                    className="flex items-center space-x-5 whitespace-nowrap group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <div className={`flex items-center space-x-2 ${getCategoryColor(item.category)}`}>
                      <IconComponent size={22} />
                      <span className="text-base font-medium uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-white text-lg font-medium group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gray-400 text-base">
                      {item.source} • {item.timestamp}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
