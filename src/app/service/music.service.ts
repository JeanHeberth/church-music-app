import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Music} from '../music/music.component';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:8888/api/music';

  constructor(private http: HttpClient) {
  }

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.apiUrl);
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.post<Music>(this.apiUrl, music);
  }

  editMusic(id: string, music: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, music);
  }

  deleteMusic(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
