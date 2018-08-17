import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getPlayers() {
    return this._http.get('/players');
  }
  getSinglePlayer(id) {
    return this._http.get(`/players/${id}`);
  }
  addPlayer(new_player) {
    return this._http.post('/players', new_player);
  }
  editPlayer(id, updated_player) {
    return this._http.put(`/players/${id}`, updated_player);
  }
  deletePlayer(id) {
    return this._http.delete(`/players/${id}`);
  }
}
