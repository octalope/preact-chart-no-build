import { html } from 'https://unpkg.com/htm/preact/index.module.js?module';
import { useRef, useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import 'https://cdn.jsdelivr.net/npm/chart.js@3.6.0/dist/chart.min.js';

const Graph = (props) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState();

  useEffect(() => {
    if (chart) {
      chart.config.data.labels = [...props.config.data.labels];
      chart.config.data.datasets[0].data = [...props.config.data.datasets[0].data];
      chart.update();
      return;
    }
    // eslint-disable-next-line no-undef
    setChart(new Chart(
      canvasRef.current,
      props.config,
    ));
  }, [props.config, canvasRef, chart]);

  return html`<div><canvas id="myChart" ref=${canvasRef}></canvas></div>`;
};

export default Graph;
