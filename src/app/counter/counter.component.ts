import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter:number = 0;

  incrementar(value:number):void { this.counter  += value; }

  decrementar(value:number):void { this.counter  -= value; }
  
  resetear():void { this.counter  = 0; }
}
