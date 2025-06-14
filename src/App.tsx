import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Synopsis } from './components/Synopsis';
import { Characters } from './components/Characters';
import { Script } from './components/Script';
import { ProductionGuide } from './components/ProductionGuide';
import { Docs } from './components/Docs';
import { Support } from './components/Support';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <Header />
      <Navigation />
      <main>
        <Synopsis />
        <Characters />
        <Script />
        <ProductionGuide />
        <Docs />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;