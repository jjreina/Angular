import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    console.log(this.character);
  }
}
