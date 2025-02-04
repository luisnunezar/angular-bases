import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Ironman','Spiderman','Hulk','Thor'];
  public heroeBorrado?:string;

  borrarUltimoHeroe():void {
    this.heroeBorrado = this.heroNames.pop();
  }
}
