import { createElement, type ReactNode, type ComponentType } from 'react';
import ReactDOM from 'react-dom';
import type { ClientAdapter } from '..';

let ReactClientAdapter: ClientAdapter<string | ComponentType, ReactNode>;

try {
  debugger;
  const { createRoot, hydrateRoot } = await import('react-dom/client');

  ReactClientAdapter = {
    createElement,
    hydrate(reactNode, domNode) {
      return hydrateRoot(domNode, reactNode);
    },

    render(reactNode, domNode): void {
      createRoot(domNode).render(reactNode);
    },
  };
} catch (e) {
  ReactClientAdapter = {
    createElement,
    hydrate(reactNode, domNode) {
      // @ts-ignore
      return ReactDOM.hydrate(reactNode, domNode);
    },

    render(reactNode, domNode): void {
      // @ts-ignore
      ReactDOM.render(reactNode, domNode);
    },
  };
}

export default ReactClientAdapter;