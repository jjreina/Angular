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
      id: '',
      name: 'Trunk',
      power: 10000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (id) {
      this.onDelete.emit(id);
    }
  }
}
