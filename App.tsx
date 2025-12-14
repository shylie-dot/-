import React, { useState } from 'react';
import SceneContainer from './components/SceneContainer';
import { TreeState } from './types';
import { PlayIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.SCATTERED);

  const toggleState = () => {
    setTreeState((prev) => 
      prev === TreeState.TREE_SHAPE ? TreeState.SCATTERED : TreeState.TREE_SHAPE
    );
  };

  return (
    <div className="relative w-full h-screen bg-arix-dark overflow-hidden text-white">
      {/* Background/Scene Layer */}
      <div className="absolute inset-0 z-0">
        <SceneContainer treeState={treeState} />
      </div>

      {/* UI Overlay Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12">
        
        {/* Header */}
        <header className="flex flex-col items-center md:items-start space-y-2 animate-fade-in-down">
          <div className="bg-black/30 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
            <span className="text-xs uppercase tracking-[0.2em] text-arix-goldLight">Winter 2025</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-arix-goldLight to-arix-gold drop-shadow-lg leading-tight">
            Merry Christmas
          </h1>
          <p className="font-serif italic text-lg md:text-2xl text-gray-200 max-w-md text-center md:text-left tracking-wide">
            To my girl
          </p>
        </header>

        {/* Footer Controls */}
        <footer className="flex flex-col items-center pb-8 pointer-events-auto">
          <button 
            onClick={toggleState}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-arix-emerald to-emerald-900 rounded-full shadow-[0_0_30px_rgba(4,99,7,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] border border-arix-gold/20"
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            
            {treeState === TreeState.SCATTERED ? (
              <>
                <PlayIcon className="w-6 h-6 text-arix-goldLight" />
                <span className="font-serif text-xl tracking-wider text-white">Assemble</span>
              </>
            ) : (
              <>
                <ArrowPathIcon className="w-6 h-6 text-arix-goldLight animate-spin-slow" />
                <span className="font-serif text-xl tracking-wider text-white">Scatter</span>
              </>
            )}
          </button>
          
          <div className="mt-6 flex gap-4 text-xs tracking-widest text-white/30 font-sans uppercase">
            <span>High Fidelity</span>
            <span>•</span>
            <span>Real-time WebGL</span>
            <span>•</span>
            <span>React 18</span>
          </div>
        </footer>
      </div>

      {/* Vignette Overlay for UI depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/50" />
    </div>
  );
};

export default App;