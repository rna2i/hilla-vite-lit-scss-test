import { Layout } from "Frontend/views/view";
import { html } from "lit";
import { customElement } from "lit/decorators";
import styles from './test-component.scss'

@customElement('test-component')
export class TestComponent extends Layout {

    static get styles() {
        return [styles];
    }

    render() {
        return html`
        <div class='test'>
            Outer
            <div class='inner'>Inner</div>
        </div>
        `;
    }

}