import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'universidad-angular';
  num1:number  = 5;
  num2:number = 10;
  resultado:number = this.sumar(this.num1,this.num2);
  saludo:string = 'hola';

  sumar(x:number,y:number){
    return x + y;
  }
}
