import { html } from 'https://unpkg.com/htm/preact/index.module.js?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';

const makeList = (graphConfig) => graphConfig.data.datasets[0].data.map((item, i) => `${graphConfig.data.labels[i]} - ${item}`);

const List = (props) => {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(makeList(props.graphConfig).map((item) => (html`<li id=${item}>${item}</li>`)));
  }, [props.graphConfig]);

  return html`<ul>${items}</ul>`;
};

export default List;
