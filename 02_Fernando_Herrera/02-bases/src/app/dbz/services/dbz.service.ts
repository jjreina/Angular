import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(newCharacter: Character): void {
    console.log(newCharacter.name, newCharacter.power);
    this.characters.push(newCharacter);
  }

  onDeleteCharacer(indexCharacter: number): void {
    this.characters.splice(indexCharacter, 1);
  }
}
