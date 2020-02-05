import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  data = [];
  cursor = 4;
  interval;
  hidde;

  constructor(private playerService: PlayerService) {
    playerService.dataEmitter.subscribe((data) => {
      console.log(data)
      this.data = data;
    });
    this.playerService.closePlayer.subscribe((data) => {
      this.hidde = !data;
    })
   }

  ngOnInit() {
  }

  pause() {
    clearInterval( this.interval );
  }

  play() {
    this.interval = setInterval(() => {
      if(this.cursor < this.data[0].length - 2)
        this.cursor++;
      else {
        this.cursor = 4;
        this.pause();
      }
      this.playerService.cursorEmitter.emit(this.cursor);
    }, 1000);
  }

  skipPrevious() {
    if (this.cursor > 4) {
      this.cursor--;
      this.playerService.cursorEmitter.emit(this.cursor);
    }
  }

  skipNext() {
    if (this.cursor < this.data[0].length - 2) {
      this.cursor++;
      this.playerService.cursorEmitter.emit(this.cursor);
    }
  }

  cursorChange(e) {
    this.playerService.cursorEmitter.emit(e);
  }

  close() {
    this.data = [];
    this.playerService.closePlayer.emit("");
  }
}
