import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  all_players = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPlayersFromService();
  }
  getAllPlayersFromService() {
    const observable = this._httpService.getPlayers();
    observable.subscribe((data: any) => {
      this.all_players = data.data;
    });
  }
  deletePlayerFromService(id) {
    const observable = this._httpService.deletePlayer(id);
    observable.subscribe((data: any) => {
      this.getAllPlayersFromService();
    });
  }

}
