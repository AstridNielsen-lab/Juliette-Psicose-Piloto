import React, { useState } from 'react';
import { Users, Heart, Skull, Moon, User, Eye, Zap } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: {
    appearance: string;
    personality: string;
    motivations: string[];
    backstory: string;
  };
}

const characters: Character[] = [
  {
    id: 'juliette',
    name: 'Juliette Psicose',
    title: 'A Protagonista Multifacetada',
    description: 'A Não Nascida, A Noiva da Morte, Dançarina nas Sombras. Uma figura complexa entre a sanidade e a loucura.',
    icon: Heart,
    details: {
      appearance: 'Juliette possui uma beleza etérea e quase sobrenatural. Seus olhos, de uma cor incomum (azul-acinzentado profundo), são o espelho de sua alma inquieta. Seus cabelos longos emolduram um rosto que parece esculpido por sonhos e pesadelos.',
      personality: 'Uma sinfonia de contradições, profundamente sarcástica, usando o humor ácido como escudo. Aventureira por natureza, mas com uma fragilidade aparente que a torna suscetível às dores do mundo.',
      motivations: [
        'Busca pela Verdade e Significado',
        'Superação do Passado e Redenção',
        'Conexão com a Morte',
        'Proteção dos Inocentes'
      ],
      backstory: 'Uma jovem atormentada que tentou suicídio, despertando em uma nova realidade sem memória. Encontrou uma lista misteriosa de histórias que revelaram ser vislumbres de realidades paralelas.'
    }
  },
  {
    id: 'death',
    name: 'A Morte',
    title: 'A Aliada Enigmática',
    description: 'Uma entidade atemporal que acompanha Juliette, não como inimiga, mas como guia e protetora.',
    icon: Skull,
    details: {
      appearance: 'Não possui forma física fixa, manifestando-se como voz etérea, sombra fluida ou figura andrógina envolta em vestes escuras que absorvem a luz. Seus olhos refletem sabedoria de eras.',
      personality: 'Paradoxal: antiga mas curiosa, paciente e enigmática. Fascínio pela resiliência humana e busca por significado. Possui senso de humor sutil e irônico.',
      motivations: [
        'Manter o Equilíbrio entre dimensões',
        'Observar e Aprender sobre a natureza humana',
        'Guiar Juliette em sua jornada'
      ],
      backstory: 'Guardiã dos véus da realidade, acompanha Juliette desde sempre, testemunhando seu percurso com paixão única. Sua relação transcende o tradicional conceito de morte.'
    }
  },
  {
    id: 'mysterious',
    name: 'O Homem Misterioso',
    title: 'O Catalisador do Destino',
    description: 'Figura enigmática com beleza clássica, representa um amor intenso e proibido que transcende tempo e espaço.',
    icon: Eye,
    details: {
      appearance: 'Beleza clássica com traços marcantes, olhos penetrantes âmbar ou azul elétrico que brilham com inteligência astuta. Cabelos escuros despenteados, veste-se de forma elegante e atemporal.',
      personality: 'Enigma sedutor e carismático, mestre em jogos mentais. Mistura charme e manipulação, sabedoria e crueldade. Vulnerabilidade oculta busca conexão genuína.',
      motivations: [
        'Desvendar os Mistérios de Juliette',
        'Equilíbrio ou Desequilíbrio das realidades',
        'Amor Proibido transcendental'
      ],
      backstory: 'Figura que aparece no Capítulo V, questionando os limites entre realidade e ficção. Pode ser entidade dimensional, guardião de segredos antigos ou manifestação da mente de Juliette.'
    }
  }
];

export const Characters: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <section id="personagens" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Users className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Personagens
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {characters.map((character) => {
            const IconComponent = character.icon;
            return (
              <div
                key={character.id}
                onClick={() => setSelectedCharacter(character)}
                className="group relative bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-900/20 hover:border-primary-600/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-600/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-primary-600/20 rounded-full border border-primary-600/30 group-hover:animate-glow">
                      <IconComponent className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 text-center">
                    {character.name}
                  </h3>
                  <p className="text-primary-300 text-sm font-medium text-center mb-4">
                    {character.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {character.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                      Ver Detalhes
                      <Zap className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Character Detail Modal */}
        {selectedCharacter && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-900/30">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30">
                      <selectedCharacter.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {selectedCharacter.name}
                      </h3>
                      <p className="text-primary-300">{selectedCharacter.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCharacter(null)}
                    className="p-2 hover:bg-primary-600/20 rounded-lg transition-colors text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-300 mb-3 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Aparência Física
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCharacter.details.appearance}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary-300 mb-3">Personalidade</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCharacter.details.personality}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary-300 mb-3">Motivações</h4>
                    <ul className="space-y-2">
                      {selectedCharacter.details.motivations.map((motivation, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary-300 mb-3">História Pessoal</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCharacter.details.backstory}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};