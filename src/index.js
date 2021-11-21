import { render } from 'https://unpkg.com/preact@latest?module';
import { html } from 'https://unpkg.com/htm/preact/index.module.js?module';

import App from './components/App.js';

import GraphOptions from './config.js';

render(html`<${App} graphConfig="${GraphOptions}"/>`, document.body);
