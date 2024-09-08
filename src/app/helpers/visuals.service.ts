import { Injectable } from '@angular/core';
import { Deck } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class VisualsService {
  constructor() {}

  public static getIconsAndTooltip(deck: Deck, visual: visualType): iconVisual {
    switch (visual) {
      case visualType.powerLevel:
        return powerLevelVisuals[deck.powerLevel];
      case visualType.stage:
        return stageVisuals[deck.stage];
    }
  }
  public static getArtCrop(deck: Deck) {}
}
export enum visualType {
  powerLevel,
  stage,
}

export interface iconVisual {
  iconName: string;
  tooltip: string;
}

export const powerLevelVisuals: Record<number, iconVisual> = {
  0: { iconName: 'radio-button-unchecked', tooltip: 'Low to mid power' },
  1: { iconName: 'radio-button-partial', tooltip: 'mid to optimized' },
  2: { iconName: 'radio-button-checked', tooltip: 'high power' },
  3: { iconName: 'bolt', tooltip: 'cEDH' },
};

export const stageVisuals: Record<number, iconVisual> = {
  0: { iconName: 'build-circle', tooltip: 'Theorycrafting' },
  1: { iconName: 'add-circle', tooltip: 'Unowned' },
  2: { iconName: 'check-circle', tooltip: 'Built' },
  3: { iconName: 'pending', tooltip: 'Work in progress' },
};
