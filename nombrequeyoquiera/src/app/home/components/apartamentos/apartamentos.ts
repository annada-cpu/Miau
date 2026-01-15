import { Component, signal } from '@angular/core';
import { GalleryItem, NombreDelComponente } from '../nombre-del-componente/nombre-del-componente';
import { Title } from '../../../shared/title';


@Component({
  selector: 'app-apartamentos',
  imports: [NombreDelComponente, Title],
  templateUrl: './apartamentos.html',
  styleUrl: './apartamentos.scss',
})
export class Apartamentos {
  galleryItems = signal<GalleryItem[]>([
    {
      title: 'ALQUILER TEMPORAL',
      subtitle: 'a partir de 32 días hasta 11 meses',
      description: 'Pisos amueblados y equipados con wifi incluido',
      backgroundImage: 'assets/photo1-1.png',
      link: 'http://locabarcelona.com'
    },
    {
      title: 'ALQUILER DE HABITACIONES',
      subtitle: 'a partir de 32 días hasta 11 meses',
      description: 'Habitaciones y apartamentos totalmente equipados',
      backgroundImage: 'assets/rooms-1.png',
      link: 'http://locabarcelona.com',
      extraClasses: 'casas'
    },
    {
      title: 'ALQUILER TURÍSTICO',
      subtitle: 'a partir de 3 noches',
      description: 'Pisos amueblados y equipados con wifi incluido',
      backgroundImage: 'assets/photo2-1.png',
      link: 'http://locabarcelona.com',
      extraClasses: 'turismo'
    },
    {
      title: 'ALQUILER LARGA ESTANCIA',
      subtitle: 'contratos de 5/7 años',
      description: 'Pisos amueblados y equipados con wifi incluido',
      backgroundImage: 'assets/photo3-1.png',
      link: 'http://locabarcelona.com',
      extraClasses: 'temporal'
    },
    {
      title: 'VENTA',
      subtitle: 'bienes para vivir o inversión',
      description: 'Pisos amueblados y equipados con wifi incluido',
      backgroundImage: 'assets/photo4-1.png',
      link: 'http://locabarcelona.com',
      extraClasses: 'larga'
    }
  ]);
}
