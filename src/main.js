import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { $ } from './select';
import { logo } from './componentes/logo/logo';
import { counter } from './componentes/counter/counter.1';

const app = $('#app');

app.innerHTML = `
  <div>
  ${logo ("https://www.typescriptlang.org/", typescriptLogo, "TypeScript logo")}
  ${logo ("https://www.typescriptlang.org/", typescriptLogo, "TypeScript logo")}
  <h1>Vite + TypeScript</h1>
  ${counter ()}
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const button = $('#counter')
setupCounter(button);


