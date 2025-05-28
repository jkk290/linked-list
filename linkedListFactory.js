import { Node } from "./nodeFactory";

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node();
        newNode.value = data;

        let lastNode = this.tail();
        
        if (lastNode === null) {
            this.head = newNode;
        } else {
            lastNode.nextNode = newNode;
        }
    }

    tail() {
        if (this.head === null) {
            return null
        }

        let currentPosition = this.head;

        while (currentPosition.nextNode != null) {
            currentPosition = currentPosition.nextNode;
        }

        return currentPosition;
    }
}