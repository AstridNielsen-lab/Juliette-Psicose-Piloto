import React from 'react';
import { Skull, Moon, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-black via-dark-900 to-dark-800 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Icons */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Skull className="w-8 h-8 text-primary-400" />
            </div>
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30">
              <Heart className="w-8 h-8 text-primary-400" />
            </div>
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Moon className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent leading-tight">
            Juliette Psicose
          </h1>
          <p className="text-2xl md:text-3xl font-light text-primary-300 mb-8 font-serif">
            A Noiva da Morte
          </p>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Uma jornada através dos véus da realidade, onde trauma e redenção se encontram 
              nas profundezas da mente humana e nos mistérios de dimensões ancestrais.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
    </header>
  );
};