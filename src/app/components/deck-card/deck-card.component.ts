import { Component, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { deck } from '../../shared/domain';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  iconVisual,
  VisualsHelper as vs,
  visualType,
} from '../../shared/helpers/visuals-helper.service';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommonModule, MatTooltipModule],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.css',
})
export class DeckCardComponent {
  readonly panelOpenState = signal(false);
  @Input() deck!: deck;
  stageVisuals!: iconVisual;
  powerLevelVisuals!: iconVisual;

  ngOnInit() {
    this.powerLevelVisuals = vs.getIconsAndTooltip(
      this.deck,
      visualType.powerLevel
    );
    this.stageVisuals = vs.getIconsAndTooltip(this.deck, visualType.stage);
  }
}
