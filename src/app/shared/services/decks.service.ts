import { inject, Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { collection, Firestore } from'@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  decks$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const aCollection = collection(this.firestore, 'decks');
    this.decks$ = collectionData(aCollection);
  }
}
