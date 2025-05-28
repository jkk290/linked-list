import { Node } from "./nodeFactory";

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {

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