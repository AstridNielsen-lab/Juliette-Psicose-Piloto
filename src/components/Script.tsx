import React, { useState } from 'react';
import { Film, Play, Clock, MapPin } from 'lucide-react';

interface Scene {
  id: string;
  title: string;
  location: string;
  timeOfDay: string;
  description: string;
  content: string;
}

const scenes: Scene[] = [
  {
    id: 'scene1',
    title: 'O Restaurante Estranho',
    location: 'INT. RESTAURANTE - NOITE',
    timeOfDay: 'Noite',
    description: 'Juliette desperta em um ambiente surreal, questionando a realidade.',
    content: `O interior é um labirinto de mesas e cadeiras, dispostas de forma caótica. A iluminação é baixa, com focos de luz que criam sombras dançantes nas paredes. A música ambiente é uma melodia dissonante, quase um lamento.

Em uma mesa isolada, no canto mais escuro do restaurante, está JULIETTE (25-30), uma mulher de beleza etérea, mas com uma expressão de profunda confusão e desorientação.

JULIETTE (V.O.)
"Eu não sabia mais o que pensar. Depois de tudo o que aconteceu, eu estava perdida em meio a uma psicose que me fazia questionar a própria realidade..."

Juliette tenta se levantar, mas suas pernas falham. A ansiedade cresce dentro dela, e ela começa a ouvir SUSSURROS inaudíveis, vozes que parecem vir de todos os lados.

VOZ (O.S.)
"Juliette, escute-me. Você está em perigo, mas há uma maneira de sair disso. Olhe ao seu redor, encontre a pista e siga-a."`
  },
  {
    id: 'scene2',
    title: 'A Fuga e a Perseguição',
    location: 'EXT. RUAS LABIRÍNTICAS - NOITE',
    timeOfDay: 'Noite',
    description: 'Perseguição psicológica pelas ruas escuras da cidade.',
    content: `Juliette corre pelas ruas escuras e labirínticas de uma cidade que parece não ter fim. Os edifícios são altos e imponentes, suas fachadas distorcidas.

No final de um beco escuro, uma FIGURA ESCURA E AMEAÇADORA se materializa. É A MORTE, em sua forma mais sombria, uma silhueta alta e esguia, envolta em um manto que parece absorver a luz.

A perseguição é mais psicológica do que física, com a figura aparecendo e desaparecendo, surgindo em diferentes becos, aumentando a paranoia de Juliette.

JULIETTE
"Não é real... não é real... é só a minha mente... eu estou enlouquecendo..."

VOZ (O.S.)
"Você não está sozinha, Juliette. Nunca esteve."`
  },
  {
    id: 'scene3',
    title: 'O Apartamento Caótico',
    location: 'INT. APARTAMENTO DE JULIETTE - DIA/NOITE',
    timeOfDay: 'Dia/Noite',
    description: 'Flashbacks e visões reveladoras no apartamento de Juliette.',
    content: `O apartamento de Juliette é um reflexo de sua mente: um caos organizado. Pilhas de livros e papéis se amontoam em todos os cantos, alguns com anotações frenéticas.

Juliette pega uma CAIXINHA DE MÚSICA antiga. Ela a abre, e uma MELODIA DOCE e melancólica preenche o ambiente.

À medida que a melodia se espalha, as imagens começam a se formar em sua mente - LUGARES QUE NUNCA ANTES HAVIA IMAGINADO, CIDADES ANTIGAS, FLORESTAS MÍSTICAS.

JULIETTE (V.O.)
"Eu me sentia como uma antena, captando sinais de uma frequência diferente, uma dimensão desconhecida..."

VOZ (O.S.)
"Você é a não nascida, Juliette. A noiva da morte. Sua alma transcende o véu da realidade."`
  },
  {
    id: 'scene4',
    title: 'A Conexão com a Morte',
    location: 'INT. ESPAÇO ETÉREO - NOITE',
    timeOfDay: 'Atemporal',
    description: 'Encontro transcendental entre Juliette e A Morte.',
    content: `Juliette está em um espaço etéreo, um limbo entre a realidade e o véu. O ambiente é nebuloso, com tons de cinza e azul profundo.

Uma SILHUETA ESCURA se materializa. É A MORTE, figura andrógina, alta e esguia, envolta em vestes fluidas que parecem feitas de fumaça e estrelas.

A MORTE
"Você compreende agora, Juliette? O véu é fino para você. Suas palavras, suas histórias... elas não são apenas ficção."

JULIETTE
"A lista... as histórias... elas são reais?"

A MORTE
"Tão reais quanto você. Cada palavra que você escreveu é um fio no tecido da existência. E você, Juliette, é a tecelã."`
  },
  {
    id: 'scene5',
    title: 'O Ponto de Encontro',
    location: 'INT. GALPÃO ABANDONADO - NOITE',
    timeOfDay: 'Noite',
    description: 'Encontro climático com o Homem Misterioso.',
    content: `O interior do galpão é vasto e escuro, preenchido por sombras dançantes. A luz da lua entra pelas janelas quebradas, criando feixes de luz.

De repente, uma figura emerge das sombras. É O HOMEM MISTERIOSO (30-40), com uma beleza clássica e enigmática. Seus olhos âmbar brilham com inteligência astuta.

HOMEM MISTERIOSO
"Eu sabia que você viria. Eu sabia que você encontraria o caminho."

JULIETTE
"Quem é você?"

O Homem Misterioso estende a mão, oferecendo um pequeno OBJETO: um medalhão antigo com um símbolo estranho gravado.

HOMEM MISTERIOSO
"Este é apenas o começo, Juliette. O véu está se rasgando. E você é a única que pode costurá-lo de volta. Ou rasgá-lo de vez."`
  }
];

export const Script: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

  return (
    <section id="roteiro" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary-600/20 rounded-full border border-primary-600/30 animate-glow">
              <Film className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
            Roteiro do Episódio Piloto
          </h2>
          <p className="text-xl text-primary-300 font-serif mb-6">O Véu da Realidade</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
        </div>

        <div className="mb-12 bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-900/20">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Logline</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Uma jovem atormentada por um passado de vícios e uma tentativa de suicídio acorda em uma realidade distorcida, 
            onde vozes enigmáticas e visões sobrenaturais a guiam em uma busca desesperada por significado, revelando 
            seu papel como uma ponte entre mundos e a noiva de uma entidade ancestral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              onClick={() => setSelectedScene(scene)}
              className="group bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm p-6 rounded-xl border border-primary-900/20 hover:border-primary-600/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-600/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5 text-primary-400" />
                  <span className="text-primary-300 font-semibold text-sm">CENA</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{scene.timeOfDay}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-primary-200 transition-colors">
                {scene.title}
              </h3>
              
              <div className="flex items-center text-sm text-primary-400 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {scene.location}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {scene.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-primary-900/20">
                <span className="text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                  Ler Cena Completa →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scene Detail Modal */}
        {selectedScene && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-900/30">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="w-5 h-5 text-primary-400" />
                      <span className="text-primary-300 font-semibold">CENA</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {selectedScene.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedScene.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedScene.timeOfDay}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedScene(null)}
                    className="p-2 hover:bg-primary-600/20 rounded-lg transition-colors text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-lg border border-primary-900/10">
                  <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                    {selectedScene.content}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};