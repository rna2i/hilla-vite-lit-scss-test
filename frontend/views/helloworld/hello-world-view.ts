import '@vaadin/button';
import '@vaadin/notification';
import { Notification } from '@vaadin/notification';
import '@vaadin/text-field';
import * as HelloWorldEndpoint from 'Frontend/generated/HelloWorldEndpoint';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';
import 'Frontend/test-component/test-component';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  name = '';

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  render() {
    return html`
    Test Component:
      <test-component></test-component>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  async sayHello() {
    const serverResponse = await HelloWorldEndpoint.sayHello(this.name);
    Notification.show(serverResponse);
  }
}
