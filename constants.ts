
import { Phase, ChromosomeType } from './types';

export const MEIOSIS_PHASES: Phase[] = [
  {
    id: 'prophase-i',
    title: 'Prophase I',
    stage: 'Meiosis I',
    description: 'The cell prepares for division. Chromosomes condense and become visible. Homologous chromosomes pair up to form bivalents, and crossing over occurs, exchanging genetic material.',
    visual: {
      cells: [
        {
          chromosomes: [
            { id: 'p1-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '30%', left: '35%', transform: 'rotate(20deg)' }, hasCrossover: true },
            { id: 'p1-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '30%', left: '55%', transform: 'rotate(20deg)' }, hasCrossover: true },
            { id: 'p1-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '60%', left: '40%', transform: 'rotate(-15deg) scale(0.6)' } },
            { id: 'p1-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '60%', left: '50%', transform: 'rotate(-15deg) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'metaphase-i',
    title: 'Metaphase I',
    stage: 'Meiosis I',
    description: 'The paired homologous chromosomes (bivalents) align along the metaphase plate, the center of the cell. Spindle fibers from opposite poles attach to each homologous chromosome.',
    visual: {
      cells: [
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '5%', y: '50%' }, { x: '95%', y: '50%' }],
          chromosomes: [
            { id: 'm1-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '25%', left: '48%', transform: 'translateX(-50%) rotate(90deg)' }, hasCrossover: true },
            { id: 'm1-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '25%', left: '42%', transform: 'translateX(-50%) rotate(90deg)' }, hasCrossover: true },
            { id: 'm1-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '55%', left: '48%', transform: 'translateX(-50%) rotate(90deg) scale(0.6)' } },
            { id: 'm1-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '55%', left: '42%', transform: 'translateX(-50%) rotate(90deg) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'anaphase-i',
    title: 'Anaphase I',
    stage: 'Meiosis I',
    description: 'Spindle fibers shorten, pulling the homologous chromosomes apart. One chromosome from each pair moves to an opposite pole. Sister chromatids remain attached.',
    visual: {
      cells: [
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '5%', y: '50%' }, { x: '95%', y: '50%' }],
          chromosomes: [
            { id: 'a1-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '25%', left: '20%', transform: 'translateX(-50%) rotate(90deg)' }, hasCrossover: true },
            { id: 'a1-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '55%', left: '20%', transform: 'translateX(-50%) rotate(90deg) scale(0.6)' } },
            { id: 'a1-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '25%', left: '80%', transform: 'translateX(-50%) rotate(90deg)' }, hasCrossover: true },
            { id: 'a1-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '55%', left: '80%', transform: 'translateX(-50%) rotate(90deg) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'telophase-i',
    title: 'Telophase I & Cytokinesis',
    stage: 'Meiosis I',
    description: 'Chromosomes arrive at opposite poles. The cytoplasm divides (cytokinesis) to form two new haploid cells. Each chromosome still consists of two sister chromatids.',
    visual: {
      cells: [
        {
          isDividing: true,
          chromosomes: [
            // Left group
            { id: 't1-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '25%', left: '25%', transform: 'rotate(30deg) scale(1)' }, hasCrossover: true },
            { id: 't1-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '55%', left: '25%', transform: 'rotate(-20deg) scale(0.6)' } },
            // Right group
            { id: 't1-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '25%', left: '75%', transform: 'rotate(-30deg) scale(1)' }, hasCrossover: true },
            { id: 't1-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '55%', left: '75%', transform: 'rotate(20deg) scale(0.6)' } },
          ],
        },
      ],
    },
  },
    {
    id: 'prophase-ii',
    title: 'Prophase II',
    stage: 'Meiosis II',
    description: 'The two daughter cells from Meiosis I begin Meiosis II. Chromosomes condense again. There is no further pairing of homologous chromosomes.',
    visual: {
      cells: [
        {
          chromosomes: [
            { id: 'p2-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '30%', left: '50%', transform: 'translateX(-50%) rotate(30deg) scale(1)' }, hasCrossover: true },
            { id: 'p2-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '60%', left: '50%', transform: 'translateX(-50%) rotate(-20deg) scale(0.6)' } },
          ],
        },
        {
          chromosomes: [
            { id: 'p2-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '30%', left: '50%', transform: 'translateX(-50%) rotate(-30deg) scale(1)' }, hasCrossover: true },
            { id: 'p2-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '60%', left: '50%', transform: 'translateX(-50%) rotate(20deg) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'metaphase-ii',
    title: 'Metaphase II',
    stage: 'Meiosis II',
    description: 'Chromosomes in each cell align individually along the metaphase plate. Spindle fibers from opposite poles attach to the sister chromatids of each chromosome.',
    visual: {
      cells: [
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '50%', y: '5%' }, { x: '50%', y: '95%' }],
          chromosomes: [
            { id: 'm2-c1', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '50%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' }, hasCrossover: true },
            { id: 'm2-c3', type: ChromosomeType.SISTER_CHROMATIDS, color: 'blue', style: { top: '50%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
          ],
        },
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '50%', y: '5%' }, { x: '50%', y: '95%' }],
          chromosomes: [
            { id: 'm2-c2', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '50%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' }, hasCrossover: true },
            { id: 'm2-c4', type: ChromosomeType.SISTER_CHROMATIDS, color: 'red', style: { top: '50%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'anaphase-ii',
    title: 'Anaphase II',
    stage: 'Meiosis II',
    description: 'The sister chromatids are pulled apart by the spindle fibers. They move to opposite poles of the cell and are now considered individual chromosomes.',
    visual: {
      cells: [
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '50%', y: '5%' }, { x: '50%', y: '95%' }],
          chromosomes: [
            { id: 'a2-c1a', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '25%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' }, hasCrossover: true },
            { id: 'a2-c3a', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '25%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
            { id: 'a2-c1b', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '75%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' } },
            { id: 'a2-c3b', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '75%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
          ],
        },
        {
          showSpindleFibers: true,
          centrosomes: [{ x: '50%', y: '5%' }, { x: '50%', y: '95%' }],
          chromosomes: [
            { id: 'a2-c2a', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '25%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' } },
            { id: 'a2-c4a', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '25%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
            { id: 'a2-c2b', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '75%', left: '45%', transform: 'translate(-50%,-50%) scale(1)' }, hasCrossover: true },
            { id: 'a2-c4b', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '75%', left: '55%', transform: 'translate(-50%,-50%) scale(0.6)' } },
          ],
        },
      ],
    },
  },
  {
    id: 'telophase-ii',
    title: 'Telophase II & Cytokinesis',
    stage: 'Meiosis II',
    description: 'Chromosomes arrive at opposite poles and decondense. Nuclear envelopes re-form. Cytokinesis divides the cells, resulting in four unique haploid daughter cells.',
    visual: {
      cells: [
        {
          isDividing: true,
          chromosomes: [
            { id: 't2-c1', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '25%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' }, hasCrossover: true },
            { id: 't2-c3', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '20%', left: '50%', transform: 'translate(-50%, -50%) scale(0.6)' } },
            { id: 't2-c2', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '75%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' } },
            { id: 't2-c4', type: ChromosomeType.SINGLE_CHROMATID, color: 'blue', style: { top: '80%', left: '50%', transform: 'translate(-50%, -50%) scale(0.6)' } },
          ],
        },
        {
          isDividing: true,
          chromosomes: [
            { id: 't2-c5', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '25%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' } },
            { id: 't2-c6', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '20%', left: '50%', transform: 'translate(-50%, -50%) scale(0.6)' } },
            { id: 't2-c7', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '75%', left: '50%', transform: 'translate(-50%, -50%) scale(1)' }, hasCrossover: true },
            { id: 't2-c8', type: ChromosomeType.SINGLE_CHROMATID, color: 'red', style: { top: '80%', left: '50%', transform: 'translate(-50%, -50%) scale(0.6)' } },
          ],
        }
      ],
    },
  }
];
