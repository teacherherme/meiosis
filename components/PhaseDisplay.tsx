
import React from 'react';
import { Phase } from '../types';
import MeiosisVisual from './MeiosisVisual';

interface PhaseDisplayProps {
  phase: Phase;
}

const PhaseDisplay: React.FC<PhaseDisplayProps> = ({ phase }) => {
  return (
    <>
      <div className="lg:col-span-1">
        <MeiosisVisual phase={phase} />
      </div>
      <div className="lg:col-span-1 flex flex-col justify-center">
        <div className="bg-sky-100 text-sky-800 text-sm font-semibold inline-block px-3 py-1 rounded-full mb-3 self-start">
          {phase.stage}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{phase.title}</h2>
        <p className="text-gray-600 leading-relaxed text-base">{phase.description}</p>
      </div>
    </>
  );
};

export default PhaseDisplay;
