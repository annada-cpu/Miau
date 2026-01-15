import { Component, signal } from '@angular/core';
import { Title } from '../../../shared/title';

@Component({
  selector: 'app-servicios',
  imports: [Title],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  title = signal('Servicios a los propietarios');
  description = signal(`Ser propietario de un inmueble de alquiler te proporciona una rentabilidad mensual. Aunque lucrativa, esta operación conlleva numerosos condicionantes que requieren conocimientos fiscales, jurídicos, administrativos y comerciales del sector inmobiliario.

LOCA BARCELONA te guiará en cada paso del proceso y te asegurará de que tu proyecto sea rentable en su óptimo valor.`);
}
