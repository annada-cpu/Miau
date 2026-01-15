import { Component, signal } from '@angular/core';
import { Title } from '../../../shared/title';

interface Property {
  title: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-new-properties',
  imports: [Title],
  templateUrl: './new-properties.html',
  styleUrl: './new-properties.scss',
})
export class NewProperties {
  header = signal('NEW PROPERTIES');
  subtitle = signal('para descubrir sin demora');

  properties = signal<Property[]>([
    {
      title: 'Pisos en venta Barcelona',
      image: '/np1.jpg',
      description: 'Barcelona CIUTAT VELLA 60m²',
      price: '452.000€'
    },
    {
      title: 'Pisos en venta Barcelona',
      image: '/np2.jpg',
      description: 'Barcelona POBLE SEC 2 habitaciones - 78m²',
      price: '438.000€'
    },
    {
      title: 'Alquiler temporal',
      image: '/np3.jpg',
      description: 'Barcelona L\'ANTIGA ESQUERRA DE L\'EIXAMPLE 2 habitaciones - 60m²',
      price: '1795€'
    }
  ]);
}
