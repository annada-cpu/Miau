import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export interface GalleryItem {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  link: string;
  extraClasses?: string;
}

@Component({
  selector: 'app-banner',
  imports: [NgClass],
  templateUrl: './nombre-del-componente.html',
  styleUrl: './nombre-del-componente.scss',
})
export class NombreDelComponente {

   item = input.required<GalleryItem>();

   numero = input.required<number>();

}
