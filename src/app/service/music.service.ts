import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Music} from '../music/music.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:8088/api/music';

  constructor(private http: HttpClient) {
  }

  getAllMusic(): Observable<Music[]> {
    return this.http.get<Music[]>(this.apiUrl);
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.post<Music>(this.apiUrl, music);
  }

  deleteMusic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
