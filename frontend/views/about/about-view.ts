import { html } from 'lit';
import styles from './about-view.scss';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';
import { views } from 'Frontend/routes';

@customElement('about-view')
export class AboutView extends View {

  static get styles() {
    console.log(styles);
    
    return [styles];
  }

  render() {
    return html`<div class='test'>
      <img style="width: 200px;" src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>`;
  }
}
