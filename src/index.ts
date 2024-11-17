import type { ClientAdapter, ServerAdapter } from './adapter';

export default class ReactAndRails {
  static clientAdapter: ClientAdapter<any, any>;
  static serverAdapter: ServerAdapter<any, any>;

  static createElement(type: string, props: object) {
    return (this.clientAdapter || this.serverAdapter).createElement(type, props);
  }

  static render(reactNode: any, domNode: HTMLElement) {
    return ReactAndRails.clientAdapter.render(reactNode, domNode);
  }

  static hydrate(reactNode: any, domNode: HTMLElement) {
    ReactAndRails.clientAdapter.hydrate(reactNode, domNode);
  }

  static renderToString(reactNode: any) {
    return ReactAndRails.serverAdapter.renderToString(reactNode);
  }
}