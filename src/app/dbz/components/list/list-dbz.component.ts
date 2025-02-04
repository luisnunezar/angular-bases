import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css',
  standalone: false
})
export class ListDBZComponent {
  
  @Input()
  public CharacterList: Character[] = [{
    id: '',
    name: 'noname',
    power: 0
  }];

   @Output()
    public onDeleteCharacterByIndex: EventEmitter<number> = new EventEmitter();

    @Output()
    public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterByIx(index:number):void {
    this.onDeleteCharacterByIndex.emit(index);
  }

  deleteCharacterById(id:string):void {
    debugger;
    if (!id) return;
    this.onDeleteCharacterById.emit(id);
  }
}
