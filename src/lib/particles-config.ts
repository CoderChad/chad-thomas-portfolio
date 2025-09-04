// src/lib/particles-config.ts
export interface ParticleConfig {
  count: number;
  speed: number;
  size: { min: number; max: number };
  opacity: { min: number; max: number };
  color: string;
  mouseInteraction: {
    enabled: boolean;
    distance: number;
    force: number;
  };
  animation: {
    targetFPS: number;
    frameInterval: number;
  };
}

export interface CosmicElementsConfig {
  floatingElements: {
    count: number;
    animation: {
      duration: { min: number; max: number };
      delay: { min: number; max: number };
    };
  };
  connectionLines: {
    count: number;
    animation: {
      duration: { min: number; max: number };
      delay: { min: number; max: number };
    };
  };
}

export const PARTICLE_CONFIG = (mode: 'dark' | 'light' = 'dark'): ParticleConfig => ({
  count: 50,
  speed: 0.05, // 👈 normalized calm speed (reduced from 0.1)
  size: { min: 1, max: 2 },
  opacity: { min: 0.2, max: 0.7 },
  color: mode === 'dark' ? '#8B5CF6' : '#6D28D9',
  mouseInteraction: {
    enabled: true,
    distance: 100,
    force: 0.05, // 👈 reduced from 0.1 for subtle interaction
  },
  animation: {
    targetFPS: 30,
    frameInterval: 1000 / 30,
  },
});

export const COSMIC_ELEMENTS_CONFIG: CosmicElementsConfig = {
  floatingElements: {
    count: 20,
    animation: {
      duration: { min: 3, max: 5 }, // 👈 slower, more calm
      delay: { min: 0, max: 2 },
    },
  },
  connectionLines: {
    count: 8,
    animation: {
      duration: { min: 5, max: 8 }, // 👈 slower, more calm
      delay: { min: 0, max: 3 },
    },
  },
};

// Mobile-optimized config
export const MOBILE_PARTICLE_CONFIG = (mode: 'dark' | 'light' = 'dark'): ParticleConfig => ({
  ...PARTICLE_CONFIG(mode),
  count: 30, // Reduced for mobile performance
  speed: 0.03, // Even slower on mobile
});

// Accessibility: Check for reduced motion preference
export const shouldRenderParticles = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  return !prefersReducedMotion;
};

// Check if device is mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 640;
};
