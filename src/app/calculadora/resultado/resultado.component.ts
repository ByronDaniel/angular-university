import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  @Input() inSum:number = 0;
  @Input() inRes:number = 0;
  @Input() inMult:number = 0;
  @Input() inDiv: number = 0;
  @Input() inMostrarResultado : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
