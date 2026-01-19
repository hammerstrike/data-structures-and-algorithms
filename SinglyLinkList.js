/**
 * Singly Linked List Implementation
 * 
 * A linear data structure where each element (Node) stores data and a reference 
 * to the next node in the sequence. Unlike arrays, linked lists do not store 
 * elements in contiguous memory locations.
 * 
 * Classes:
 * - Node: Container for the value and the pointer to the next element.
 * - SinglyLinkedList: The list manager containing the head, tail, and length.
 * 
 * Methods Implementation Status:
 * - push(val): Adds a new node to the end of the list.
 * - pop(): Removes the node from the end of the list.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;

    }

    set(index, value){
        let foundNode = this.get(index);

        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;


    }

    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length) {

            let current = this.head;
            let newTail = current;

            while (current.next) {
                newTail = current;
                current = current.next;
            }

            this.tail = newTail
            this.tail.next = null;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;

        } else {
            return undefined;
        }
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    unshift(value){
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list)

// console.log(list.pop());
// console.log(list);

// list.push(6);
// console.log(list)

// list.shift();
// console.log(list);

// list.unshift(1);
console.log(list);
let item = list.get(1);
console.log(item);
item = list.get(1);
console.log(item);
list.set(0,10);
console.log(list);