import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  mensajePrueba: string = 'pruebas';
  pruebaOuput(mensaje: any) {
    this.mensajePrueba = mensaje;
  }
}
