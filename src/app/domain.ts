export interface Deck {
  id: string;
  ownerId: string;
  name: string;
  commander: Commander;
  stage: stageEnum;
  rating: number;
  powerLevel: powerLevelEnum;
  description: string;
  primer: string;
  deckLink: string;
  scryfallQuery: string;
  tags: string[];
  edits: edit[];
}

export interface edit {
  type: typeEditEnum;
  note: string;
}

export enum typeEditEnum {
  Add,
  Remove,
  Note,
}

export interface Commander {
  name: string;
  colorId: identity;
  manaCost: string;
  power: number;
  toughness: number;
}

export enum stageEnum {
  theoryCrafting,
  unowned,
  built,
  WiP,
}

export const stageVisuals: Record<number, iconVisual> = {
  0: { iconName: 'build-circle', tooltip: 'Theorycrafting' },
  1: { iconName: 'add-circle', tooltip: 'Unowned' },
  2: { iconName: 'check-circle', tooltip: 'Built' },
  3: { iconName: 'pending', tooltip: 'Work in progress' },
};

export enum powerLevelEnum {
  lowMid,
  midOptimized,
  highPower,
  cEDH,
}

export const powerLevelVisuals: Record<number, iconVisual> = {
  0: { iconName: 'radio-button-unchecked', tooltip: 'Low to mid power' },
  1: { iconName: 'radio-button-partial', tooltip: 'mid to optimized' },
  2: { iconName: 'radio-button-checked', tooltip: 'high power' },
  3: { iconName: 'bolt', tooltip: 'cEDH' },
};

export interface iconVisual {
  iconName: string;
  tooltip: string;
}

// chat icon for tags

export const colorId: Record<string, identity> = {
  Colorless: {
    name: 'Colorless',
    colors: 'c',
    bgColors: ['light-grey', 'grey'],
  },
  White: {
    name: 'White',
    colors: 'W',
    bgColors: ['white'],
  },
  Jund: {
    name: 'Jund',
    colors: 'B R G',
    bgColors: ['black', 'red', 'green'],
  },
  Temur: {
    name: 'Temur',
    colors: 'U R G',
    bgColors: ['blue', 'red', 'green'],
  },
  Simic: {
    name: 'Simic',
    colors: 'U G',
    bgColors: ['blue', 'green'],
  },
};

export interface identity {
  name: string;
  colors: string;
  bgColors: string[];
}

export const TestData: Deck[] = [
  {
    id: '1',
    ownerId: '1',
    name: 'Henzie big stuff',
    commander: {
      name: 'Henzie "Toolbox" Torres',
      colorId: colorId['Jund'],
      manaCost: 'BRG',
      power: 3,
      toughness: 3,
    },
    stage: stageEnum.built,
    rating: 9,
    powerLevel: powerLevelEnum.midOptimized,
    description: 'description',
    primer: 'primer',
    deckLink: 'deckLink',
    scryfallQuery: 'scryfallQuery',
    tags: ['big stuff', 'recursion', ''],
    edits: [],
  },
  {
    id: '2',
    ownerId: '2',
    name: 'Snakey Group Hug',
    commander: {
      name: 'Xyris',
      colorId: colorId['Temur'],
      manaCost: '2URG',
      power: 3,
      toughness: 4,
    },
    stage: stageEnum.built,
    rating: 9,
    powerLevel: powerLevelEnum.lowMid,
    description: 'description',
    primer: 'primer',
    deckLink: 'deckLink',
    scryfallQuery: 'scryfallQuery',
    tags: ['big stuff', 'recursion', ''],
    edits: [],
  },
  {
    id: '3',
    ownerId: '3',
    name: 'Small stuff tribal',
    commander: {
      name: 'Delney, Streetwise Urchin',
      colorId: colorId['White'],
      manaCost: '2W',
      power: 2,
      toughness: 2,
    },
    stage: stageEnum.built,
    rating: 7,
    powerLevel: powerLevelEnum.midOptimized,
    description: 'description',
    primer: 'primer',
    deckLink: 'deckLink',
    scryfallQuery: 'scryfallQuery',
    tags: ['life gain', 'go wide'],
    edits: [],
  },
  {
    id: '4',
    ownerId: '4',
    name: 'Kinnan cEDH',
    commander: {
      name: 'Kinnan, Bonder Prodigy',
      colorId: colorId['Simic'],
      manaCost: 'UB',
      power: 2,
      toughness: 2,
    },
    stage: stageEnum.theoryCrafting,
    rating: 6,
    powerLevel: powerLevelEnum.cEDH,
    description: 'description',
    primer: 'primer',
    deckLink: 'deckLink',
    scryfallQuery: 'scryfallQuery',
    tags: ['big mana', 'cEDH', 'combo'],
    edits: [],
  },
];
