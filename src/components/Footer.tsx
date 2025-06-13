import React from 'react';
import { Heart, Skull, Moon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-dark-950 text-white py-16 border-t border-primary-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Icons */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Skull className="w-6 h-6 text-primary-400" />
            </div>
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30">
              <Heart className="w-6 h-6 text-primary-400" />
            </div>
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Moon className="w-6 h-6 text-primary-400" />
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Juliette Psicose
          </h2>
          <p className="text-xl text-primary-300 mb-8 font-serif">
            A Noiva da Morte
          </p>
          
          {/* Quote */}
          <blockquote className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-400 italic leading-relaxed">
              "Uma jornada através dos véus da realidade, onde trauma e redenção se encontram 
              nas profundezas da mente humana e nos mistérios de dimensões ancestrais."
            </p>
          </blockquote>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-primary-900/20">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Juliette Psicose: A Noiva da Morte. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Baseado no livro "Juliette Psicose: Encontre-me"
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
    </footer>
  );
};