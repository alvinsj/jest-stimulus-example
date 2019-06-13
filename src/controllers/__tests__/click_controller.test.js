import { Application } from 'stimulus';
import ClickController from '../click_controller';

describe('SorterController', () => {
  var spy;

  beforeAll(() => {
    spy = jest.spyOn(console, 'error');

    document.body.innerHTML = `
      <form>
        <div data-controller="click">
          <input type="submit" data-action="click#click" value="Submit" />
          <div data-target="click.description">Waiting for controller...</div>
        </div>
      </form>
    `;

    const app = Application.start();
    app.register('click', ClickController);
  });

  it('starts stimulus without console error', () => {
    expect(spy).not.toHaveBeenCalled();
  });

  it('sets initial text to Initialized!', () => {
    expect(
      document.querySelector('[data-target="click.description"]').textContent
    ).toBe('Initialized!');
  });

  describe('clicks to submit form', () => {
    var formSubmit = jest.fn();

    beforeAll(() => {
      document.querySelector('form').addEventListener('submit', formSubmit);
      // mocking form.submit
      document.querySelector('[data-action="click#click"]').click();
    });

    it('sets text to Submitting...', () => {
      expect(
        document.querySelector('[data-target="click.description"]').textContent
      ).toBe('Submitting...');
    });
  });
});
