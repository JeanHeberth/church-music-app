import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MusicService} from '../service/music.service';

export interface Music {
  title: string;
  author: string;
  userId: string;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class MusicComponent {
  musics: Music[] = [];

  constructor(private musicService: MusicService) {
  }

  ngOnInit(): void {
    this.loadMusics();
  }

  loadMusics(): void {
    this.musicService.getAllMusic().subscribe(
      (data: Music[]) => {
        this.musics = data;
      },
      (error) => {
        console.error('Erro ao carregar músicas:', error);
      }
    );
  }

  addMusic(title: string, author: string, userId: string): void {
    const newMusic: Music = {title, author, userId};
    this.musicService.addMusic(newMusic).subscribe(
      (music: Music) => {
        this.musics.push(music);
      },
      (error) => {
        console.error('Erro ao adicionar música:', error);
      }
    );
  }
}
