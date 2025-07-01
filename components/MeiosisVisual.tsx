
import React from 'react';
import { CellProps, Phase } from '../types';
import Chromosome from './Chromosome';

interface MeiosisVisualProps {
  phase: Phase;
}

const SpindleFibers: React.FC<{ cell: CellProps }> = ({ cell }) => {
  if (!cell.showSpindleFibers || !cell.centrosomes) return null;

  const chromosomeAttachmentPoints = cell.chromosomes.map(c => {
    const top = parseFloat((c.style.top as string).replace('%', ''));
    const left = parseFloat((c.style.left as string).replace('%', ''));
    return { x: left, y: top };
  });

  return (
    <svg width="100%" height="100%" className="absolute top-0 left-0 overflow-visible z-0">
      {cell.centrosomes.map((centrosome, i) => (
        <g key={`centrosome-${i}`}>
          <circle cx={centrosome.x} cy={centrosome.y} r="8" fill="gold" stroke="orange" strokeWidth="2" />
          {chromosomeAttachmentPoints.map((point, j) => (
            <line 
              key={`fiber-${i}-${j}`}
              x1={centrosome.x} 
              y1={centrosome.y} 
              x2={`${point.x}%`} 
              y2={`${point.y}%`} 
              stroke="rgba(255, 215, 0, 0.4)" 
              strokeWidth="1.5" 
              strokeDasharray="3 3"
            />
          ))}
        </g>
      ))}
    </svg>
  );
};


const Cell: React.FC<{ children: React.ReactNode, cellProps: CellProps, cellCount: number }> = ({ children, cellProps, cellCount }) => {
    const { isDividing } = cellProps;
    
    const bgGradient = "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-50 to-sky-200";
    const baseClasses = `relative w-full h-full border-2 border-sky-300 ${bgGradient}`;
    
    let shapeClasses = "rounded-full";
    let containerClasses = "w-full h-full flex items-center justify-center";
    let transformClasses = "";

    if (isDividing) {
      if (cellCount === 1) { // Telophase I - horizontal division
        transformClasses = "scale-x-150 scale-y-90";
      } else { // Telophase II - vertical division
        transformClasses = "scale-y-150 scale-x-90";
      }
    }
    
    // Layout for 2 cells (Prophase II onwards)
    if (cellCount === 2) {
      containerClasses = "w-1/2 h-full flex items-center justify-center p-2";
    }

    return (
        <div className={containerClasses}>
            <div className={`${baseClasses} ${shapeClasses} ${transformClasses} transition-transform duration-500`}>
                <SpindleFibers cell={cellProps} />
                <div className="relative w-full h-full z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};


const MeiosisVisual: React.FC<MeiosisVisualProps> = ({ phase }) => {
  const cellCount = phase.visual.cells.length;

  const getContainerClasses = () => {
    if (cellCount === 1) return "flex justify-center items-center";
    return "flex justify-around items-center";
  }

  return (
    <div className={`w-full h-[350px] sm:h-[450px] bg-gray-50 rounded-xl p-4 flex items-center justify-center`}>
        <div className={`w-full h-full ${getContainerClasses()}`}>
        {phase.visual.cells.map((cell, index) => (
            <Cell key={index} cellProps={cell} cellCount={cellCount}>
              {cell.chromosomes.map((chromo) => (
                  <Chromosome key={chromo.id} {...chromo} />
              ))}
            </Cell>
        ))}
        </div>
    </div>
  );
};

export default MeiosisVisual;
