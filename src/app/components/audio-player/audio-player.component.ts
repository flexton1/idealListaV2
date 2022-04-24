import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServiceService } from 'src/app/services/list-service.service';
import { Track } from './track';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor(private listService: ListServiceService,
              private route: ActivatedRoute ) { }

    playlistSearch: string = "";
  msaapPlaylist: Track[] = [];
 
  ngOnInit() {
    this.playlistSearch = this.route.snapshot.params['playlist'];
    // console.log(this.playlistSearch);
    this.listService.getSongs().subscribe(e => this.msaapPlaylist = e.filter(a => 
      a.playlist !== this.playlistSearch)
      );
  }

  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [4,6,10, 12, 15];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = false;
   



}
