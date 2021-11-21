import { html } from 'https://unpkg.com/htm/preact/index.module.js?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';

import Graph from './Graph.js';
import List from './List.js';

const App = (props) => {
  const [graphConfig, setGraphConfig] = useState(props.graphConfig);

  useEffect(() => {
    setGraphConfig(props.graphConfig);
  }, [props.graphConfig]);

  const addData = () => {
    const newData = {
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
        ],
        datasets: [{
          data: [0, 10, 5, 2, 20, 30, 45, 50],
        }],
      },
    };
    setGraphConfig(newData);
  };

  return html`
    <h1>Preact Chart.js Example</h1>
    <button onClick="${addData}">AddData</button>
    <${List} graphConfig="${graphConfig}" />
    <${Graph} config=${graphConfig} />
  `;
};

export default App;
