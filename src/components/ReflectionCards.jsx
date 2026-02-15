import React from 'react';

const ReflectionCards = () => {
  const cards = [
    {
      title: "Love as Responsibility",
      points: [
        "Emotional accountability and mutual support",
        "Consistent effort through life's challenges", 
        "Supporting individual growth while maintaining boundaries",
        "Building trust through reliable actions and decisions"
      ]
    },
    {
      title: "Love as Self-Development",
      points: [
        "Inspiring personal growth and maturity",
        "Becoming better versions of ourselves",
        "Encouraging individual journeys and aspirations",
        "Continuous learning and mutual adaptation"
      ]
    },
    {
      title: "Love as Commitment",
      points: [
        "Beyond feelings to conscious choices",
        "Dedication through all seasons of life",
        "Loyalty and unwavering support",
        "Long-term vision and shared objectives"
      ]
    },
    {
      title: "Love within Partnership",
      points: [
        "Friendship combined with deep partnership",
        "Shared purpose and aligned life vision",
        "Foundation for lifelong growth together",
        "Balancing practical wisdom with meaningful connection"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-soft-green/3 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-soft-green/2 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-soft-green/20 overflow-hidden group animate-slideUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-soft-green mb-6 relative">
              {card.title}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-soft-green to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h3>
            <ul className="list-none p-0">
              {card.points.map((point, pointIndex) => (
                <li 
                  key={pointIndex} 
                  className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-3 pl-6 relative before:content-['▸'] before:text-soft-green before:font-semibold animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2 + pointIndex * 0.1}s` }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReflectionCards;
