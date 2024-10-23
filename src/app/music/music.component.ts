import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MusicService} from '../service/music.service';

export interface Music {
  title: string;
  artist: string;
  userId: string;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class MusicComponent {
  musics: Music[] = [];

  constructor(private musicService: MusicService) {
  }

  ngOnInit(): void {
    this.getMusics();
  }

  getMusics(): void {
    this.musicService.getMusics().subscribe((data: any) => {
      this.musics = data;
    });
  }

  addMusic(title: string, artist: string, userId: string): void {
    this.musicService.addMusic({title, artist, userId}).subscribe(() => {
      this.getMusics();  // Atualizar a lista de músicas
    });
  }

  editMusic(music: any): void {
    const updatedTitle = prompt('Editar título:', music.title);
    const updatedAuthor = prompt('Editar artista:', music.author);

    if (updatedTitle && updatedAuthor) {
      this.musicService.editMusic(music._id, {title: updatedTitle, author: updatedAuthor}).subscribe(() => {
        alert('Música atualizada com sucesso!');
        this.getMusics();
      });
    }
  }

  deleteMusic(music: any): void {
    if (confirm('Tem certeza que deseja excluir esta música?')) {
      this.musicService.deleteMusic(music._id).subscribe(() => {
        alert('Música excluída com sucesso!');
        this.getMusics();
      });
    }
  }

  canEditOrDelete(music: any): boolean {
    // const currentUser = this.authService.getCurrentUser();
    // return currentUser.roles.includes('ROLE_ADMIN') || music.userId === currentUser.id;
    return true;
  }
}
