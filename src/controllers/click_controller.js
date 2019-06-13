import { Controller } from 'stimulus';

export default class ClickController extends Controller {
  static targets = ['description'];

  connect() {
    this.descriptionTarget.textContent = 'Initialized!';
  }

  click(e) {
    e.preventDefault();
    this.descriptionTarget.textContent = 'Submitting...';
  }
}
