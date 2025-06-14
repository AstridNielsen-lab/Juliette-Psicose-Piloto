import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sinopse');

  const menuItems = [
    { id: 'sinopse', label: 'Sinopse' },
    { id: 'personagens', label: 'Personagens' },
    { id: 'roteiro', label: 'Roteiro Piloto' },
    { id: 'guia', label: 'Guia de Produção' },
    { id: 'docs', label: 'Documentação' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-primary-900/20">
      <div className="container mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-4">
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary-600/20 text-primary-300 shadow-lg shadow-primary-600/20'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-primary-600/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-4">
          <span className="text-primary-300 font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-primary-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark-800 rounded-lg mb-4 overflow-hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-6 py-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary-600/20 text-primary-300'
                    : 'text-gray-300 hover:bg-primary-600/10 hover:text-primary-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};