import { Component, OnInit } from '@angular/core';
import {CounterService} from '../Counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  activations: number;
  deactivations: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.activations = this.counterService.activations;
    this.deactivations = this.counterService.deactivations;
  }

}
