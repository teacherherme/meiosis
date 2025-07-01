
import React from 'react';
import { Phase } from '../types';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
  phases: Phase[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, onStepClick, phases }) => {
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8">
      <div className="relative h-2 w-full bg-gray-200 rounded-full">
        <div 
          className="absolute top-0 left-0 h-full bg-sky-500 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const phase = phases[index];
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <div key={index} className="relative flex flex-col items-center">
                <button
                  onClick={() => onStepClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ease-out flex items-center justify-center
                    ${isCurrent ? 'bg-sky-600 ring-4 ring-sky-200' : ''}
                    ${isCompleted ? 'bg-sky-500' : 'bg-gray-300'}
                    hover:bg-sky-400
                  `}
                  aria-label={`Go to ${phase.title}`}
                />
                <span className={`absolute top-6 text-center text-xs font-medium w-24
                  ${isCurrent ? 'text-sky-700 font-bold' : 'text-gray-500'}
                `}>
                  {phase.title.replace(' & Cytokinesis', '')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
