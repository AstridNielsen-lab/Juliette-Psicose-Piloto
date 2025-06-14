import React from 'react';
import { Download, FileText, File, BookOpen } from 'lucide-react';

interface DocItem {
  name: string;
  filename: string;
  type: 'pdf' | 'md' | 'txt';
  description: string;
}

const docItems: DocItem[] = [
  {
    name: 'Roteiro do Episódio Piloto',
    filename: 'Roteiro do Episódio Piloto_ Juliette Psicose - A Noiva da Morte.md',
    type: 'md',
    description: 'Roteiro completo do episódio piloto da série'
  },
  {
    name: 'Desenvolvimento de Personagens',
    filename: 'Desenvolvimento de Personagens e Narrativa para _Juliette Psicose_ A Noiva da Morte_.md',
    type: 'md',
    description: 'Análise detalhada dos personagens e narrativa'
  },
  {
    name: 'Guia de Produção',
    filename: 'guia_producao.pdf',
    type: 'pdf',
    description: 'Guia completo para produção da série'
  },
  {
    name: 'Guia de Produção (Texto)',
    filename: 'guia_producao.md',
    type: 'md',
    description: 'Versão em markdown do guia de produção'
  },
  {
    name: 'Script Original',
    filename: 'JuliettePsicose.txt',
    type: 'txt',
    description: 'Script original em formato texto'
  },
  {
    name: 'Documento Principal',
    filename: 'CópiadeJuliettePsicoseEncontre-me.pdf',
    type: 'pdf',
    description: 'Documento principal do projeto'
  },
  {
    name: 'Lista de Tarefas',
    filename: 'todo.md',
    type: 'md',
    description: 'Lista de tarefas pendentes do projeto'
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <File className="w-6 h-6 text-red-400" />;
    case 'md':
      return <BookOpen className="w-6 h-6 text-blue-400" />;
    case 'txt':
      return <FileText className="w-6 h-6 text-green-400" />;
    default:
      return <File className="w-6 h-6 text-gray-400" />;
  }
};

export const Docs: React.FC = () => {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/docs/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <section id="docs" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentação
            <span className="text-primary-400"> do Projeto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acesse todos os documentos utilizados no desenvolvimento de Juliette Psicose.
            Inclui roteiros, guias de produção, desenvolvimento de personagens e mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docItems.map((doc, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm border border-primary-900/20 rounded-xl p-6 hover:border-primary-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getFileIcon(doc.type)}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {doc.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-primary-400 font-medium">
                      {doc.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                {doc.description}
              </p>
              
              <button
                onClick={() => handleDownload(doc.filename)}
                className="w-full bg-primary-600/20 hover:bg-primary-600/30 border border-primary-600/40 text-primary-300 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-600/20"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-dark-800/30 border border-primary-900/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Sobre os Documentos
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Esta coleção de documentos representa todo o trabalho de desenvolvimento
              criativo e técnico por trás de Juliette Psicose. Desde o roteiro original
              até os guias de produção detalhados, cada arquivo contribui para a visão
              completa desta série de terror psicológico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

