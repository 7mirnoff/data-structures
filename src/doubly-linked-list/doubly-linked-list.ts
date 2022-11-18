import {INode, INodeList} from "./models";

export class DoublyLinkedListNode<T> implements INode<T> {
  public next: DoublyLinkedListNode<T> | null = null
  public previous: DoublyLinkedListNode<T> | null = null

  constructor(
    public value: T,
  ) {
  }
}

export class DoublyLinkedList<T> implements INodeList<T> {
  head: INode<T> | null = null;
  tail: INode<T> | null = null;

  append(value: T): INodeList<T> {
    return undefined;
  }

  delete(value: T): INode<T> | null {
    return undefined;
  }

  deleteHead(): INode<T> | null {
    return undefined;
  }

  deleteTail(): INode<T> | null {
    return undefined;
  }

  find(value?: T | undefined): INode<T> | null {
    return undefined;
  }

  fromArray(values: Array<T>): INodeList<T> {
    return undefined;
  }

  prepend(value: T): INodeList<T> {
    return undefined;
  }

  reverse(): INodeList<T> {
    return undefined;
  }

  toArray(): INode<T>[] {
    return [];
  }

}