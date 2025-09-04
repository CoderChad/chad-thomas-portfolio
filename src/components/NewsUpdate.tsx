import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, MessageCircle, Send, Calendar, TrendingUp } from 'lucide-react';

interface Comment {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
}

const NewsUpdate: React.FC = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: 'Sarah Chen',
      message: 'Great insights on the latest AI developments! The multimodal approach is fascinating.',
      timestamp: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      message: 'Looking forward to more technical deep dives on transformer architectures.',
      timestamp: '4 hours ago',
      likes: 8
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      message: 'Excellent analysis of the current state of AI research. Very informative!',
      timestamp: '6 hours ago',
      likes: 15
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        name: 'Anonymous',
        message: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
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
            Weekly AI News Update
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest developments in artificial intelligence and machine learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-2xl">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-6 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play size={32} className="text-white ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Video Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-gray-300" />
                        <span className="text-sm text-gray-300">Latest Update</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp size={16} className="text-green-400" />
                        <span className="text-sm text-green-400">Trending</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Latest AI News Update
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This week's comprehensive analysis covers the latest breakthroughs in multimodal AI, 
                  advances in large language models, and emerging trends in computer vision. 
                  Join me as we explore the cutting-edge developments shaping the future of artificial intelligence.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-300">Live</span>
                    </div>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-300">15:42</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg text-sm font-semibold text-white hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                  >
                    Watch Full Video
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-2xl h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle size={24} className="text-primary-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Community Discussion
                  </h3>
                </div>

                {/* Comment Form */}
                <form onSubmit={handleSubmitComment} className="mb-6">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts on AI developments..."
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold text-white hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                    >
                      <Send size={20} />
                    </motion.button>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-white">
                              {comment.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">
                              {comment.name}
                            </h4>
                            <p className="text-xs text-gray-400">
                              {comment.timestamp}
                            </p>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-1 text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <span>❤️</span>
                          <span>{comment.likes}</span>
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {comment.message}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* View More Comments */}
                <div className="text-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-300"
                  >
                    View More Comments
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdate;
