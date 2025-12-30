import React from 'react';

const Kolkata: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E1] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 h-64 md:h-80">
          <img src="https://images.unsplash.com/photo-1552160753-117159d7419d?q=80&w=2070" alt="Kolkata Food Culture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Kolkata</h1>
            <p className="text-lg md:text-xl opacity-90">The City of Joy & The Capital of Food.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kolkata;