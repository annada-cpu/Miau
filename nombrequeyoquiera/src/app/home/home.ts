import { Component, signal } from '@angular/core';
import { Apartamentos } from './components/apartamentos/apartamentos';
import { Whoami } from './components/whoami/whoami';
import { NewProperties } from './components/new-properties/new-properties';
import { Video } from './components/video/video';
import { Servicios } from './components/servicios/servicios';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Apartamentos, Whoami, NewProperties, Video, Servicios, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  title = signal('Home Page');
}
