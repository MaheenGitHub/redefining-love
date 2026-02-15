import React from 'react';

const UrduPoetry = () => {
  const poetryCollection = [
    {
      line1: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے",
      line2: "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
      transliteration: "Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche bata teri raza kya hai",
      poet: "Allama Iqbal",
      theme: "On self-elevation and divine connection"
    },
    {
      line1: "اور بھی دکھ ہیں زمانے میں محبت کے سوا",
      line2: "راحتں اور بھی ہیں وصل کی راحت کے سوا",
      transliteration: "Aur bhi dukh hain zamane mein mohabbat ke siwa\nRahein aur bhi hain vasl ki raahat ke siwa",
      poet: "Faiz Ahmad Faiz",
      theme: "On the deeper pains and comforts beyond love"
    },
    {
      line1: "وجودِ زن سے ہے تصویرِ کائنات میں رنگ",
      line2: "اسی کے ساز سے ہے زندگی کا سوزِ دروں",
      transliteration: "Wujood-e-zan se hai tasveer-e-kainaat mein rang\nUssi ke saaz se hai zindagi ka soz-e-daroon",
      poet: "Allama Iqbal",
      theme: "On the essence of feminine presence in creation"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-200/10 to-teal-200/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-teal-200/10 to-cyan-200/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-200/5 to-emerald-200/5 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-thin bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 tracking-wide text-center animate-fadeIn">
          Love in Urdu Literature
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light text-center mb-16 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Urdu poetry explores love as a journey of responsibility, emotional maturity, and self-awareness. 
          These classical couplets reflect the depth of human connection beyond superficial emotions, 
          emphasizing growth, reflection, and the wisdom that comes from understanding our own hearts.
        </p>

        <div className="space-y-16">
          {poetryCollection.map((poem, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-emerald-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeIn"
              style={{ animationDelay: `${0.4 + index * 0.3}s` }}
            >
              <div className="text-right mb-8">
                <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 italic font-light font-urdu animate-fadeIn group-hover:text-emerald-700 transition-colors duration-300" style={{ animationDelay: `${0.6 + index * 0.3}s` }}>
                  {poem.line1}
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 italic font-light font-urdu animate-fadeIn group-hover:text-emerald-700 transition-colors duration-300" style={{ animationDelay: `${0.6 + index * 0.3}s` }}>
                  {poem.line2}
                </p>
              </div>
              
              <div className="border-t border-gradient-to-r from-emerald-100/50 to-teal-100/50 my-8"></div>
              
              <div className="text-center space-y-4">
                <p className="text-base md:text-lg text-gray-600 italic animate-fadeIn group-hover:text-gray-700 transition-colors duration-300" style={{ animationDelay: `${0.8 + index * 0.3}s` }}>
                  {poem.transliteration}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <p className="text-sm md:text-base text-gray-500 font-light animate-fadeIn group-hover:text-gray-600 transition-colors duration-300" style={{ animationDelay: `${1.0 + index * 0.3}s` }}>
                    {poem.theme}
                  </p>
                  <p className="text-base md:text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium animate-fadeIn" style={{ animationDelay: `${1.2 + index * 0.3}s` }}>
                    — {poem.poet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrduPoetry;
