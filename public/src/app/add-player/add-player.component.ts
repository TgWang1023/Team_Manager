import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  error = '';
  new_player = { name: '', position: '' };
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  addPlayerFromService() {
    const observable = this._httpService.addPlayer(this.new_player);
    observable.subscribe((data: any) => {
      console.log(data);
      if (data.error) {
        this.error = data.error.errors.name.message;
      } else {
        this.new_player.name = '';
        this.new_player.position = '';
        this._router.navigate(['/plyrs/list']);
      }
    });
  }

}
