import {DoublyLinkedList} from "./doubly-linked-list/doubly-linked-list";

const list = new DoublyLinkedList()
list.append(1).append(2).append(3)

console.log(list.toArray())

list.delete(1)
list.delete(2)

console.log(list.toArray())