
import React, { useState, useCallback } from 'react';
import { MEIOSIS_PHASES } from './constants';
import PhaseDisplay from './components/PhaseDisplay';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';

const App: React.FC = () => {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const totalPhases = MEIOSIS_PHASES.length;
  const currentPhase = MEIOSIS_PHASES[currentPhaseIndex];

  const handleNextPhase = useCallback(() => {
    setCurrentPhaseIndex((prevIndex) => Math.min(prevIndex + 1, totalPhases - 1));
  }, [totalPhases]);

  const handlePreviousPhase = useCallback(() => {
    setCurrentPhaseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);
  
  const handlePhaseSelect = useCallback((index: number) => {
    if (index >= 0 && index < totalPhases) {
        setCurrentPhaseIndex(index);
    }
  }, [totalPhases]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-700">Interactive Meiosis Simulator</h1>
          <p className="text-lg text-gray-600 mt-2">Follow the journey of a cell through the stages of meiotic division.</p>
        </header>
        
        <main className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-200">
          <ProgressBar
            currentStep={currentPhaseIndex}
            totalSteps={totalPhases}
            onStepClick={handlePhaseSelect}
            phases={MEIOSIS_PHASES}
          />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
             <PhaseDisplay phase={currentPhase} />
          </div>
          <Navigation
            onPrevious={handlePreviousPhase}
            onNext={handleNextPhase}
            isFirst={currentPhaseIndex === 0}
            isLast={currentPhaseIndex === totalPhases - 1}
          />
        </main>
        
        <footer className="text-center mt-8 text-sm text-gray-500">
            <p>Built for educational purposes. © {new Date().getFullYear()} Meiosis Simulator</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
