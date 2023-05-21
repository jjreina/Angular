import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input('characterList')
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(indexCharacter: number): void {
    // console.log(indexCharacter);
    this.onDelete.emit(indexCharacter);
  }
}
