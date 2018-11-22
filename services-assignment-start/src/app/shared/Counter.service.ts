export class CounterService {
  activations = 0;
  deactivations = 0;

  addActivation() {
    this.activations++;
    console.log('in addActivation, this.activations', this.activations);
  }

  addDeactivation() {
    this.deactivations++;
    console.log('in addDeactivation, this.deactivations', this.deactivations);
  }
}
