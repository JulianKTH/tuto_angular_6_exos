import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  self;
  intervalID: number;
  delay = 1000;
  round = 0;
  gameStopped = false;
  @Output() generatedNumber = new EventEmitter<number>();
  @Output() gameStoppedEvent = new EventEmitter<boolean>();


  constructor() {
    this.self = this;
  }

  ngOnInit() {
  }

  startGame() {
    console.log('Starting the game...');
    console.log('this.gameStopped = ', this.gameStopped);
    if (this.gameStopped) {
      this.gameStoppedEvent.emit(true);
    }

    const that = this;
    console.log('that = ', that);
    this.intervalID = window.setInterval(function() {
      console.log('this = ', this);
      that.generatedNumber.emit(that.round);
      that.round++;
    }, this.delay);
  }

  pauseGame() {
    console.log('Pausing the game...');
    window.clearInterval(this.intervalID);
    console.log('Game paused');
  }

  stopGame() {
    console.log('Stopping the game...');
    window.clearInterval(this.intervalID);
    this.gameStopped = true;
    console.log('Game stopped');
  }
}
