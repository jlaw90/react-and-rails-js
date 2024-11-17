interface AdapterCommon<CreateElementType, NodeType> {
    createElement: (component: CreateElementType, props: object, ...children: NodeType[]) => NodeType;
}
export interface ClientAdapter<CreateElementType, NodeType> extends AdapterCommon<CreateElementType, NodeType> {
    render: (reactNode: NodeType, domNode: HTMLElement) => void;
    hydrate: (reactNode: NodeType, domNode: HTMLElement) => void;
}
export interface ServerAdapter<CreateElementType, NodeType> extends AdapterCommon<CreateElementType, NodeType> {
    renderToString: (reactNode: NodeType) => string;
}
export {};
