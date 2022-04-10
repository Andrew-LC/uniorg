import type { Node } from 'unist';
import { stringify } from './stringify.js';

export function uniorgStringify(this: any) {
  this.Compiler = (node: Node) => {
    return stringify(node);
  };
}
