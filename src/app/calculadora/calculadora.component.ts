import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  sum: number= 0;
  div: number = 0;
  res: number = 0;
  mult:number = 0;
  mostrarResultado: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
