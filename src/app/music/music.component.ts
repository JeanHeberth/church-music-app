import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

interface Music {
  title: string;
  author: string;
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
  musicList: Music[] = [];
  title: string = '';
  author: string = '';

  addMusic() {
    if (this.title && this.author) {
      this.musicList.push({title: this.title, author: this.author});
      this.title = '';
      this.author = '';
    }
  }
}
