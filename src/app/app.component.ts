import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeckCardComponent } from './deck-card/deck-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { colorId, powerLevelEnum, stageEnum } from './domain';
import { MatListModule } from '@angular/material/list';
import { DecksService } from './helpers/decks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DeckCardComponent,
    MatSidenavModule,
    CommonModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  decks: Observable<any[]>;
  constructor(private ds: DecksService) {
    this.decks = ds.decks$;
    this.decks.forEach(deck => 

      console.log('decks: ', deck)
    )
  }
  title = 'deck_collector';
  TestDecks = [
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
      stage: stageEnum.WiP,
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
      stage: stageEnum.unowned,
      rating: 7,
      powerLevel: powerLevelEnum.highPower,
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
  toDos: string[] = [
    'DONE install Firebase',
    'Make header/top bar',
    'Sorting of decks',
    'Implement Firebase login',
    'Make profile page',
    'Implement Firebase db',
    'Plan db models',
    'Win rate page?',
    'Make Edit/Create modal decks',
    'Setup Scryfall service',
    'Setup Firebase service',
  ];
}
