import { Component } from '@angular/core';
import {MusicComponent} from './music/music.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MusicComponent
  ],
  template: '<app-music></app-music>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'church-music-app';
}
