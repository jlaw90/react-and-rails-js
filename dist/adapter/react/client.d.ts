import { type ReactNode, type ComponentType } from 'react';
import type { ClientAdapter } from '..';
declare let ReactClientAdapter: ClientAdapter<string | ComponentType, ReactNode>;
export default ReactClientAdapter;
