export class CounterService {
  activations = 0;
  deactivations = 0;

  addActivation() {
    this.activations++;
  }

  addDeactivation() {
    this.deactivations++;
  }
}
