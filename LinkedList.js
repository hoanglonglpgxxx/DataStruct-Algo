/**
 * has 2 nodes: head & tail
 * use pointer
 * không có prebuild linkedList
 * prepend O(1)
 * append O(1)
 * lookup O(n)
 * insert O(n)
 * delete O(n)
 */

//Mẫu of linked list
const myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList2 = new LinkedList(10);
myLinkedList2.append(5);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
console.log(myLinkedList2);