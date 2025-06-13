import React, { useState } from 'react';
import { Clapperboard, Target, Palette, Music, TrendingUp, DollarSign, Calendar, Users2 } from 'lucide-react';

interface GuideSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string;
  highlights?: string[];
}

const guideSections: GuideSection[] = [
  {
    id: 'overview',
    title: 'Visão Geral da Série',
    icon: Clapperboard,
    content: `Título: Juliette Psicose: A Noiva da Morte
Gênero: Drama Psicológico, Suspense Sobrenatural, Fantasia Sombria
Público-Alvo: Jovens adultos e adultos (18-45 anos) interessados em narrativas complexas, personagens femininas fortes e histórias que exploram os limites da realidade.`,
    highlights: ['Drama Psicológico', 'Suspense Sobrenatural', 'Fantasia Sombria']
  },
  {
    id: 'usp',
    title: 'Pontos de Venda Exclusivos',
    icon: Target,
    content: `A série oferece uma protagonista feminina complexa e empoderada, narrativa não linear e imersiva, elementos sobrenaturais únicos e estética visual diferenciada. O potencial para franquia é imenso, com possibilidades de expansão para múltiplas temporadas e outras mídias.`,
    highlights: ['Protagonista Empoderada', 'Narrativa Não Linear', 'Universo Expansível', 'Estética Única']
  },
  {
    id: 'visual',
    title: 'Estilo Visual e Direção de Arte',
    icon: Palette,
    content: `Paleta predominantemente escura com tons de azul profundo, cinza, preto e roxo. Uso dramático de luz e sombra, cenografia que reflete a psique dos personagens, e efeitos visuais sutis mas impactantes para representar as transições entre realidades.`,
    highlights: ['Paleta Sombria', 'Iluminação Dramática', 'Cenografia Psicológica', 'VFX Sutis']
  },
  {
    id: 'sound',
    title: 'Trilha Sonora e Design de Som',
    icon: Music,
    content: `Trilha sonora original que mistura elementos clássicos com sons eletrônicos experimentais. A melodia da caixinha de música será tema recorrente. Design de som imersivo com sussurros, ecos e sons distorcidos para representar a psicose.`,
    highlights: ['Trilha Original', 'Temas Recorrentes', 'Design Imersivo', 'Sons Experimentais']
  },
  {
    id: 'marketing',
    title: 'Estratégias de Marketing',
    icon: TrendingUp,
    content: `Campanha digital imersiva com website interativo, conteúdo para redes sociais, parcerias com influenciadores, eventos imersivos e trailers de alta qualidade cinematográfica que capturem a atmosfera sombria e surreal da série.`,
    highlights: ['Campanha Digital', 'Redes Sociais', 'Influenciadores', 'Eventos Imersivos']
  },
  {
    id: 'budget',
    title: 'Orçamento e Cronograma',
    icon: DollarSign,
    content: `Orçamento de médio a alto porte necessário para garantir qualidade visual e efeitos especiais. Cronograma inclui 3-4 meses de pré-produção, 3-4 semanas de filmagem do piloto, e 4-6 meses de pós-produção.`,
    highlights: ['Orçamento Médio-Alto', 'Pré-produção: 3-4 meses', 'Filmagem: 3-4 semanas', 'Pós: 4-6 meses']
  }
];

export const ProductionGuide: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<GuideSection | null>(null);

  return (
    <section id="guia" className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Users2 className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Guia de Produção
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Material completo de apresentação para produtoras e plataformas de streaming
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guideSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                onClick={() => setSelectedSection(section)}
                className="group bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-900/20 hover:border-primary-600/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-600/10"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-primary-600/20 rounded-full border border-primary-600/30 group-hover:animate-glow">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-4 text-center group-hover:text-primary-200 transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed text-center mb-6">
                  {section.content.substring(0, 120)}...
                </p>

                {section.highlights && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {section.highlights.slice(0, 2).map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-full border border-primary-600/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                    Ver Detalhes
                    <Calendar className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Highlights Section */}
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-900/20 mb-12">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">
            Destaques da Produção
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-primary-300 mb-2">Público Engajado</h4>
              <p className="text-gray-400 text-sm">18-45 anos, fãs de narrativas complexas e personagens femininas fortes</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-primary-300 mb-2">Potencial de Franquia</h4>
              <p className="text-gray-400 text-sm">Universo expansível para múltiplas temporadas e outras mídias</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-primary-300 mb-2">Estética Única</h4>
              <p className="text-gray-400 text-sm">Visual cinematográfico distintivo e imersivo</p>
            </div>
          </div>
        </div>

        {/* Section Detail Modal */}
        {selectedSection && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-900/30">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30">
                      <selectedSection.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {selectedSection.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSection(null)}
                    className="p-2 hover:bg-primary-600/20 rounded-lg transition-colors text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-lg border border-primary-900/10">
                    <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                      {selectedSection.content}
                    </pre>
                  </div>

                  {selectedSection.highlights && (
                    <div>
                      <h4 className="text-lg font-semibold text-primary-300 mb-4">Destaques Principais</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedSection.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-primary-600/10 rounded-lg border border-primary-600/20">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};