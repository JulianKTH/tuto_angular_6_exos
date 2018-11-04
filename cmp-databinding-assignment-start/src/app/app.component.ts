import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  ongeneratedNumber(generatedNumber: number) {
    console.log('ongeneratedNumber, generatedNumber=', generatedNumber);
    if (generatedNumber % 2 === 0) {
      this.evenNumbers.push(generatedNumber);
    } else {
      this.oddNumbers.push(generatedNumber);
    }
  }

  onGameStopped(gameStopped: boolean) {
    console.log('in onGameStopped, gameStopped = ', gameStopped);
    if (gameStopped) {
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
  }
}
