import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  selected_1 = true;
  selected_2 = false;
  selected_3 = false;
  all_players = [];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if (params.id === '1') {
        this.selected_1 = true;
        this.selected_2 = false;
        this.selected_3 = false;
      } else if (params.id === '2') {
        this.selected_1 = false;
        this.selected_2 = true;
        this.selected_3 = false;
      } else if (params.id === '3') {
        this.selected_1 = false;
        this.selected_2 = false;
        this.selected_3 = true;
      } else {
        this._router.navigate(['/status/game/1']);
      }
    });
    this.getAllPlayersFromService();
  }
  getAllPlayersFromService() {
    const observable = this._httpService.getPlayers();
    observable.subscribe((data: any) => {
      console.log(data.data);
      this.all_players = data.data;
    });
  }
  updatePlayerFromService_1(id, value) {
    const observable = this._httpService.editPlayer(id, { status_1: value });
    observable.subscribe((data: any) => {
      this.getAllPlayersFromService();
    });
  }
  updatePlayerFromService_2(id, value) {
    const observable = this._httpService.editPlayer(id, { status_2: value });
    observable.subscribe((data: any) => {
      this.getAllPlayersFromService();
    });
  }
  updatePlayerFromService_3(id, value) {
    const observable = this._httpService.editPlayer(id, { status_3: value });
    observable.subscribe((data: any) => {
      this.getAllPlayersFromService();
    });
  }

}
