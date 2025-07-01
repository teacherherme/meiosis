
import React from 'react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H15a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const Navigation: React.FC<NavigationProps> = ({ onPrevious, onNext, isFirst, isLast }) => {
  const baseButtonClasses = "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const enabledButtonClasses = "bg-sky-600 hover:bg-sky-700 focus:ring-sky-500";
  const disabledButtonClasses = "bg-gray-400 cursor-not-allowed";

  return (
    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirst}
        className={`${baseButtonClasses} ${isFirst ? disabledButtonClasses : enabledButtonClasses}`}
        aria-label="Go to previous phase"
      >
        <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" />
        Previous Phase
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        className={`${baseButtonClasses} ${isLast ? disabledButtonClasses : enabledButtonClasses}`}
        aria-label="Go to next phase"
      >
        Next Phase
        <ArrowRightIcon className="-mr-1 ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default Navigation;
