import React from 'react';

const createListItems = (list: Array<string | number | any>) =>
  list.map((item, i) => <li key={i}>{item}</li>);

export { createListItems };
