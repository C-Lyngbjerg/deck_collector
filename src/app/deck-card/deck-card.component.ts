import { Component, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Deck, iconVisual, powerLevelVisuals, stageVisuals } from '../domain';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommonModule, MatTooltipModule],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.css',
})
export class DeckCardComponent {
  readonly panelOpenState = signal(false);
  @Input() deck!: Deck;
  powerLevelVisuals: Record<number, iconVisual> = powerLevelVisuals;
  stageVisuals: Record<number, iconVisual> = stageVisuals;
}
