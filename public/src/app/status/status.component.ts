import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  selected_game = 1;
  constructor() { }

  ngOnInit() {
  }
  change_selected_game(game) {
    this.selected_game = game;
  }

}
