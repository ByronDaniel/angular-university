import { Component } from "@angular/core";


@Component({
    selector: 'app-personas',
    templateUrl: 'personas.component.html',
    styleUrls: ['personas.component.css']
})
export class PersonasComponent{
    deshabilitar:boolean = false;
    mensaje:string = 'No se ha agregado ninguna persona';
    titulo:string = '';
    numero1:number = 5;
    texto:string = 'Ingeniero';
    constructor(){
       
    }
    agregarPersona(){
        this.deshabilitar = true;
        this.mensaje = 'Persona Agregada!';

        setTimeout(()=>{
            this.deshabilitar = false;
            this.mensaje = 'No se ha agregado ninguna persona';
        },2000);
    }
    modificarTitulo(event:Event){
        this.titulo = (<HTMLInputElement>event.target).value;
        
    }
}