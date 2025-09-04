import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Link as LinkIcon } from 'lucide-react';
import { 
  PARTICLE_CONFIG, 
  MOBILE_PARTICLE_CONFIG,
  shouldRenderParticles,
  isMobile 
} from '../lib/particles-config';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check accessibility preferences
    setShouldRender(shouldRenderParticles());
    
    const canvas = canvasRef.current;
    if (!canvas || !shouldRender) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with configuration
    const config = isMobile() ? MOBILE_PARTICLE_CONFIG('dark') : PARTICLE_CONFIG('dark');
    const initialParticles: Particle[] = Array.from({ length: config.count }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      size: Math.random() * (config.size.max - config.size.min) + config.size.min,
      opacity: Math.random() * (config.opacity.max - config.opacity.min) + config.opacity.min,
    }));

    setParticles(initialParticles);

    let lastTime = 0;
    const frameInterval = config.animation.frameInterval;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Mouse interaction
          if (config.mouseInteraction.enabled) {
            const dx = mousePosition.x - particle.x;
            const dy = mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < config.mouseInteraction.distance) {
              const force = (config.mouseInteraction.distance - distance) / config.mouseInteraction.distance;
              newX -= (dx / distance) * force * config.mouseInteraction.force;
              newY -= (dy / distance) * force * config.mouseInteraction.force;
            }
          }

          // Boundary check
          if (newX < 0 || newX > canvas.width) particle.vx *= -1;
          if (newY < 0 || newY > canvas.height) particle.vy *= -1;

          newX = Math.max(0, Math.min(canvas.width, newX));
          newY = Math.max(0, Math.min(canvas.height, newY));

          // Draw particle
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
          ctx.fill();

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

        lastTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition, shouldRender]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const skillTags = [
    'Fine-Tuning',
    'Reinforcement Learning',
    'Deep Learning',
    'Transfer Learning',
    'Federated Learning',
    'AutoML',
    'MLOps',
    'Neural Networks',
    'Advanced Statistical Methods',
    'Modeling Architecture'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating Cosmic Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Animated Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        onMouseMove={handleMouseMove}
      />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/50" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 mt-20"
        >
          <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl relative group">
            <img
              src="/images/headshot.JPG"
              alt="Chad Thomas - AI Engineer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text text-shadow-lg"
        >
          Chad Thomas
        </motion.h1>
        
        {/* Professional Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
        >
          Founder & CEO of Pryima • AI/ML Engineer • Data Scientist & Practitioner
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 font-medium italic max-w-4xl mx-auto leading-relaxed"
        >
          I build production-grade AI end-to-end—data ingestion → retrieval → models → UI—with safety and measurement baked in. At Pryima I'm unifying genetics, dynamic labs, microbiome, CGM, and wearables into a single health OS.
        </motion.p>

        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillTags.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 hover:bg-primary-500/20 hover:border-primary-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['Main', 'AI News', 'Quarterly Blogs', 'Toggle Theme'].map((button, index) => (
            <motion.button
              key={button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-primary-500/20 hover:border-primary-400 transition-all duration-300"
            >
              {button}
            </motion.button>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-6 mb-8"
        >
          <motion.a
            href="https://github.com/CoderChad"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
          >
            <Github size={24} className="text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chad-thomas-/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
          >
            <Linkedin size={24} className="text-white" />
          </motion.a>
          <motion.a
            href="https://linktr.ee/ChadT_Pryima"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
          >
            <LinkIcon size={24} className="text-white" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 glass rounded-full"
          >
            <ChevronDown size={24} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
