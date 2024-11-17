import {
  createElement,
  type ReactElement,
  type ComponentType,
} from 'react';


import type { ServerAdapter } from '..';
import { renderToString } from 'react-dom/server';

const ReactServerAdapter: ServerAdapter<string | ComponentType, ReactElement> = {
  createElement,
  renderToString,
};

export default ReactServerAdapter;