import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora-form',
  templateUrl: './calculadora-form.component.html',
  styleUrls: ['./calculadora-form.component.css']
})
export class CalculadoraFormComponent implements OnInit {
  numero1:number = 0;
  numero2:number = 0;
  suma:number = 0;
  resta:number = 0;
  mult:number = 0;
  div:number = 0;
  @Output() outSum = new EventEmitter<number>();
  @Output() outRes = new EventEmitter<number>();
  @Output() outMult = new EventEmitter<number>();
  @Output() outDiv = new EventEmitter<number>();
  @Output() outMostrarResultado = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }
  calcular(){
    if(this.numero1 != 0){
      this.outMostrarResultado.emit(true);
    }else{
      this.outMostrarResultado.emit(false);
    }
    this.suma = this.numero1 + this.numero2;
    this.outSum.emit(this.suma);
    this.resta = this.numero1 - this.numero2;
    this.outRes.emit(this.resta);
    this.mult = this.numero1 * this.numero2;
    this.outMult.emit(this.mult);
    this.div = this.numero1 / this.numero2;
    this.outDiv.emit(this.div);
  }
}
