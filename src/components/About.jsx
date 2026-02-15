import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-beige relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-soft-green/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-soft-green/8 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light animate-fadeIn">
          Love extends beyond fleeting emotions. It represents a deliberate commitment to responsibility, 
          mutual respect, emotional maturity, and continuous personal development. True connection manifests 
          through consistent actions, thoughtful choices, and the dedication to building meaningful relationships 
          that endure through life's challenges.
        </p>
      </div>
    </section>
  );
};

export default About;
