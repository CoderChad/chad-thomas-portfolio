// src/components/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
