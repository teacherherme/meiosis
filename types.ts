
export enum ChromosomeType {
  SISTER_CHROMATIDS, // 'X' shape
  SINGLE_CHROMATID,  // 'I' shape
}

export interface ChromosomeProps {
  id: string;
  type: ChromosomeType;
  color: 'red' | 'blue';
  style: React.CSSProperties;
  hasCrossover?: boolean;
}

export interface CellProps {
  chromosomes: ChromosomeProps[];
  isDividing?: boolean;
  showSpindleFibers?: boolean;
  centrosomes?: { x: string; y: string }[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  stage: 'Meiosis I' | 'Meiosis II';
  visual: {
    cells: CellProps[];
  };
}
