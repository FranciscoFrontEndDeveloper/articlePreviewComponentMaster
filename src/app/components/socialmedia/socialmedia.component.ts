import { Component } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.sass'],
})
export class SocialmediaComponent {
  mensajePrueba: string = 'pruebas';
  pruebaOuput(mensaje: any) {

    this.mensajePrueba = mensaje;

  }
}
