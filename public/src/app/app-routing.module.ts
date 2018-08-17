import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'plyrs', component: PlayersComponent, children: [
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddPlayerComponent }
  ] },
  { path: 'status', component: StatusComponent, children: [
    { path: 'game/:id', component: GameComponent }
  ] },
  { path: '', pathMatch: 'full', redirectTo: '/plyrs/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
