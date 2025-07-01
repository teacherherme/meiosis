
import React from 'react';
import { ChromosomeProps, ChromosomeType } from '../types';

const Chromosome: React.FC<ChromosomeProps> = ({ type, color, style, hasCrossover }) => {
  const primary = color === 'blue' ? '#3b82f6' : '#ef4444'; // blue-500, red-500
  const secondary = color === 'blue' ? '#ef4444' : '#3b82f6';

  const Chromatid = ({ rotation, crossover }: { rotation: number; crossover?: boolean }) => (
    <g transform={`rotate(${rotation} 0 0)`}>
      <path
        d="M 0 -20 C 3 -10, 3 10, 0 20 L 0 20 C -3 10, -3 -10, 0 -20 Z"
        fill={primary}
        stroke="#2d3748"
        strokeWidth="0.5"
      />
      {crossover && <path
        d="M 0 15 C 3 12, 3 12, 0 20 L 0 20 C -3 12, -3 12, 0 15 Z"
        fill={secondary}
      />}
    </g>
  );

  const SingleChromatid = ({ crossover }: { crossover?: boolean }) => (
     <g>
      <path
        d="M 0 -20 C 4 -10, 4 10, 0 20 L 0 20 C -4 10, -4 -10, 0 -20 Z"
        fill={primary}
        stroke="#2d3748"
        strokeWidth="0.5"
        transform="scale(0.5 1)"
      />
      {crossover && <path
        d="M 0 15 C 4 12, 4 12, 0 20 L 0 20 C -4 12, -4 12, 0 15 Z"
        fill={secondary}
        transform="scale(0.5 1)"
      />}
    </g>
  );

  const centromere = <circle cx="0" cy="0" r="3" fill={primary} stroke="#2d3748" strokeWidth="0.5" />;
  
  return (
    <div className="absolute" style={style}>
      <svg width="60" height="60" viewBox="-30 -30 60 60" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))', overflow: 'visible' }}>
        {type === ChromosomeType.SISTER_CHROMATIDS ? (
          <g>
            <Chromatid rotation={-20} crossover={hasCrossover} />
            <Chromatid rotation={20} />
            {centromere}
          </g>
        ) : (
          <SingleChromatid crossover={hasCrossover}/>
        )}
      </svg>
    </div>
  );
};

export default Chromosome;
