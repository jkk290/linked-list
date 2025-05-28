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

    prepend(data) {
        let newNode = new Node();
        newNode.value = data;

        newNode.nextNode = this.head
        this.head = newNode;  

    }

    size() {
        if (this.head === null) {
            return 0;
        }

        let currentPosition = this.head;
        let count = 1;

        while (currentPosition.nextNode != null) {            
            currentPosition = currentPosition.nextNode;
            count += 1;
        }

        return count;
    }

    head() {
        return this.head;
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

    at(index) {
        if (this.head === null) {
            return null
        }

        let currentPosition = this.head;
        let count = 0;

        while (count < index && currentPosition.nextNode !== null) {
            currentPosition = currentPosition.nextNode;
            count += 1;
        }

        if (count === index) {
            return currentPosition.value;
        } else {
            return null;
        }        
    }

    pop(){
        if (this.head === null) {
            return null;
        } else if (this.head.nextNode === null) {
            this.head = null;
        }

        let currentPosition = this.head;
        let previousPosition = null;

        while (currentPosition.nextNode !== null) {
            previousPosition = currentPosition;
            currentPosition = currentPosition.nextNode;
        }
        
        previousPosition.nextNode = null;
    }
    
}