import { Component, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Deck } from '../domain';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommonModule],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.css',
})
export class DeckCardComponent {
  readonly panelOpenState = signal(false);
  @Input() deck!: Deck;
}
