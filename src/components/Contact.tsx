import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Link as LinkIcon, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/CoderChad',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/chad-thomas-/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Linktree',
      icon: LinkIcon,
      url: 'https://linktr.ee/ChadT_Pryima',
      color: 'hover:text-green-400'
    }
  ];

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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Let's Connect
                </h3>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a 
                        href="mailto:appsforchad@gmail.com"
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      >
                        appsforchad@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Austin, TX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Response Time</h4>
                      <p className="text-gray-300">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 glass rounded-full text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold text-white hover:from-primary-600 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </motion.button>
                </form>

                {/* Form Note */}
                <p className="text-sm text-gray-400 mt-4 text-center">
                  I'll get back to you as soon as possible. Usually within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400">
            © 2025 Chad Thomas. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
