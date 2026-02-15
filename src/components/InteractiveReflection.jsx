import React, { useState } from 'react';

const InteractiveReflection = () => {
  const [selectedReflection, setSelectedReflection] = useState(null);

  const reflections = {
    lonely: {
      title: "Personal Growth Phase",
      icon: "🌱",
      message: [
        "This period represents an opportunity for focused self-development.",
        "• Prioritize personal growth and emotional foundation building",
        "• Invest in meaningful interests and valuable friendships", 
        "• Seek connections based on shared values and mutual respect",
        "• Remember: this phase prepares you for healthier future relationships"
      ],
      poetry: {
        couplet: "دل ہی تو ہے نہ سنگ و خشت، درد سے بھر نہ آئے کیوں\nرویں گے ہزار بار، کوئی ہمیں ستائے کیوں۔",
        transliteration: "Dil hi to hai na sang-o-khisht, dard se bhar na aaye kyun\nRoyenge hum hazaar baar, koi humein sataye kyun.",
        poet: "Mirza Ghalib"
      }
    },
    confused: {
      title: "Emotional Clarity",
      icon: "🤔",
      message: [
        "Taking time to understand emotions with clarity and wisdom.",
        "• Evaluate if this connection aligns with personal values and goals",
        "• Build friendship foundation before pursuing deeper connection",
        "• Observe actions and consistency rather than fleeting feelings",
        "• Trust that genuine compatibility reveals itself naturally over time"
      ],
      poetry: {
        couplet: "سنا ہے لوگ اسے آنکھ بھر کے دیکھتے ہیں\nتو اس کے شہر میں کچھ دن رہر کے دیکھتے ہیں۔",
        transliteration: "Suna hai log usay aankh bhar ke dekhte hain\nTo us ke shehar mein kuch din raher ke dekhte hain.",
        poet: "Ahmad Faraz"
      }
    },
    partnership: {
      title: "Building Partnership",
      icon: "🏛️",
      message: [
        "Developing a strong foundation for meaningful partnership.",
        "• Cultivate emotional intelligence and communication skills",
        "• Practice conflict resolution with understanding and patience",
        "• Align on shared values, financial perspectives, and life vision",
        "• Commit to continuous growth as individuals and as partners"
      ],
      poetry: {
        couplet: "مجھ سے پہلی سی محبت میرے محبوب نہ مانگ۔",
        transliteration: "Mujh se pehli si mohabbat mere mehboob na maang.",
        poet: "Faiz Ahmed Faiz"
      }
    }
  };

  const handleReflectionClick = (type) => {
    setSelectedReflection(reflections[type]);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-beige to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-28 h-28 bg-soft-green/8 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-soft-green/6 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-soft-green/4 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extralight text-soft-green mb-4 tracking-tight animate-slideInLeft">
          Personal Development Journey
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 font-light animate-slideInRight" style={{ animationDelay: '0.3s' }}>
          Select your current focus area for practical guidance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(reflections).map(([key, reflection], index) => (
            <button
              key={key}
              onClick={() => handleReflectionClick(key)}
              className="bg-gradient-to-br from-white to-gray-50 text-soft-green border-2 border-soft-green rounded-xl py-6 px-8 text-base md:text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-soft-green hover:to-green-600 hover:text-white hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center gap-3 animate-scaleIn"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <span className="text-2xl filter grayscale-0 transition-all duration-300 group-hover:filter-none group-hover:brightness-150 animate-bounce" style={{ animationDelay: `${1.2 + index * 0.3}s` }}>
                {reflection.icon}
              </span>
              <span className="text-sm md:text-base leading-tight">
                {reflection.title}
              </span>
            </button>
          ))}
        </div>

        {selectedReflection && (
          <div className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl shadow-2xl border border-soft-green/10 text-left max-w-3xl mx-auto animate-scaleIn">
            <h3 className="text-xl md:text-2xl font-semibold text-soft-green mb-8 flex items-center gap-4">
              <span className="text-2xl filter grayscale-0 animate-pulse">
                {selectedReflection.icon}
              </span>
              {selectedReflection.title}
            </h3>
            <div className="space-y-4 mb-8">
              {selectedReflection.message.map((line, index) => (
                <p 
                  key={index} 
                  className={
                    index === 0 
                      ? "text-lg md:text-xl leading-relaxed text-gray-800 font-medium mb-6 italic animate-fadeIn" 
                      : "text-base md:text-lg leading-relaxed text-gray-600 font-light mb-4 pl-6 relative before:content-['•'] before:text-soft-green before:font-semibold animate-slideUp"
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Poetry Section */}
            <div className="border-t border-soft-green/20 pt-8">
              <div className="text-right mb-4">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic font-light font-urdu animate-fadeIn">
                  {selectedReflection.poetry.couplet}
                </p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 italic animate-fadeIn">
                  {selectedReflection.poetry.transliteration}
                </p>
                <p className="text-sm text-soft-green font-medium animate-fadeIn">
                  — {selectedReflection.poetry.poet}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveReflection;
