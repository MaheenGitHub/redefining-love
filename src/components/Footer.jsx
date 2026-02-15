import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-white to-green-50 border-t border-soft-green/10 py-12 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 right-5 w-16 h-16 bg-soft-green/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 left-5 w-12 h-12 bg-soft-green/8 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="text-center animate-slideInLeft">
          <h4 className="text-lg md:text-xl font-semibold text-soft-green mb-4">
            Technical Implementation
          </h4>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-soft-green/10 text-soft-green px-3 py-2 rounded-full text-sm font-medium border border-soft-green/20 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              React Functional Components
            </span>
            <span className="bg-soft-green/10 text-soft-green px-3 py-2 rounded-full text-sm font-medium border border-soft-green/20 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              useState Hooks
            </span>
            <span className="bg-soft-green/10 text-soft-green px-3 py-2 rounded-full text-sm font-medium border border-soft-green/20 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Responsive CSS Grid
            </span>
            <span className="bg-soft-green/10 text-soft-green px-3 py-2 rounded-full text-sm font-medium border border-soft-green/20 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              Modern JavaScript ES6+
            </span>
          </div>
        </div>
        
        <div className="text-center animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <h4 className="text-lg md:text-xl font-semibold text-soft-green mb-4">
            Project Purpose
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 font-light max-w-xs mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            A professional exploration of meaningful relationships, responsibility, and personal growth - 
            demonstrating modern React development with thoughtful content.
          </p>
        </div>
        
        <div className="md:col-span-3 text-center animate-slideInRight" style={{ animationDelay: '0.4s' }}>
          <p className="text-xs text-gray-500 font-light animate-fadeIn" style={{ animationDelay: '0.7s' }}>
            © {currentYear} Built with React | Professional development project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
