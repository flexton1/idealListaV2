import { Component, OnInit } from '@angular/core';
import { PlaylistNames } from './playlist';

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.scss']
})
export class BeginPageComponent implements OnInit {

  constructor() { }

  playlists: PlaylistNames[] = [
    {name: 'Pop',
  imgUrl: 'assets/img/thumbnail-pop.jpg'},
    {name: 'Rock',
    imgUrl: 'assets/img/thumbnail-rock.jpg'},
    {name: 'Narodna',
    imgUrl: 'assets/img/thumbnail-narodna.jpg'},
    {name: 'Party',
    imgUrl: 'assets/img/thumbnail-party.png'},
    {name: 'RnB & HipHop',
    imgUrl: 'assets/img/thumbnail-hiphop.jpg'},
    {name: 'Latino & Reggae',
    imgUrl: 'assets/img/thumbnail-latino.jpg'},
    {name: 'Funky & Disco',
    imgUrl: 'assets/img/thumbnail-balada.jpg'},
    {name: 'Jazz & Blues',
    imgUrl: 'assets/img/thumbnail-jazz.jpg'},
    {name: 'Lounge',
    imgUrl: 'assets/img/thumbnail-lounge.png'},
    {name: 'Dj',
    imgUrl: 'assets/img/thumbnail-electro.jpg'},
    {name: 'Za djecu',
    imgUrl: 'assets/img/thumbnail-djeca.jpg'},
    {name: 'Ostalo',
    imgUrl: 'assets/img/thumbnail-mix.jpg'},
  ]

  ngOnInit(): void {
  }

}
