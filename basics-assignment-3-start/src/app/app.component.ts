import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphIsVisible = false;
  clicksData = [];
  textWhite = false;

  toggleVisibility($event) {
    console.log('in toggleVisibility, $event = ', $event);
    this.paragraphIsVisible = !this.paragraphIsVisible;
    this.clicksData.push(Date.now());
    return this.paragraphIsVisible;
  }

  getBgColor(i) {
    console.log('i = ', i);
    let bgColor = 'white';

    if (i >= 5) {
      bgColor = 'blue';
    }
    return bgColor;
  }

  getTextColor(i) {
    return i >= 5;
  }
}
