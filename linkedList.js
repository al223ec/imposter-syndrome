
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    // Practical use cases
    // online games, turn based
    // Poker, board games, dominoes
    // Memory management Benefits
    // can break tha data into smaller pices. Data doesn't have to be stored together
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    // Constant Time - = O(1): Poninter to head
    addToHead(value) {
        const newNode = new Node(value, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
    }

    // Constant Time - = O(1):
    addToTail(value) {
        const newNode = new Node(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
    }

    // Constant Time - = O(1):
    removeHead() {
        if (!this.head) {
            return null;
        }
        const { value } = this.head;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        return value;
    }

    // Constant Time - = O(1):
    removeTail() {
        if (!this.tail) {
            return null;
        }
        const { value } = this.tail;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        return value;
    }

    // Linear time complexity
    // O (n) - as the list grows in n elements the time to search will grow proportianlly
    search(searchValue) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === searchValue) {
                return currentNode.value;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    // Linear time complexity
    indexOf(value) {
        const indexes = [];
        let currentIndex = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                indexes.push(currentIndex);
            }
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return indexes;
    }
}

const myLL = new LinkedList();


myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);

/* eslint-disable */
console.log(myLL);
console.log(myLL.search('hello')); // hello
console.log(myLL.search(20)); // 20

console.log(myLL.indexOf(19));

console.log(myLL);
myLL.removeTail();
myLL.removeHead();
console.log(myLL);