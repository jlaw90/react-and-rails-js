import type { ClientAdapter, ServerAdapter } from './adapter';
export default class ReactAndRails {
    static clientAdapter: ClientAdapter<any, any>;
    static serverAdapter: ServerAdapter<any, any>;
    static createElement(type: string, props: object): any;
    static render(reactNode: any, domNode: HTMLElement): void;
    static hydrate(reactNode: any, domNode: HTMLElement): void;
    static renderToString(reactNode: any): string;
}
