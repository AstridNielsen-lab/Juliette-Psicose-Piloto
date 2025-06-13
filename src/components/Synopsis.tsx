import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export const Synopsis: React.FC = () => {
  return (
    <section id="sinopse" className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <BookOpen className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Sinopse
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-transparent rounded-lg blur-lg"></div>
              <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-lg border border-primary-900/20">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-5 h-5 text-primary-400 mr-2" />
                  <span className="text-primary-300 font-semibold">Conceito Central</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Uma jovem atormentada por um passado de vícios e uma tentativa de suicídio 
                  acorda em uma realidade distorcida, onde vozes enigmáticas e visões 
                  sobrenaturais a guiam em uma busca desesperada por significado, revelando 
                  seu papel como uma ponte entre mundos e a noiva de uma entidade ancestral.
                </p>
              </div>
            </div>

            <div className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-primary-300 mb-3">Baseado no Livro</h3>
              <p className="text-gray-400 italic">"Juliette Psicose: Encontre-me"</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-900/20">
              <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
                A Jornada
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Esta série mergulha nas profundezas da mente humana e nos véus da realidade, 
                explorando temas como trauma, redenção, a natureza da percepção e a existência 
                de múltiplas dimensões.
              </p>
              <p className="text-gray-300 leading-relaxed">
                A protagonista, Juliette, é uma figura complexa e multifacetada, cuja jornada 
                de autodescoberta a leva a confrontar seus demônios interiores e a desvendar 
                segredos ancestrais. A série combina elementos de suspense psicológico com 
                toques de fantasia sombria e um romance proibido, criando uma experiência 
                imersiva e instigante.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['Drama Psicológico', 'Fantasia Sombria', 'Romance Gótico'].map((genre, index) => (
                <div key={genre} className="text-center p-4 bg-dark-800/30 rounded-lg border border-primary-900/10 hover:border-primary-600/30 transition-colors">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                    index === 0 ? 'bg-primary-500' : index === 1 ? 'bg-primary-400' : 'bg-primary-300'
                  }`}></div>
                  <span className="text-sm text-gray-400">{genre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};