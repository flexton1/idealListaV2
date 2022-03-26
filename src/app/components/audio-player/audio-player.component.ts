import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [4,6,10, 12, 15];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = true;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
   
// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL',
    artist: 'Audio One Artist',
    duration: 150
  },
  {
    title: 'Audio Two Title',
    link: 'Link to Audio Two URL',
    artist: 'Audio Two Artist',
    duration: 150
  },
  {
    title: 'Audio Three Title',
    link: 'Link to Audio Three URL',
    artist: 'Audio Three Artist',
    duration: 150
  },
];
}
