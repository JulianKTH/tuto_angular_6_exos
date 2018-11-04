import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div class="row"><p>WARNING!</p></div>`,
  styles: [`
  p {
    color: red;
  }`]
})
export class WarningAlertComponent {
}
