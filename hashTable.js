
function nextTraversal(bucket) {
    let currentBucket = bucket;
    const buckets = [];

    while (currentBucket) {
        buckets.push(currentBucket);
        currentBucket = currentBucket.next;
    }

    return buckets;
}

function flattenDeep(arr) {
    return arr.reduce((ac, val) => (Array.isArray(val) ? ac.concat(flattenDeep(val)) : ac.concat(val)), []);
}

// Constant time insertion O(1)
// Constant time lookup buckets[index]

// Cons
// - Data doesn't store references to other pieces of data in the data structure
class HashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size) {
        this.buckets = Array(size);
        this.numbuckets = size;
    }

    hash(key) {
        const total = key.split('').reduce((acc, curr) => acc + curr.charCodeAt(), 0);
        return total % this.numbuckets;
    }

    insert(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new HashNode(key, value);
        } else if (this.buckets[index].key === key) {
            this.buckets[index].value = value;
        } else {
            let currentNode = this.buckets[index];
            while (currentNode.next) {
                if (currentNode.next.key === key) {
                    currentNode.next.value = value;
                    return;
                }

                currentNode = currentNode.next;
            }
            currentNode.next = new HashNode(key, value);
        }
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        let currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    retriveAll() {
        return flattenDeep(this.buckets.map(nextTraversal));
    }
}

const myHT = new HashTable(30);

myHT.insert('Liv', 'liv@gmail.com');
myHT.insert('Megan', 'megan@live.com');
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Dane', 'dong@gmail.com');

/* eslint-disable */
// console.log(myHT.get('Megan'));
// console.log(myHT.get('Dane'));
console.log(myHT.retriveAll());
// console.log(myHT.hash("Becca"));
