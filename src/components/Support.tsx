import React, { useState } from 'react';
import { Heart, Copy, Check, ExternalLink, Book, Music, Facebook, User } from 'lucide-react';

interface DonationMethod {
  name: string;
  address: string;
  icon: string;
  color: string;
}

interface ExternalLink {
  name: string;
  url: string;
  icon: any;
  description: string;
  color: string;
}

const donationMethods: DonationMethod[] = [
  {
    name: 'PIX/PayPal',
    address: 'radiotatuapefm@gmail.com',
    icon: '💳',
    color: 'from-blue-600 to-purple-600'
  },
  {
    name: 'Bitcoin',
    address: 'bc1qmjf00jqttk2kgemxtxh0hv4xp8fqztnn23cuc2',
    icon: '₿',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Ethereum',
    address: '0x7481B4591e7f0DFAD23b884E78C46F0c207a3E35',
    icon: 'Ξ',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Litecoin',
    address: 'ltc1qxytts52mykr2u83x6ghwllmu7d524ltt702mcc',
    icon: 'Ł',
    color: 'from-gray-500 to-gray-600'
  }
];

const externalLinks: ExternalLink[] = [
  {
    name: 'Livro na Amazon',
    url: 'https://www.amazon.com.br/Juliette-Psicose/dp/B0CLKWDQNJ',
    icon: Book,
    description: 'Adquira o livro oficial de Juliette Psicose',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    name: 'Trilha Sonora',
    url: 'https://youtube.com/playlist?list=PLkm4QB9CKklpa5tej_S5yL-VM59O7mshE&si=kpI96dnK3Amredod',
    icon: Music,
    description: 'Ouça a playlist "Voices of The Forgotten" no YouTube',
    color: 'from-red-600 to-pink-600'
  },
  {
    name: 'Conteúdos do Projeto',
    url: 'https://linktr.ee/juliette.psicose',
    icon: ExternalLink,
    description: 'Acompanhe o desenvolvimento e novidades',
    color: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Portfolio do Autor',
    url: 'https://linktr.ee/juliocamposmachado',
    icon: User,
    description: 'Conheça mais trabalhos de Julio Campos Machado',
    color: 'from-indigo-600 to-blue-600'
  },
  {
    name: 'Facebook Oficial',
    url: 'https://www.facebook.com/Juliette.Psicose',
    icon: Facebook,
    description: 'Siga nossa página oficial no Facebook',
    color: 'from-blue-700 to-blue-800'
  }
];

export const Support: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = async (address: string, methodName: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(methodName);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="support" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💰 Como
            <span className="text-primary-400"> Contribuir</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Qualquer valor doado ajuda a educar novos desenvolvedores em tecnologia!
            Seu apoio é fundamental para continuarmos criando conteúdo de qualidade.
          </p>
        </div>

        {/* Donation Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            💳 Formas de Doação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {donationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 hover:border-primary-600/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-xl font-bold`}>
                      {method.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {method.name}
                    </h4>
                  </div>
                </div>
                
                <div className="bg-dark-900/50 rounded-lg p-3 mb-4">
                  <p className="text-gray-300 text-sm font-mono break-all">
                    {method.address}
                  </p>
                </div>
                
                <button
                  onClick={() => copyToClipboard(method.address, method.name)}
                  className="w-full bg-primary-600/20 hover:bg-primary-600/30 border border-primary-600/40 text-primary-300 py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {copiedAddress === method.name ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            🔗 Links Importantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800/50 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 hover:border-primary-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">
                        {link.name}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm">
                    {link.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center">
          <div className="bg-dark-800/30 border border-primary-900/20 rounded-xl p-8 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Obrigado pelo seu apoio!
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Cada contribuição, por menor que seja, faz a diferença em nossa missão
              de educar e compartilhar conhecimento com a comunidade de desenvolvedores.
              Juntos, construímos um futuro melhor através da tecnologia e criatividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

