import React from 'react';

const Hero = () => {
  const techStack = [
    'React',
    'Functional Components',
    'useState Hooks',
    'Responsive Design'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 relative px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-green/10 rounded-full animate-float flex items-center justify-center">
          <span className="text-6xl">🍀</span>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-soft-green/8 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-soft-green/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-6xl md:text-7xl font-extralight text-soft-green mb-6 leading-tight tracking-tight animate-slideInLeft relative">
          Redefining Love
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-8 animate-slideInRight" style={{ animationDelay: '0.3s' }}>
          Beyond emotions. Towards commitment, responsibility, and personal growth.
        </p>
        
        <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-soft-green/10 shadow-2xl animate-scaleIn" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-gray-600 mb-6 font-medium uppercase tracking-wider animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            Built with modern web technologies:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-soft-green to-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-slideUp"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
